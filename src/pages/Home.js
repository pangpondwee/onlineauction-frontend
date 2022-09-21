import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import "../css/Home.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
import AuctionCardRow from "../components/AuctionCardRow";
import getData from "../components/fetchData";

const Home = () =>{
	const [popular,setPopular] = useState([]);
	const [recent,setRecent] = useState([]);
	const [ending,setEnding] = useState([]);
	const [following,setFollowing] = useState([]);
	const displayName = localStorage.getItem("displayName");
	useEffect(()=>{
		// Popular
		getData(
		'http://13.250.98.9/api/auction/auction-list?filter=popular',
		).then((res) => {
			setPopular(res.data)
		})
		// Recent bidding
		getData(
		'http://13.250.98.9/api/auction/auction-list?filter=recent_bidding',
		).then((res) => {
			setRecent(res.data)
		})
		// Ending Soon
		getData(
		'http://13.250.98.9/api/auction/auction-list?filter=ending_soon',
		).then((res) => {
			setEnding(res.data)
		})
		// My following list
		getData(
		'http://13.250.98.9/api/auction/auction-list?filter=my_following_list',
		).then((res) => {
			setFollowing(res.data)
		})
	},[])
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
export default Home;
