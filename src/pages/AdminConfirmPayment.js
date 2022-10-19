import styles from "../css/AdminConfirmPayment.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { getData,postData } from "../components/fetchData";
import React from "react";
import confirm from "../pictures/confirm.png";
import '../css/PopupConRev.css'
import Modal from "react-bootstrap/Modal";
import PopupError from "../components/PopupError";

const PopupConfirm = (props) => { // TODO use component popup confirm
  const time = new Date(Number(props.data.transferDataTime))
  return (
    <Modal
      show={props.modalShow}
      onHide={() => props.setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">Confirm?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Auction ID</h6>
        <p>{props.auction}</p>
        <h6>Name</h6>
        <p>{props.data.receiverName ? props.data.receiverName : "-"}</p>
        <h6>Telephone</h6>
        <p>{props.data.telephoneNO ? props.data.telephoneNO : "-"}</p>
        <h6>Address</h6>
        <p>{props.data.address ? props.data.address : "No address"}</p>
        <h6>Transfer date and time</h6>
        <p>{String(time)}</p>
        <h6>Transaction Slip</h6>
        <img src={props.data.transactionSlip} className="tracking-img"/>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.confirm(props.auction,"confirm")
            props.setModalShow(false)
          }}
        >
          Confirm
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.confirm(props.auction,"deny")
            props.setModalShow(false)
          }}
        >
          Deny
        </button>
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => {
            props.setModalShow(false)
          }}
        >
          Cancel
        </button>
      </Modal.Footer>
    </Modal>
  )
}

const AdminConfirmPayment = () => {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState("loading")
  const [auctionID,setAuctionID] = useState(null)
  const [transaction,setTransaction] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [error, setError] = useState(false)
  useEffect(()=>{
    getList();
  },[])
  const getList = ()=>{
    getData("/admin/transaction-list?filter=confirmSlip")
    .then(res=>{
      setData(res.transactionList)
      setStatus(res.status)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  }
  const getTransaction = (billingInfoID,auctionID)=>{
    setTransaction({})
    getData("/admin/transaction/"+billingInfoID+"?detail=payment")
    .then(res=>{
      setTransaction(res.detail)
      setAuctionID(auctionID)
      setStatus(res.status)
      setModalShow(true)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  }
  const confirmTransaction = (auction,confirmStatus)=>{
    postData("/admin/transaction/confirm/"+auction,
    JSON.stringify({
      confirm:"slip",
      confirmStatus: confirmStatus
    }))
    .then(res=>{
      getList()
    })
    .catch(e=>{
      setError(e.message)
    })
  }
  if(status == "success"){
    return (
      <>
        <h1>Confirm Payment</h1>
        <div className={styles.App3}>
          <table className={styles.table}>
            <thead>
            <tr>
              <th className={styles.th}>Auctioneer</th>
              <th className={styles.th}>Winner</th>
              <th className={styles.th}>Price</th>
              <th className={styles.th}></th>
            </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key} className={styles.tr}>
                  <td className={styles.td}>{val.auctioneerEmail}</td>
                  <td className={styles.td}>{val.bidderEmail}</td>
                  <td className={styles.td}>{val.winningPrice}</td>
                  <td className={styles.td}>
                    <a href="" onClick={(e)=>{
                      getTransaction(val.billingInfoID,val.auctionID)
                      e.preventDefault()
                      }}>detail</a>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
        <PopupConfirm
        modalShow={modalShow}
        setModalShow={setModalShow}
        data={transaction}
        auction={auctionID}
        confirm={confirmTransaction}
        />
        <PopupError
        error={error}
        setError={setError}
        />
      </>
    );
  }
  else if(status == "loading"){
    return (
      <p>Loading...</p>
    )
  }
  else{
    return (
      <div>
        <h1>Error</h1>
        <p>{data}</p>
      </div>
    )
  }
};
export default AdminConfirmPayment;
