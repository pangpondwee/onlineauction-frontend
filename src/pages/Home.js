import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import "../css/Home.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
import AuctionCardRow from "../components/AuctionCardRow";
const Home = () =>{
	const auctionData = [
		{name:"first", price:"2000", picture:"https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"},
		{name:"second", price:"2000", picture:"https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"},
		{name:"third", price:"2000", picture:"https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
		{name:"fourth", price:"2000", picture:arrow_left},
		{name:"fifth", price:"2000", picture:arrow_right},
		{name:"six", price:"2000", picture:arrow_left},
		{name:"seven", price:"2000", picture:arrow_right},
		{name:"eight", price:"2000", picture:arrow_left},
		{name:"nine", price:"2000", picture:arrow_right},
		{name:"ten", price:"2000", picture:arrow_left},
		{name:"eleven", price:"2000", picture:arrow_right},
		{name:"twelve", price:"2000", picture:arrow_left},
		{name:"thirteen", price:"2000", picture:arrow_right},
		{name:"fourteen", price:"2000", picture:arrow_left},
		{name:"fifteen", price:"2000", picture:arrow_right},
	]
	// useEffect(()=>{

	// },[]);

	return (
		<>
		<p className="headHome">Welcome, Peeranat! Let’s see what you got...</p>		
		<p className="detail">Your Recent Bids</p>
		<div className="flexRow">
			{/* previous button */}
			<Link to={"#"}>
				<img src={arrow_left} className="button"></img>
			</Link>
			<AuctionCard name="first" price="2000$" time="18:30:22" picture="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"/>
			<AuctionCard name="second" price="100$" time="time" picture="https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"/>
			<AuctionCard name="third" price="1000$" time="time" picture="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			<AuctionCard name="Omnitrix" price="20$" time="08:53:05"picture="https://cdn.estore.nu/68744-thickbox_default/ben-10---deluxe-omnitrix-creator-set.jpg"/>
			<AuctionCard name="e"/>
			{/* next button */}
			<Link to={"#"}>
				<img src={arrow_right} className="button"></img>
			</Link>
		</div>
		<p className="detail">Recent Following List</p>

		<AuctionCardRow data={auctionData}/>

		<div className="flexRow">
			{/* Add previous button */}
			<Link to={"#"}>
				<img src={arrow_left} className="button"></img>
			</Link>
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
			{/* Add next button */}
			<Link to={"#"}>
				<img src={arrow_right} className="button"></img>
			</Link>
		</div>
		<p className="detail">Popular</p>
		<div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		<p className="detail">Ending soon</p>
		<div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		</>
	)
}
export default Home;
