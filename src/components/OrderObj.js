import { Link, useNavigate } from "react-router-dom";
import React from "react";
import confirm from "../pictures/confirm.png";
import '../css/PopupConRev.css'

import goods from "../pictures/nintendo.png"

const OrderObj = (props) =>{
    const navigate = useNavigate()

    const navigateTo = ()=>{
        if(props.data.auctionStatus==="bidding") navigate(`/auction/${props.data.auctionID}`)
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
        "auction-waitingForShipping": "To Shipped",
        "auction-waitingForConfirm": "To Confirm",
        "auction-completed": "Completed",
    }

    let status_of_auction = props.type+'-'+(props.data.billingStatus? props.data.billingStatus : props.data.auctionStatus)

    function getDate(timeRemaining){
        // TODO make date lighter
        // const d = new Date(timeRemaining);
        // const d_days = Math.floor(timeRemaining/(24*60*60*1000)); // days remaining
        // const d_hour = d.getHours();
        // const d_minute = d.getMinutes();
        // const d_seconds = d.getSeconds();
        // if(timeRemaining <= 0){
        //     return "Ended";
        // }
        // if(d_days > 2){
        //     return `${d_days} day(s)`;
        // }
        // else{
        //     return `${d_hour}hr ${d_minute}m ${d_seconds}s`;
        // }
        return "13 hr 13 m 13 s"
    }

    function text_alert(){
        if(status_of_auction==="bid-bidding") return `Your last bid: ${props.data.userBidPrice}$`
        else if(status_of_auction==="bid-waitingForPayment") return "Waiting for your payment"
        else if(status_of_auction==="bid-waitingConfirmSlip") return "Waiting for admin to confirm your payment"
        else if(status_of_auction==="bid-waitingForShipping") return "Waiting for auctioneer to ship your item"
        else if(status_of_auction==="bid-waitingForConfirm") return "An item is on its way to you. You can check a tracking number here.If you’re satisfy with your item, click accept."
        else if(status_of_auction==="auction-bidding") return `Time left: ${getDate(props.data.endDate)}`
        else if(status_of_auction===("auction-waitingForPayment" || "auction-waitingConfirmSlip")) return "Waiting for payment from Bidder"
        else if(status_of_auction==="auction-waitingForShipping") return "Waiting for your shipping"
        else if(status_of_auction===("auction-waitingForConfirm" || "auction-waitingForConfirm")) return "Waiting for bidder to confirm"
        else return
    }

	return (
        <>
		<div className="Review-box Order-box">
			<img src={props.data.productPicture} alt="List_goods" className="mini-pic-goods"/>
            <span>
                <div className="d-flex">
                    <h4>{props.data.productName}</h4>
                    <pre>     </pre>
                    {props.type==="bid"? <h6>(By {props.data.auctioneerDisplayname})</h6> : <></>}
                </div>
                
                <h6>Highest Bid : {props.data.lastBid} Baht</h6>
                <h6 className="status-text">{text_alert(status_of_auction)}</h6>
            </span>
            <div className="d-flex justify-content-end">
                <div className= {`Follow-button ${status_of_auction}`} 
                data-bs-toggle= {status_of_auction==="bid-waitingForConfirm"? "modal":""} data-bs-target={status_of_auction==="bid-waitingForConfirm"? "#confirmModal":""}
                onClick={navigateTo}>
                    <h6>{status_text[status_of_auction]}</h6>
                </div>
            </div> 
		</div>
    </>
	)
}

export default OrderObj;