// import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Auction.css";
import example from "../example.jpeg"

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
				<button className="btn picture-button" id="button-left">&lt;</button>
				<img className="list-picture" src={example} />
				<img className="list-picture" src={example} />
				<img className="list-picture" src={example} />
				<button className="btn picture-button" id="button-right">&gt;</button>
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
				<div id="bid-group" className="input-group">
					<input id="bid-price" type="text" placeholder="Enter bid price" className='form-control'></input>
					<button id="bid-price-button" type="button" className='bid-button btn'>Bid</button>
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
			<hr/>
			<div id="auction-detail">
				<h2 id="detail-heading">Description</h2>
				<p id="description">Glasses are really versatile. First, you can have glasses-wearing girls take them off and suddenly become beautiful, or have girls wearing glasses flashing those cute grins, or have girls stealing the protagonist's glasses and putting them on like, "Haha, got your glasses!" That's just way too cute! Also, boys with glasses! I really like when their glasses have that suspicious looking gleam, and it's amazing how it can look really cool or just be a joke. I really like how it can fulfill all those abstract needs. Being able to switch up the styles and colors of glasses based on your mood is a lot of fun too! It's actually so much fun! You have those half rim glasses, or the thick frame glasses, everything! It's like you're enjoying all these kinds of glasses at a buffet. I really want Luna to try some on or Marine to try some on to replace her eyepatch. We really need glasses to become a thing in hololive and start selling them for HoloComi. Don't. You. Think. We. Really. Need. To. Officially. Give. Everyone. Glasses?</p>
			</div>
		</div>
	)
}
export default Auction;