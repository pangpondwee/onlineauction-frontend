import { Link, useNavigate } from "react-router-dom";
import React from "react";
import confirm from "../pictures/confirm.png";
import '../css/PopupConRev.css'

import goods from "../pictures/nintendo.png"

const OrderObj = (props) =>{
    const navigate = useNavigate()

    const navigateTo = ()=>{
        navigate(`/auction/${props.auctionId}`)
    }

    const status_text = {
        "bid-currently": "Currently Bid",
        "bid-waitingForPayment": "To Pay",
        "bid-waitingConfirmSlip": "To Pay",
        "bid-waitingForShipping": "To Delivered",
        "bid-waitingForConfirm": "To Confirm",
        "bid-completed": "Completed",
        "auction-on": "On Auction",
        "auction-waitingForPayment": "To Pay",
        "auction-waitingForShipping": "To Shipped",
        "auction-waitingForConfirm": "To Confirm",
        "auction-completed": "Completed",
    }

	return (
        <>
		<div className="Review-box Order-box">
			<img src={goods} alt="Review_goods" className="mini-pic-goods"/>
            <span>
                <div className="d-flex">
                    <h4>{props.name}</h4>
                    <pre>     </pre>
                    {props.by_who? <h6>(By {props.by_who})</h6> : <></>}
                </div>
                
                <h6>Highest Bid : 2000 Baht</h6>
                <h6 className="status-text">{props.text_alert}</h6>
            </span>
            <div className="d-flex justify-content-end">
                <div className= {`Follow-button ${props.status_class}`} 
                data-bs-toggle="modal" data-bs-target={props.status_class==="bid-waitingForConfirm"? "#confirmModal":""}>
                    <h6>{status_text[props.status_class]}</h6>
                </div>
            </div> 
		</div>
        
        <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <img className="popup-confirm-img" src={confirm} alt="shipping"/>
                    <div className="modal-confirm-header-text">
                        <div className="modal-confirm-head-st" class="modal-title" id="confirmModalLabel">Your item is on its way</div>
                        <h6 class="modal-title" id="confirmModalLabel">Check item information and a tracking number below</h6>
                    </div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body-confirm">
                    <button className="billing btn-link">Billing Info</button>
                    <h6>Item Name : Nintendo Switch</h6>
                    <h6>Auctioneer Name : Kong Pakkapol</h6>
                    <h6>Shipping : Thailand Post</h6>
                    <h6>Tracking Number : ABCDEFGH12345</h6>
                    <div className="tracking-img"></div>
                    <h6>Do you confirm that the package has arrived correctly?</h6>
                </div>
                <div class="modal-footer-confirm">
                    <button type="button" class="btn btn-primary">Confirm</button>
                    <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Deny</button>
                    <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Not Yet</button>
                </div>
            </div>
        </div>
    </div>
    </>
	)
}

export default OrderObj;