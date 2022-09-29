import OrderObj from "../components/OrderObj";
import {MyBidNav, MyAuctionNav} from "../components/MyOrderNav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {getData} from '../components/fetchData';

function text_alert(status){
    if(status==="bid-currently") return "Your last bid: 1800$"
    else if(status==="bid-waitingForPayment") return "Waiting for your payment"
    else if(status==="bid-waitingConfirmSlip") return "Waiting for admin to confirm your payment"
    else if(status==="bid-waitingForShipping") return "Waiting for auctioneer to ship your item"
    else if(status==="bid-waitingForConfirm") return "An item is on its way to you. You can check a tracking number here.If you’re satisfy with your item, click accept."
    else if(status==="auction-on") return "Time left: 13 hr 13 m 13 s"
    else if(status===("auction-waitingForPayment" || "auction-waitingConfirmSlip")) return "Waiting for payment from Pongsatorn (Bidder)"
    else if(status==="auction-waitingForShipping") return "Waiting for your shipping"
    else if(status===("auction-waitingForConfirm" || "auction-waitingForConfirm")) return "Waiting for bidder to confirm"
    else return
}

const MyOrder = () =>{
    const location = useLocation()
    const [list, type] = location.search.slice(1).split("&")

    const [data_mybid_active,setData_myBid_active] = useState([{productName: "Nintendo Switch", billingStatus: "currently", by_who:"Kong Pakkapol"},
                                                    {productName: "Nintendo Switch", billingStatus: "currently", by_who:"Kong Pakkapol"},
                                                    {productName: "Nintendo Switch", billingStatus: "currently", by_who:"Kong Pakkapol"}]);
    const [data_mybid_wait,setData_myBid_wait] = useState([{productName: "Nintendo Switch", billingStatus: "waitingForPayment", by_who:"Kong Pakkapol"},
                                                    {productName: "Nintendo Switch", billingStatus: "waitingConfirmSlip", by_who:"Kong Pakkapol"},
                                                    {productName: "Nintendo Switch", billingStatus: "waitingForShipping", by_who:"Kong Pakkapol"},
                                                    {productName: "Nintendo Switch", billingStatus: "waitingForConfirm", by_who:"Kong Pakkapol"},
                                                    {productName: "Nintendo Switch", billingStatus: "completed", by_who:"Kong Pakkapol"}]);
    const [data_myauction_active,setData_myAuction_active] = useState([{productName: "Nintendo Switch", billingStatus: "on"},
                                                    {productName: "Nintendo Switch", billingStatus: "on"},
                                                    {productName: "Nintendo Switch", billingStatus: "on"}]);
    const [data_myauction_wait,setData_myAuction_wait] = useState([{productName: "Nintendo Switch", billingStatus: "waitingForPayment"},
                                                    {productName: "Nintendo Switch", billingStatus: "waitingForShipping"},
                                                    {productName: "Nintendo Switch", billingStatus: "waitingForConfirm"},
                                                    {productName: "Nintendo Switch", billingStatus: "completed"}]);

    const [status,setStatus]=useState("unknown");

    const status_to_link = {
        "bid-waitingForPayment" : "pay",
        "bid-waitingConfirmSlip" : "pay",
        "auction-waitingForPayment" : "pay",
        "auction-waitingForShipping" : "shipped",
        "bid-waitingForConfirm" : "confirm",
        "auction-waitingForConfirm" : "confirm",
        "bid-completed" : "complete",
        "auction-completed" : "complete",
        "bid-waitingForShipping" : "delivered",
    }

    useEffect(()=>{
        //data_mybid_active
		// getData(`/user/myorder?filter=mybid`).then((res)=>{
		// 	setStatus(res.status);
		// 	if(res.status == "success"){
		// 		setData_myBid_active(res.data);
		// 	}
		// 	else{
		// 		setData_myBid_active(res.message);
		// 	}
		// })
        //data_mybid_wait
        getData(`/user/myorder?list=mybid`).then((res)=>{
			setStatus(res.status);
			if(res.status == "success"){
				setData_myBid_wait(res.data);
			}
			else{
				setData_myBid_wait(res.message);
			}
		})
        // //data_myauction_active
        // getData(`/user/myorder?filter=myauction`).then((res)=>{
		// 	setStatus(res.status);
		// 	if(res.status == "success"){
		// 		setData_myAuction_active(res.data);
		// 	}
		// 	else{
		// 		setData_myAuction_active(res.message);
		// 	}
		// })
        // //data_myAuction_wait
        // getData(`/user/myorder?list=myauction`).then((res)=>{
		// 	setStatus(res.status);
		// 	if(res.status == "success"){
		// 		setData_myAuction_wait(res.data);
		// 	}
		// 	else{
		// 		setData_myAuction_wait(res.message);
		// 	}
		// })
	},[]);

    console.log(data_mybid_active)
    console.log(data_mybid_wait)
    console.log(data_myauction_active)
    console.log(data_myauction_wait)

    let _data = []
    
    if(type==="type=all") _data = list==="list=bid"? [...data_mybid_active, ...data_mybid_wait] : [...data_myauction_active, ...data_myauction_wait];
    else if(type==="type=current") _data = list==="list=bid"? data_mybid_active : data_myauction_active;
    else if(list==="list=bid") _data = data_mybid_wait.filter(d=>(status_to_link[list.slice(5)+'-'+d.billingStatus]===type.slice(5)))
    else if(list==="list=auction") _data = data_myauction_wait.filter(d=>(status_to_link[list.slice(5)+'-'+d.billingStatus]===type.slice(5)))

    
    const display = []
    _data.forEach(element => {
        let status_of_auction = list.slice(5)+'-'+element.billingStatus
        // console.log(status_of_auction)
        display.push(<OrderObj name={element.productName} status_class={status_of_auction} text_alert={text_alert(status_of_auction)} by_who={element.by_who} auctionId={element.auctionId} currently={element.auctionStatus==="bidding"}/>)
    });

	return (
        <>
            {(list === "list=bid")? <MyBidNav/> : <MyAuctionNav/>}
            <div className="all-review">
                {display}
            </div>
        </>
	)
}
export default MyOrder;