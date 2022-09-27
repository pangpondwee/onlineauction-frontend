import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import "../css/Auction.css";
import {getData, postData} from '../components/fetchData';
import example from "../pictures/bunny.jpeg";
import {getDate,prepend} from "../components/util";


const BidHistoryPopup = (props)=>{
	const history=props.history.sort((a,b)=>{
		if(a.biddingDate<b.biddingDate){
			return 1
		}
		else{
			return -1
		}
	})
	let history_elements = []
	for(let i=0;i<history.length;i++){
		const ms = Number(history[i].biddingDate)
		const d = new Date(ms)
		const d_hour = prepend(d.getHours());
		const d_minute = prepend(d.getMinutes());
		const d_seconds = prepend(d.getSeconds());
		history_elements.push(
		<tr key={i}>
			<td>{d.toLocaleDateString("en-US")}</td>
			<td>{`${d_hour}:${d_minute}:${d_seconds}`}</td>
			<td>{history[i].bidderName}</td>
			<td>{history[i].biddingPrice}</td>
		</tr>
		);
	}
	let historyError = false;
	let errorMessage = "Something went wrong";
	if(props.error){
		historyError = true;
		errorMessage = props.error
	}
	else if(history.length < 1){
		historyError = true;
		errorMessage = "No bid history found"
	}
	return (
		<div className="modal fade" id="historyModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
			<div id="history-modal" className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
					{history_elements.length > 0 ? 
					<table id="history-table">
						<thead>
							<tr>
								<th>Date</th>
								<th>Time</th>
								<th>Name</th>
								<th>Bid Price</th>
							</tr>
						</thead>
						<tbody>
							{history_elements}
						</tbody>
					</table>
					:
					<div id="history-error">{errorMessage}</div>}
				</div>
			</div>
		</div>
	)
}

const Timer = (props)=>{
	const [time,setTime] = useState(props.timeRemaining)
	const [fDate,setfDate] = useState("")
	useEffect(()=>{
		if(time < 24*60*60*1000){ // 1 day
			setTimeout(() => {
				setTime(time-1)
			}, 1000);
		}
		setfDate(getDate(time))
	},[time])
	// const f_date = getDate(props.timeRemaining);
	return (
		<span id="time-remaining">{fDate}</span>
	)
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
	const submitWrapper = (e)=>{ //wrapper for written bid price
		props.submitBid(document.getElementById("bid-price").value,true)
		e.preventDefault()
	}
	if(props.isAuctioneer){
		return(
			<div id="bidding-is-auctioneer">
				<p>You cannot bid on your own auction</p>
			</div>
		)
	}
	if(props.isEnded){
		return(
			<div id="bidding-is-auctioneer">
				<p>Bidding has ended</p>
			</div>
		)
	}
	return(
		<form onSubmit={submitWrapper} id="bidding">
			{props.isFiveMinutes ?
			<p>You can only bid once. Think wisely</p>
			:
			<>
			<div id="select-wrapper"><p>Select your bid price</p></div>
			<div id="static-price">
				<button type="button" onClick={()=>props.submitBid(bidStep,false)} className='bid-button btn'>+${bidStep}</button>
				<button type="button" onClick={()=>props.submitBid(bidStep*2,false)} className='bid-button btn'>+{bidStep*2}$</button>
				<button type="button" onClick={()=>props.submitBid(bidStep*3,false)} className='bid-button btn'>+${bidStep*3}</button>
			</div>
			<div id="or-wrapper"><p>OR</p></div>
			</>
			}
			<div id="bid-group" className="input-group">
				<input id="bid-price" type="text" placeholder="Enter bid price" className='form-control'></input>
				<button id="bid-price-button" type="submit" className='bid-button btn'>Bid</button>
			</div>
		</form>
	)
}

