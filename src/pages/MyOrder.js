import OrderObj from "../components/OrderObj";
import {MyBidNav, MyAuctionNav} from "../components/MyOrderNav";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {getData} from '../components/fetchData';

const MyOrder = () =>{
    const location = useLocation()
    const [list, type] = location.search.slice(1).split("&")

    const [data_mybid, setData_myBid] = useState([])
    const [data_myauction, setData_myAuction] = useState([])

    const [status,setStatus]=useState("unknown");

    const status_to_link = {
        "bid-waitingForPayment" : "pay",
        "bid-waitingConfirmSlip" : "pay",
        "auction-waitingForPayment" : "pay",
        "auction-waitingForShipping" : "shipped",
        "bid-waitingForConfirm" : "confirm",
        "auction-waitingForConfirm" : "confirm",
        "bid-waitingForShipping" : "delivered",
    }

    useEffect(()=>{
        //data_mybid
        getData(`/user/myorder?list=mybid`).then((res)=>{
			setStatus(res.status);
			if(res.status === "success"){
				setData_myBid(res.data);
			}
			else{
				setData_myBid(res.message);
			}
		})
        //data_myAuction
        getData(`/user/myorder?list=myauction`).then((res)=>{
			setStatus(res.status);
			if(res.status === "success"){
				setData_myAuction(res.data);
			}
			else{
				setData_myAuction(res.message);
			}
		})
	},[]);

    // console.log(data_mybid)
    // console.log(data_myauction)

    let _data = []
    
    if(type==="type=all") _data = list==="list=bid"? data_mybid : data_myauction;
    else if(type==="type=current") _data = (list==="list=bid"? data_mybid : data_myauction).filter(d=>(d.auctionStatus==="bidding"))
    else if(type==="type=complete") _data = (list==="list=bid"? data_mybid : data_myauction).filter(d=>(d.auctionStatus==="finished"))
    else if(list==="list=bid") _data = data_mybid.filter(d=>(status_to_link["bid-"+d.billingStatus]===type.slice(5)))
    else if(list==="list=auction") _data = data_myauction.filter(d=>(status_to_link["auction-"+d.billingStatus]===type.slice(5)))

    
    const display = []
    _data.forEach((element,index) => {
        display.push(<OrderObj data={element} key={index} type={list.slice(5)}/>) //bid or auction
    });

	return (
        <div>
            {(list === "list=bid")? <MyBidNav/> : <MyAuctionNav/>}
            <div className="all-review">
                {display.length===0? <div className="no-data-page">No Data</div> : display}
            </div>
        </div>
	)
}
export default MyOrder;