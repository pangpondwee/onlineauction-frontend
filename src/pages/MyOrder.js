import OrderObj from "../components/OrderObj";
import {MyBidNav, MyAuctionNav} from "../components/MyOrderNav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function text_alert(status){
    if(status==="currently_bid") return "Your last bid: 1800$"
    else if(status==="bidder-to-pay") return "Waiting for your payment"
    else if(status==="bidder-to-pay-wait-admin") return "Waiting for admin to confirm your payment"
    else if(status==="to-delivered") return "Waiting for auctioneer to ship your item"
    else if(status==="To Confirm") return "An item is on its way to you. You can check a tracking number here.If you’re satisfy with your item, click accept."
    else if(status==="on-auction") return "Time left: 13 hr 13 m 13 s"
    else if(status==="auctioneer-to-pay") return "Waiting for payment from Pongsatorn (Bidder)"
    else if(status==="to-shipped") return "Waiting for your payment"
    else if(status==="auctioneer-to-confirm") return "Waiting for bidder to confirm"
    else return
}

const MyOrder = () =>{

    const location = useLocation()

    const [data,setData] = useState({});
    const [status,setStatus]=useState("unknown");

    // useEffect(()=>{
	// 	getData(`/api/user/myorder?list='`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData(res.data);
	// 		}
	// 		else{
	// 			setData(res.message);
	// 		}
	// 	})
	// },[]);

	return (
        <>
            {(location.search.split("?")[1] === "list=bid")? <MyBidNav/> : <MyAuctionNav/>}
            <div className="all-review">
                {/* store each order */}
                <OrderObj status="Currently Bid" status_class="currently_bid" text_alert={text_alert("currently_bid")} by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Pay" status_class="bidder-to-pay" text_alert={text_alert("bidder-to-pay")} by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Pay" status_class="bidder-to-pay-wait-admin" text_alert={text_alert("bidder-to-pay-wait-admin")} by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Delivered" status_class="to-delivered" text_alert={text_alert("to-delivered")} by_who="(By Kong Pakkapol)"/>
                <OrderObj status="To Confirm" status_class="bidder-to-confirm" text_alert={text_alert("bidder-to-confirm")} by_who="(By Kong Pakkapol)" />
                <OrderObj status="Completed" status_class="completed" by_who="(By Kong Pakkapol)"/>
                <OrderObj status="On Auction" status_class="on-auction" text_alert={text_alert("on-auction")}/>
                <OrderObj status="To Pay" status_class="auctioneer-to-pay" text_alert={text_alert("auctioneer-to-pay")}/>
                <OrderObj status="To Shipped" status_class="to-shipped" text_alert={text_alert("currently_bid")}/>
                <OrderObj status="To Confirm" status_class="auctioneer-to-confirm" text_alert={text_alert("to-shipped")}/>
                <OrderObj status="Completed" status_class="completed"/>
            </div>
        </>
	)
}
export default MyOrder;