import OrderObj from "../components/OrderObj";
import {MyBidNav, MyAuctionNav} from "../components/MyOrderNav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {getData, postData} from '../components/fetchData';

function text_alert(status){
    if(status==="currently_bid") return "Your last bid: 1800$"
    else if(status==="bidder-to-pay") return "Waiting for your payment"
    else if(status==="bidder-to-pay-wait-admin") return "Waiting for admin to confirm your payment"
    else if(status==="to-delivered") return "Waiting for auctioneer to ship your item"
    else if(status==="bidder-to-confirm") return "An item is on its way to you. You can check a tracking number here.If you’re satisfy with your item, click accept."
    else if(status==="on-auction") return "Time left: 13 hr 13 m 13 s"
    else if(status==="auctioneer-to-pay") return "Waiting for payment from Pongsatorn (Bidder)"
    else if(status==="to-shipped") return "Waiting for your payment"
    else if(status==="auctioneer-to-confirm") return "Waiting for bidder to confirm"
    else return
}

const MyOrder = () =>{

    const location = useLocation()

    const [data_mybid_active,setData_myBid_active] = useState({});
    const [data_mybid_wait,setData_myBid_wait] = useState({});
    const [data_myauction_active,setData_myAuction_active] = useState({});
    const [data_myAuction_wait,setData_myAuction_wait] = useState({});

    const [status,setStatus]=useState("unknown");

    // useEffect(()=>{
    //     //data_mybid_active
	// 	getData(`/api/user/myorder?filter=mybid`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData_myBid_active(res.data);
	// 		}
	// 		else{
	// 			setData_myBid_active(res.message);
	// 		}
	// 	})
    //     //data_mybid_wait
    //     getData(`/api/user/myorder?list=mybid`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData_myBid_wait(res.data);
	// 		}
	// 		else{
	// 			setData_myBid_wait(res.message);
	// 		}
	// 	})
    //     //data_myauction_active
    //     getData(`/api/user/myorder?filter=myauction`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData_myAuction_active(res.data);
	// 		}
	// 		else{
	// 			setData_myAuction_active(res.message);
	// 		}
	// 	})
    //     //data_myAuction_wait
    //     getData(`/api/user/myorder?list=myauction`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData_myAuction_wait(res.data);
	// 		}
	// 		else{
	// 			setData_myAuction_wait(res.message);
	// 		}
	// 	})
	// },[]);

   const _data = [{_name: "Nintendo Switch", _status: "currently_bid", by_who:"Kong Pakkapol"}, 
                {_name: "Nintendo Switch", _status: "bidder-to-pay", by_who:"Kong Pakkapol"},
                {_name: "Nintendo Switch", _status: "bidder-to-pay-wait-admin", by_who:"Kong Pakkapol"},
                {_name: "Nintendo Switch", _status: "to-delivered", by_who:"Kong Pakkapol"},
                {_name: "Nintendo Switch", _status: "bidder-to-confirm", by_who:"Kong Pakkapol"},
                {_name: "Nintendo Switch", _status: "completed", by_who:"Kong Pakkapol"},
                {_name: "Nintendo Switch", _status: "on-auction"},
                {_name: "Nintendo Switch", _status: "auctioneer-to-pay"},
                {_name: "Nintendo Switch", _status: "to-shipped"},
                {_name: "Nintendo Switch", _status: "auctioneer-to-confirm"},
                {_name: "Nintendo Switch", _status: "completed"}]

    const display = []
    _data.forEach(element => {
        display.push(<OrderObj name={element._name} status_class={element._status} text_alert={text_alert(element._status)} by_who={element.by_who}/>)
    });

	return (
        <>
            {(location.search.split("?")[1] === "list=bid")? <MyBidNav/> : <MyAuctionNav/>}
            <div className="all-review">
                {display}
            </div>
        </>
	)
}
export default MyOrder;