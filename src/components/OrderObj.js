import { Link, useNavigate } from "react-router-dom";
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
		<div className="Review-box Order-box" onClick={navigateTo}>
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
                <div className= {`Follow-button ${props.status_class}`}>
                    <h6>{status_text[props.status_class]}</h6>
                </div>
            </div> 
		</div>
	)
}

export default OrderObj;