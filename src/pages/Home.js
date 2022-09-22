import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import "../css/Home.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
import AuctionCardRow from "../components/AuctionCardRow";
import getData from "../components/fetchData";
async function getList(url,setFunction){
	const res = await getData(url);
	if(res.status == "fail"){
		throw Error(res.message)
	}
	else{
		console.log("x")
		console.log(res.data)
		setFunction(res.data)
	}
}

const Home = () =>{
	const [popular,setPopular] = useState([]);
	const [recent,setRecent] = useState([]);
	const [ending,setEnding] = useState([]);
	const [following,setFollowing] = useState([]);
	const [status,setStatus] = useState("loading");
	const [message,setMessage] = useState("");
	const displayName = localStorage.getItem("displayName");
	// const isLoggedIn 
	useEffect(()=>{
		// Popular
		getList('http://13.250.98.9/api/auction/auction-list?filter=popular',setPopular)
		.catch(e=>{
			setStatus("error")
			setMessage(e.message)
		})
		// Recent bidding
		getList('http://13.250.98.9/api/auction/auction-list?filter=recent_bidding',setRecent)
		.catch(e=>{
			setStatus("error")
			setMessage(e.message)
		})
		// Ending Soon
		getData('http://13.250.98.9/api/auction/auction-list?filter=ending_soon',setEnding)
		.catch(e=>{
			setStatus("error")
			setMessage(e.message)
		})
		// My following list
		getData('http://13.250.98.9/api/auction/auction-list?filter=my_following_list',setFollowing)
		.catch(e=>{
			setStatus("error")
			setMessage(e.message)
		})
		setStatus("success")
	},[])
	if(status == "success"){
		return (
			<>
			<p className="headHome">Welcome, Peeranat! Let’s see what you got...</p>		
			<p className="detail">Your Recent Bids</p>
			{recent.length > 0 ? <AuctionCardRow data={recent}/> : <p>You have no recent bids</p> }
			<p className="detail">Recent Following List</p>
			{following.length > 0 ? <AuctionCardRow data={following}/> : <p>You are not following any bids</p> }
			<p className="detail">Popular</p>
			{popular.length > 0 ? <AuctionCardRow data={popular}/> : <p>There are no popular bids</p> }
			<p className="detail">Ending soon</p>
			{ending.length > 0 ? <AuctionCardRow data={ending}/> : <p>There are no bids ending soon</p> }
			</>
		)
	}
	else if(status == "error"){
		return (
			<div>
				<h1>Error</h1>
				<p>{message}</p>
			</div>
		)
	}
	else{
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}
}
export default Home;
