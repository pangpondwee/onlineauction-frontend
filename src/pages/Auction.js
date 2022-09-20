import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../css/Auction.css";
import fetchData from '../components/fetchData';
import example from "../pictures/bunny.jpeg";


function getDate(timeRemaining){
	// TODO make date lighter
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

const Ranking = (props)=>{
	// [{name:"K***a", price:200}]
	const ranking = [
		{name:"K***a", price:5000},
		{name:"F***a", price:4000},
		{name:"K***a", price:5000},
		{name:"F***a", price:4000},
		{name:"K***a", price:5000},
		{name:"F***a", price:4000},
		{name:"K***a", price:5000},
		{name:"F***a", price:4000},
		{name:"K***a", price:5000},
		{name:"F***a", price:4000},
		{name:"K***a", price:5000},
		{name:"F***a", price:4000},
	]
	let rank_elements = []
	for(let i=0;i<6;i++){
		rank_elements.push(
		<tr key={i}>
			<td>{ranking[i] ? `${i+1}. ${ranking[i].name} $${ranking[i].price}` : "-"}</td>
			<td>{ranking[i+6] ? `${i+7}. ${ranking[i+6].name} $${ranking[i+6].price}` : "-"}</td>
		</tr>
		);
	}
	return (
		<div id="ranking">
			<table id="ranking-table">
				<thead>
					<tr>
						<th colSpan="2">Realtime Ranking</th>
					</tr>
				</thead>
				<tbody>
					{rank_elements}
				</tbody>
			</table>
		</div>
	)
}

const Gallery = (props)=>{
	const pictures=props.pictures;
	return (
		<div id="gallery">
			<div id="main-picture-wrapper">
			<img id="main-picture" src={pictures[0]} className=""/>
			</div>
			{pictures.length > 1?
				<div id="picture-list">
				<button className="btn picture-button" id="button-left">&lt;</button>
				<img className="list-picture" src={pictures[1]} />
				<img className="list-picture" src={pictures[2]} />
				<img className="list-picture" src={pictures[3]} />
				<img className="list-picture" src={pictures[4]} />
				<button className="btn picture-button" id="button-right">&gt;</button>
				</div>
				:
				<p>No pictures</p>
			}
		</div>
	);
}

const Bidding = (props)=>{
	const bidStep = props.bidStep;
	if(props.isAuctioneer){
		return(
			<div id="bidding-is-auctioneer">
				<p>You cannot bid on your own auction</p>
			</div>
		)
	}
	return(
		<div id="bidding">
			<div id="select-wrapper"><p>Select your bid price</p></div>
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
	)
}

const Bidfield = (props)=>{
	const timeRemaining = props.endDate - Date.now()
	const f_date = getDate(timeRemaining);
	const productName = props.productName;
	const bidStep = props.bidStep;
	const currentPrice=props.currentPrice;
	const auctioneerName = props.auctioneerName;
	const isAuctioneer = props.isAuctioneer;
	const showHistory = props.showHistory;
	const lastBid = props.lastBid;
	return (
		<div id="bid-field">
			<div id="item-wrapper">
				<div id="name-wrapper">
					<h1>{productName}</h1>
				</div>
				<p>by {auctioneerName}</p>
			</div>
			<div id="statistics">
				<div>
					<p className="stat-name">Hightest Bid</p>
					<span id="highest-bid">${currentPrice}</span>
				</div>
				<div>
					<p className="stat-name">Time Remaining</p>
					<span id="time-remaining">{f_date}</span>
				</div>
			</div>
			<Bidding bidStep={bidStep} isAuctioneer={isAuctioneer}/>
			
			<div id="history-wrapper">
				{lastBid > 0 ? <span>Your Last bid: {lastBid}$</span> : <></>}
				{showHistory ? <button id="history-button" className='btn'>Bid History</button> : <></>}
			</div>
		</div>
	)
}

const Auction = (props) =>{
	const { auctionId } = useParams();
	const [data,setData] = useState({});
	const [status,setStatus]=useState("unknown");
	const isAuctioneer=true; // Testing
	const auctioneerName="Waku Waku"; // testing
	const showHistory=true; // testing
	const showRanking=false; //show ranking and move gallery // testing
	const lastBid=122; // testing
	useEffect(()=>{
		fetchData(`http://13.250.98.9/api/auction/${auctionId}`).then(([s,d])=>{
			setStatus(s);
			setData(d);
		})
	},[]);
	if(status === "success"){
		return (
			<div id="content">
				<div id="auction-main">
					{/* <Gallery /> */}
					{showRanking ?
						<Ranking />:
						<Gallery pictures={data.productDetail.productPicture}/>}
					<Bidfield 
					auctioneer={data.auctioneer}
					currentPrice={data.currentPrice}
					productName={data.productDetail.productName}
					endDate={data.endDate}
					bidStep={data.bidStep}
					auctioneerName={auctioneerName}
					isAuctioneer={isAuctioneer}
					lastBid={lastBid}
					showHistory={showHistory}
					/>
				</div>
				<hr/>
				<div id="auction-detail">
					{showRanking ?
						<Gallery/>:
						<></>}
					<div id={showRanking ?
						"description-with-gallery" : 
						"description" }>
					<h2 id="detail-heading">Description</h2>
						{data.productDetail.description}
					</div>
				</div>
			</div>
		)
	}
	else if(status === "fail"){
		return (
			<div>
				<h1>Error</h1>
				<p>{data.message}</p>
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