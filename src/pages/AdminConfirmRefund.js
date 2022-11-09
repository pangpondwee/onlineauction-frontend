import styles from "../css/AdminConfirmDelivery.module.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect,useState } from "react";
import getData, { postData } from "../components/fetchData";
import PopupError from "../components/PopupError";
import Modal from 'react-bootstrap/Modal'

const PopupConfirm = (props) => { // TODO use component popup confirm
  const time = new Date(Number(props.data.dateCreated))
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
        <h6>Refund ID</h6>
        <p>{props.refund}</p>
        <h6>Refundee ID</h6>
        <p>{props.data.refundeeID}</p>
        <h6>Refund Amount</h6>
        <p>{props.data.refundAmount}</p>
        <h6>Date Created</h6>
        <p>{String(time)}</p>
        <h6>User Payment Provided</h6>
        <p>{props.data.userPaymentProvided? "Yes" : "No"}</p>
        <hr/>
        <h6>Bank Number</h6>
        <p>{props.data.bankNO}</p>
        <h6>Bank Name</h6>
        <p>{props.data.bankName}</p>
        <h6>Bank Account Name</h6>
        <p>{props.data.bankAccountName}</p>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            props.confirm(props.refund)
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
  // if(!props.data.refundeeID){
  //   return (
  //     <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
  //         <div className="modal-dialog modal-dialog-centered">
  //             <div className="modal-content">
  //                 <p style={{paddingBottom: "686.4px"}}>Loading...</p>
  //             </div>
  //         </div>
  //     </div>
  //   )
  // }
  // const time = new Date(Number(props.data.dateCreated))
  // return (
  //     <div className="modal fade" id="confirmModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
  //         <div className="modal-dialog modal-dialog-centered">
  //             <div className="modal-content">
  //                 <div className="modal-header">
  //                     <div className="modal-confirm-header-text">
  //                         <div className="modal-confirm-head-st modal-title" id="confirmModalLabel">Confirm Payment</div>
  //                     </div>
  //                     <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
  //                 </div>
  //                 <div className="modal-body-confirm">
  //                     <h6>Refund ID</h6>
  //                     <p>{props.refund}</p>
  //                     <h6>Refundee ID</h6>
  //                     <p>{props.data.refundeeID}</p>
  //                     <h6>Refund Amount</h6>
  //                     <p>{props.data.refundAmount}</p>
  //                     <h6>Date Created</h6>
  //                     <p>{String(time)}</p>
  //                     <h6>User Payment Provided</h6>
  //                     <p>{props.data.userPaymentProvided? "Yes" : "No"}</p>
  //                     <hr/>
  //                     <h6>Bank Number</h6>
  //                     <p>{props.data.bankNO}</p>
  //                     <h6>Bank Name</h6>
  //                     <p>{props.data.bankName}</p>
  //                     <h6>Bank Account Name</h6>
  //                     <p>{props.data.bankAccountName}</p>
  //                 </div>
  //                 <div className="modal-footer-confirm">
  //                     <button type="button" className="btn btn-primary" onClick={()=>props.confirm(props.refund)}>Confirm</button>
  //                     {/* <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Deny</button> */}
  //                     <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Cancel</button>
  //                 </div>
  //             </div>
  //         </div>
  //     </div>
  )
}

const AdminConfirmRefund = () => {
  const [data,setData] = useState([]);
  const [status,setStatus] = useState("loading")
  const [refundID,setRefundID] = useState(null)
  const [transaction,setTransaction] = useState({})
  const [modalShow, setModalShow] = useState(false)
  const [error, setError] = useState(false)
  useEffect(()=>{
    getList()
  },[])
  const getList = ()=>{
    getData("/admin/refundlist")
    .then(res=>{
      setData(res.data)
      setStatus(res.status)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  }

  const getTransaction = (refundID)=>{
    setTransaction({})
    getData("/admin/refund/"+refundID)
    .then(res=>{
      setTransaction(res.data)
      setRefundID(refundID)
      setStatus(res.status)
      setModalShow(true)
    })
    .catch(e=>{
      setStatus("error");
      setData(e.message)
    })
  }
  const confirmRefund = (refundID)=>{
    postData("/admin/refund/"+refundID,null)
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
        <PopupConfirm
        modalShow={modalShow}
        setModalShow={setModalShow}
        data={transaction}
        refund={refundID}
        confirm={confirmRefund}
        />
        <h1>Confirm Refund</h1>
        <div className={styles.App4}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Refund Amount</th>
                <th className={styles.th}>dateCreated</th>
                <th className={styles.th}>Refundee</th>
                <th className={styles.th}></th>
              </tr>
            </thead>
            <tbody>
            {data.map((val, key) => {
              return (
                <tr key={key} className={styles.tr}>
                  <td className={styles.td}>{val.refundAmount}</td>
                  <td className={styles.td}>{val.dateCreated}</td>
                  <td className={styles.td}>{val.refundeeEmail}</td>
                  <td className={styles.td}>
                    <a href="" onClick={(e)=>{
                      getTransaction(val._id)
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
export default AdminConfirmRefund;