const Bidfield = (props)=>{
	const timeRemaining = props.data.endDate - Date.now()
	const isFiveMinutes = timeRemaining <= 5*60*1000 ? true : false;
	const isEnded = timeRemaining < 0 ? true : false;
	const auctioneerLink = "/auctioneer/"+props.data.auctioneerID;
	return (
		<div id="bid-field">
			<div id="item-wrapper">
				<div id="name-wrapper">
					<h1>{props.data.productDetail.productName}</h1>
				</div>
				<p>by <Link to={auctioneerLink}>{props.auctioneer}</Link></p>
			</div>
			<div id="statistics">
				<div>
					<p className="stat-name">Hightest Bid</p>
					<span id="highest-bid">${props.data.currentPrice}</span>
				</div>
				<div>
					<p className="stat-name">Time Remaining</p>
					<Timer
					timeRemaining={timeRemaining}
					/>
				</div>
			</div>
			<Bidding 
			bidStep={props.data.bidStep}
			isAuctioneer={props.data.isAuctioneer} 
			submitBid={props.submitBid}
			isFiveMinutes={isFiveMinutes}
			isEnded={isEnded}
			/>
			
			<div id="history-wrapper">
				{props.lastBid > 0 ? <span>Your Last bid: {props.lastBid}$</span> : <></>}
				
				{props.showHistory ? 
				<button 
				id="history-button" 
				onClick={props.getHistory} 
				className='btn' 
				data-bs-toggle="modal"
				data-bs-target="#historyModal"
				>Bid History</button> : <></>}
			</div>
		</div>
	)
}

const Auction = (props) =>{
	const { auctionId } = useParams();
	const [data,setData] = useState({});
	const [status,setStatus]=useState("unknown");
	const showHistory=true; // testing
	const showRanking=false; //show ranking and move gallery // testing
	const [lastBid,setLastBid] = useState(0)
	const [auctioneer,setAuctioneer] = useState("")
	const [history,setHistory] = useState([])
	const [historyError,setHistoryError] = useState([])
	const submitBid = (price, isAbsolute)=>{
		price = parseInt(price)
		if(!isAbsolute){
			price=price+data.currentPrice
		}
		if(isNaN(price)){
			console.log("is Nan") //TODO handle
		}
		else{
			postData(`/auction/${auctionId}/bid`,JSON.stringify(
				{
					biddingPrice : price
				}
			))
			.then((res)=>{
				setData(prevData=>{
					return { ...prevData, currentPrice: price }
				})
				setLastBid(price)
			})
			.catch(e=>{
				console.log(e.message)//TODO handle
			})
		}
	}
	const getHistory = ()=>{
		getData(`/auction/${auctionId}/bid-history`)
		.then((res)=>{
			// console.log(res)
			setHistory(res.bidHistory)
		})
		.catch(e=>{
			setHistoryError(e.message)
		})
	}
	useEffect(()=>{
		getData(`/auction/${auctionId}`)
		.then((res)=>{
			setStatus(res.status);
			setData(res.data);
			setLastBid(res.data.myLastBid)
			return res.data.auctioneerID
		})
		.then((auctioneerID)=>{ // get auctioneer
			// return getData(`/user/profile/${auctioneerID}`)
			setAuctioneer(auctioneerID)
		})
		// .then((res)=>{
		// 	// TODO fix with api
		// 	setAuctioneer(res.user.displayName)
		// })
		.catch((e)=>{
			setStatus("error");
			setData(e.message)
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
					data={data}
					auctioneer={auctioneer}
					showHistory={showHistory}
					getHistory={getHistory}
					submitBid={submitBid}
					lastBid={lastBid}
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
				<BidHistoryPopup
				history={history}
				error={historyError}
				/>
			</div>
		)
	}
	else if(status === "unknown"){
		return (
			<div>
				<p>Loading...</p>
			</div>
		)
	}
	else{
		return (
			<div>
				<h1>Error</h1>
				<p>{data}</p>
			</div>
		)
	}
	
}
export default Auction;