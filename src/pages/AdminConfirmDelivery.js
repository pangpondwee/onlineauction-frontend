import styles from "../css/AdminConfirmDelivery.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import getData, { postData } from "../components/fetchData";
import Modal from 'react-bootstrap/Modal'
import PopupError from "../components/PopupError";

const PopupConfirm = (props) => { // TODO use component popup confirm
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
        <h6>Bank</h6>
        <p>{props.data.bankName ? props.data.bankName : "-"}</p>
        <h6>Account Number</h6>
        <p>{props.data.accountNumber ? props.data.accountNumber : "-"}</p>
        <h6>Account Name</h6>
        <p>{props.data.accountName ? props.data.accountName : "-"}</p>
        <h6>Tracking Number</h6>
        <p>{props.data.trackingNumber ? props.data.trackingNumber : "-"}</p>
        <h6>Shipping Company</h6>
        <p>{props.data.shippingCompany ? props.data.shippingCompany : "-"}</p>
        <h6>Package Picture</h6>
        <img src={props.data.packagePicture} className="tracking-img" alt="tracking-img"/>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.confirm(props.auction)
            props.setModalShow(false)
          }}
        >
          Confirm
        </button>
        {/* <button
          type="button"
          className="btn btn-danger"
          onClick={() => {
            props.confirm(props.auction,"deny")
            props.setModalShow(false)
          }}
        >
          Deny
        </button> */}
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

const AdminConfirmDelivery = () => {
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
    getData("/admin/transaction-list?filter=payAuctioneer")
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
    getData("/admin/transaction/"+billingInfoID+"?detail=delivery")
    .then(res=>{
      setTransaction(res.detail)
      setAuctionID(auctionID)
      setModalShow(true)
      setStatus(res.status)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  }
  const confirmTransaction = (auction)=>{
    postData("/admin/transaction/confirm/"+auction,
    JSON.stringify({
      "confirm":"payment"
    }))
    .then(res=>{
      console.log("No error")
      getList();
    })
    .catch(e=>{
      setError(e.message)
    })
  }
  if(status == "success"){
    return (
      <>
        <PopupConfirm
        modalShow={modalShow}
        setModalShow={setModalShow}
        data={transaction}
        auction={auctionID}
        confirm={confirmTransaction}
        />
        <h1>Confirm Delivery</h1>
        <div className={styles.App4}>
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
export default AdminConfirmDelivery;
