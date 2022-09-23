import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import "../css/Home.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
import AuctionCardRow from "../components/AuctionCardRow";
import getData from "../components/fetchData";

const AuctionList = (props)=>{
	const [data,setData] = useState([])
	const [status,setStatus] = useState("loading")
	useEffect(()=>{
		getData(props.url,setData)
		.then((res)=>{
			if(!res.status) throw new Error("Could not get status")
			if(res.status == "fail" || res.status == "error") throw new Error(res.message)
			setStatus(res.status)
			setData(res.data)
		})
		.catch(e=>{
			setData(e.message)
			setStatus("error")
		})
	},[])
	if(status == "success"){
		if(data.length > 0){
			return <AuctionCardRow data={data}/>
		}
		else{
			return <p>{props.message}</p>
		}
	}
	else if(status == "loading"){
		return(
			<p>Loading...</p>
		)
	}
	else{
		return (
			<>
				<p>Error: {data}</p>
			</>
		)
	}
}

const Home = () =>{
	const displayName = localStorage.getItem("displayName");
	// const isLoggedIn 
	return (
		<>
			<p className="headHome">Welcome, Peeranat! Let’s see what you got...</p>		
			<p className="detail">Your Recent Bids</p>
			<AuctionList
			message="You don't have any recent bids"
			url="/auction/auction-list?filter=recent_bidding"
			/>
			<p className="detail">Recent Following List</p>
			<AuctionList
			message="You are not following any bids"
			url="/auction/auction-list?filter=my_following_list"
			/>
			<p className="detail">Popular</p>
			<AuctionList
			message="There are no popular bids"
			url="/auction/auction-list?filter=popular"
			/>
			<p className="detail">Ending soon</p>
			<AuctionList
			message="There are no bids ending soon"
			url="/auction/auction-list?filter=ending_soon"
			/>
		</>
	)

}
export default Home;
