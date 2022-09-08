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
		<div id="gallery">
			<div id="main-picture-wrapper">
			<img id="main-picture" src={example} className=""/>
			</div>
			<div id="picture-list">
				<button className="btn button" id="button-left">&lt;</button>
				<img className="list-picture" src={example} />
				<img className="list-picture" src={example} />
				<img className="list-picture" src={example} />
				<button className="btn button" id="button-right">&gt;</button>
			</div>
		</div>
	);
}

const Bidfield = (props)=>{
	return (
		<div id="bid-field">
			<div id="item-wrapper">
				<div id="name-wrapper">
					<h1>Item Name</h1>
				</div>
				<p>by Auctioneer</p>
			</div>
			<div id="statistics">
				<div><p className="stat-name">Hightest Bid</p><span id="highest-bid">200$</span></div>
				<div><p className="stat-name">Time Remaining</p><span id="time-remaining">3hr 20min</span></div>
			</div>
			<div id="select-wrapper"><p>Select your bid price</p></div>
			<div id="bidding">
				<div id="static-price">
					<button className='bid-button btn'>+200$</button>
					<button className='bid-button btn'>+200$</button>
					<button className='bid-button btn'>+200$</button>
				</div>
				<div id="or-wrapper"><p>OR</p></div>
				<div class="input-group">
					<input type="text" placeholder="Enter bid price" className='form-control'></input>
					<button type="button" className='bid-button btn'>Bid</button>
				</div>
			</div>
			<div id="history-wrapper">
				<button id="history-button" className='btn'>Bid History</button>
			</div>
		</div>
	)
}

const Auction = (props) =>{
	const { auctionId } = useParams();
	return (
		<div id="content">
			<div id="auction-main">
				<Gallery />
				<Bidfield />
			</div>
			<div id="auction-detail">T</div>
		</div>
	)
}
export default Auction;