import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./Auction.css";
import example from "../example.jpeg"

async function fetchData(){
	try{
		const res = await fetch("http://localhost:9000/");
		if(!res.ok){
			throw new Error("Error: ",res.status);
		}
		const res_data = await res.json();
		return res_data
	} catch(error){
		return {
			status : "fail",
			message : "Error" + error
		}
	}
}

function getDate(timeRemaining){
	const d = new Date(timeRemaining);
	const d_days = Math.floor(timeRemaining/(24*60*60*1000)); // days remaining
	const d_hour = d.getHours();
	const d_minute = d.getMinutes();
	const d_seconds = d.getSeconds();
	if(timeRemaining <= 0){
		return "Ended";
	}
	if(d_days > 2){
		return `${d_days} day(s)`;
	}
	else{
		return `${d_hour}hr ${d_minute}m ${d_seconds}s`;
	}
}

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
	const timeRemaining = props.endDate - Date.now()
	// TODO make date lighter
	const f_date = getDate(timeRemaining);
	const bidStep = props.bidStep;
	return (
		<div id="bid-field">
			<div id="item-wrapper">
				<div id="name-wrapper">
					<h1>{props.productName}</h1>
				</div>
				<p>by Auctioneer</p>
			</div>
			<div id="statistics">
				<div>
					<p className="stat-name">Hightest Bid</p>
					<span id="highest-bid">${props.currentPrice}</span>
				</div>
				<div>
					<p className="stat-name">Time Remaining</p>
					<span id="time-remaining">{f_date}</span>
				</div>
			</div>
			<div id="select-wrapper"><p>Select your bid price</p></div>
			<div id="bidding">
				<div id="static-price">
					<button className='bid-button btn'>+${bidStep}</button>
					<button className='bid-button btn'>+{bidStep*2}$</button>
					<button className='bid-button btn'>+${bidStep*3}</button>
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
	const [res,setres] = useState({
		status : "unknown"
	})
	useEffect(()=>{
		fetchData().then((d)=>{
			setres(d)
		})
	},[]);
	if(res.status === "success"){
		return (
			<div id="content">
				<div id="auction-main">
					<Gallery />
					<Bidfield 
					currentPrice={res.data.currentPrice}
					endDate={res.data.endDate}
					bidStep={res.data.bidStep}
					/>
				</div>
				<hr/>
				<div id="auction-detail">
					<h2 id="detail-heading">Description</h2>
					<p id="description">{res.data.productDetail.description}</p>
				</div>
			</div>
		)
	}
	else if(res.status === "fail"){
		return (
			<div>
				<h1>Error</h1>
				<p>{res.message}</p>
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
export default Auction;