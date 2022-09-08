// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Auction.css";
import example from "../example2.jpeg"

// async function fetchData(setData){
// 	try{
// 		const res = await fetch("http://localhost:9000/");
// 		if(!res.ok){
// 			throw new Error("Error: ",res.status);
// 		}
// 		const res_data = await res.json();
// 		setData(res_data.data);
// 	} catch(error){
// 		setData()
// 	}
// }

const Gallery = (props)=>{
	return (
		<div id="main">
			<img id="main-picture" src={example} className=""/>
			<div>
				
			</div>
		</div>
	);
}

const Auction = (props) =>{
	const { auctionId } = useParams();
	return (
		<>
		<Gallery />
		<h1>Bidding</h1>
		<p>{auctionId}</p>
		<p>10</p>
		</>
	)
}
export default Auction;