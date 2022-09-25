import goods from "../pictures/nintendo.png"

const OrderObj = (props) =>{
    const status_text = {
        "currently_bid": "Currently Bid",
        "bidder-to-pay": "To Pay",
        "bidder-to-pay-wait-admin": "To Pay",
        "to-delivered": "To Delivered",
        "bidder-to-confirm": "To Confirm",
        "on-auction": "On Auction",
        "auctioneer-to-pay": "To Pay",
        "to-shipped": "To Shipped",
        "auctioneer-to-confirm": "To Confirm",
        "completed": "Completed",
    }

	return (
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
                <div className= {`Follow-button ${props.status_class}`}>
                    <h6>{status_text[props.status_class]}</h6>
                </div>
            </div>
            
		</div>
	)
}

export default OrderObj;