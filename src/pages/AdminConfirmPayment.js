import styles from "../css/AdminConfirmPayment.module.css";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";
import { getData,postData } from "../components/fetchData";
import React from "react";
import confirm from "../pictures/confirm.png";
import '../css/PopupConRev.css'

const PopupConfirm = (props) => { // TODO use component popup confirm
  if(!props.data.transferDataTime){
    return (
      <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <p style={{paddingBottom: "686.4px"}}>Loading...</p>
              </div>
          </div>
      </div>
    )
  }
  const time = new Date(Number(props.data.transferDataTime))
  return (
      <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                  <div className="modal-header">
                      <div className="modal-confirm-header-text">
                          <div className="modal-confirm-head-st modal-title" id="confirmModalLabel">Confirm Payment</div>
                      </div>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body-confirm">
                      <h6>Auction ID</h6>
                      <p>{props.auction}</p>
                      <h6>Name</h6>
                      <p>{props.data.receiverName ? props.data.receiverName : "-"}</p>
                      <h6>Telephone</h6>
                      <p>{props.data.telephoneNO ? props.data.telephoneNO : "-"}</p>
                      <h6>Address</h6>
                      <p>{props.data.address ? "No address" : props.data.address}</p>
                      <h6>Transfer date and time</h6>
                      <p>{String(time)}</p>
                      <h6>Transaction Slip</h6>
                      <img src={props.data.transactionSlip} className="tracking-img"/>
                  </div>
                  <div className="modal-footer-confirm">
                      <button type="button" className="btn btn-primary" onClick={()=>props.confirm(props.auction)}>Confirm</button>
                      {/* <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Deny</button> */}
                      <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
                  </div>
              </div>
          </div>
      </div>
  )
}

const AdminConfirmPayment = () => {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState("loading")
  const [auctionID,setAuctionID] = useState(null)
  const [transaction,setTransaction] = useState({})
  useEffect(()=>{
    getData("/admin/transaction-list?filter=confirmSlip")
    .then(res=>{
      setData(res.transactionList)
      setStatus(res.status)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  },[])
  const getTransaction = (billingInfoID,auctionID)=>{
    setTransaction({})
    getData("/admin/transaction/"+billingInfoID+"?detail=payment")
    .then(res=>{
      setTransaction(res.detail)
      setAuctionID(auctionID)
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
      "confirm":"slip"
    }))
    .then(res=>{
      console.log("No error")
    })
    .catch(e=>{
      console.log(e)
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
                    <a href="" onClick={()=>getTransaction(val.billingInfoID,val.auctionID)} data-bs-toggle="modal" data-bs-target="#confirmModal">detail</a>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
        <PopupConfirm
        data={transaction}
        auction={auctionID}
        confirm={confirmTransaction}
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
