import { Link, useNavigate } from 'react-router-dom'
import React from 'react'
import confirm from '../pictures/confirm.png'
import '../css/PopupConRev.css'
import { useState, useEffect } from 'react'
import {getDateSince, getDate} from "../components/util";

const OrderObj = (props) => {
  const navigate = useNavigate()

  const timeRemaining = props.data.endDate - Date.now()

  const navigateTo = () => {
    if (props.data.auctionStatus === 'bidding') navigate(`/auction/${props.data.auctionID}`)
    else if(status_of_auction === 'bid-waitingForPayment') navigate(`/payment/${props.data.auctionID}`)
    else navigate(`/billing-info/${props.data.auctionID}`)
  }

    const status_text = {
        "bid-bidding": "Currently Bid",
        "bid-waitingForPayment": "To Pay",
        "bid-waitingConfirmSlip": "To Pay",
        "bid-waitingForShipping": "To Delivered",
        "bid-waitingForConfirm": "To Confirm",
        "bid-completed": "Completed",
        "auction-bidding": "On Auction",
        "auction-waitingForPayment": "To Pay",
        "auction-waitingConfirmSlip": "To Pay",
        "auction-waitingForShipping": "To Shipped",
        "auction-waitingForConfirm": "To Confirm",
        "auction-completed": "Completed",
    }

  let status_of_auction =
    props.type +
    '-' +
    (props.data.billingStatus
      ? props.data.billingStatus
      : props.data.auctionStatus)

    const Timer = (props)=>{
      const [time,setTime] = useState(props.timeRemaining);
      useEffect(()=>{
        const timer = setInterval(() => {
          setTime(time-1000)
        }, 1000);
        return ()=>clearInterval(timer);
      })
      return (
        <h6 id="time-remaining" className='info-data status-text'>Time left: {getDate(time)}</h6>
      )
    }

    function text_alert(){
        if(status_of_auction==="bid-bidding") return `Your last bid: ${props.data.userBidPrice}$`
        else if(status_of_auction==="bid-waitingForPayment") return "Waiting for your payment"
        else if(status_of_auction==="bid-waitingConfirmSlip") return "Waiting for admin to confirm your payment"
        else if(status_of_auction==="bid-waitingForShipping") return "Waiting for auctioneer to ship your item"
        else if(status_of_auction==="bid-waitingForConfirm") return "An item is on its way to you. You can check a tracking number here.If you’re satisfy with your item, click accept."
        //else if(status_of_auction==="auction-bidding") return `Time left: ${getDate(props.data.endDate)}`
        else if(status_of_auction==="auction-waitingForPayment") return "Waiting for payment from Bidder"
        else if(status_of_auction=== "auction-waitingConfirmSlip") return "Waiting for admin to confirm bidder's payment"
        else if(status_of_auction==="auction-waitingForShipping") return "Waiting for your shipping"
        else if(status_of_auction==="auction-waitingForConfirm") return "Waiting for bidder to confirm"
        else return
    }

  return (
    <>
      <div className="Review-box Order-box">
        <img
          src={props.data.productPicture}
          alt="List_goods"
          className="mini-pic-goods"
        />
        <span>
          <div className="d-flex">
            <h4>{props.data.productName}</h4>
            <pre> </pre>
            {props.type === 'bid' ? (
              <h6>(By {props.data.auctioneerDisplayname})</h6>
            ) : (
              <></>
            )}
          </div>

          <h6>Highest Bid : {props.data.lastBid} Baht</h6>
          <div className="status-box">
            <h6 className="status-text">{text_alert(status_of_auction)}</h6>
            {(status_of_auction==="auction-bidding" || status_of_auction==="bid-bidding")? <Timer timeRemaining={timeRemaining}/> : <></>}
          </div>
          
        </span>
        <div className="d-flex justify-content-end">
          <div
            className={`Follow-button ${status_of_auction}`}
            data-bs-toggle={
              status_of_auction === 'bid-waitingForConfirm' ? 'modal' : ''
            }
            data-bs-target={
              status_of_auction === 'bid-waitingForConfirm'
                ? '#confirmModal'
                : ''
            }
            onClick={navigateTo}>
            <h6>{status_text[status_of_auction]}</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderObj
