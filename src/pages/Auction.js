import { useEffect, useState } from 'react';
import { useParams,Link } from 'react-router-dom';
import "../css/Auction.css";
import {getData, postData} from '../components/fetchData';
import {getDateSince,getDate,prepend} from "../components/util";
import PopupError from '../components/PopupError';

function getHistory(data){
	const history=data.sort((a,b)=>{
		if(a.biddingDate<b.biddingDate){
			return 1
		}
		else{
			return -1
		}
	})
	return history
}

const HistoryModal = (props)=>{
	const history=props.history
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
	return (
		<div className="modal fade" id="historyModal" tabIndex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
			<div id="history-modal" className="modal-dialog modal-dialog-centered">
				<div className="modal-content">
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
				setfDate(getDate(time))
			}, 1000);
		}
		setfDate(getDate(time))
	},[time])
	// const f_date = getDate(props.timeRemaining);
	return (
		<p id="time-remaining" className='info-data'>{fDate}</p>
	)
}

const Gallery = (props)=>{
	const pictures=props.pictures;
	const picture_elements = []
	const [main, setMain] = useState("")
	useEffect(()=>{
		setMain(pictures[0])
	},[])
	const setImage = (pic)=>{
		setMain(pic)
	}
	for(let i=0;i<pictures.length;i++){
		picture_elements.push(
			<img className="list-picture" src={pictures[i]} key={i} onClick={()=>setImage(pictures[i])}/>
		)
	}
	return (
		<div id="gallery">
			<div id="main-picture-wrapper">
			<img id="main-picture" src={main} className=""/>
			</div>
			{pictures.length > 1?
				<div id="picture-list" className='scrolling-wrapper row flex-row flex-nowrap'>
					{picture_elements}
				</div>
				:
				<p>No pictures</p>
			}
		</div>
	);
}

const AuctionTop = (props)=>{
	const history = getHistory(props.data);
	let history_elements = []
	for(let i=0;i<history.length && i<5;i++){
		const timesince = Date.now()-Number(history[i].biddingDate);
		const timeformat = getDateSince(timesince);
		history_elements.push(
		<li className='topbidder-element' key={i}>
			<div className='bidding-front'>
				<span className='bidding-name'>{history[i].bidderName}</span>
				<span className='bidding-date'>{timeformat}</span>
			</div>
			<span className='bidding-price'>{history[i].biddingPrice} Baht</span>
		</li>
		);
	}
	
	let historyError = false;
	let errorMessage = "Something went wrong";
	if(!props.isLoggedIn){
		historyError = true
		errorMessage = "Please sign in to view bid history"
	}
	else if(props.error){
		historyError = true;
		errorMessage = props.error
	}
	else if(history.length < 1){
		historyError = true;
		errorMessage = "No bid history found"
	}
	if(historyError == true){
		return(
			<div id="auction-top">
				<h2>Top Bidders</h2>
				<div id="history-error">{errorMessage}</div>
			</div>
		)
	}
	return (
		<div id="auction-top">
			<HistoryModal
			history={history}
			error={historyError}
			/>
			<h2>Top Bidders</h2>
			<ol id="topbidder-list">
				{history_elements}
			</ol>
			<div id="history-wrapper">
			<button 
				id="history-button" 
				onClick={props.getHistory} 
				className='btn' 
				data-bs-toggle="modal"
				data-bs-target="#historyModal"
				>Bid History</button>
			</div>
		</div>
	)
}

const AuctionInfo = (props)=>{
	const auctioneerLink = "/auctioneer/"+props.data.auctioneerID;
	return (
		<div id="auction-info">
			<div id="info-top">
				<p>Auctioneer</p>
				<p>Category</p>
				<Link className="info-data" to={auctioneerLink}>{props.data.auctioneerName}</Link>
				<p className="info-data" >{props.data.productDetail.category}</p>
			</div>
			<div id="info-bottom" className="card border-light mb-3">
				<p>Highest Bid</p>
				<p>Time Remaining</p>
				<p className="info-data" >{props.data.currentPrice}</p>
				<Timer
					timeRemaining={props.timeRemaining}
				/>
			</div>
		</div>
	)
}

const AuctionDetail = (props)=>{
	const timeRemaining = props.data.endDate - Date.now()
	const isFiveMinutes = timeRemaining <= 5*60*1000 ? true : false;
	const isEnded = timeRemaining < 0 ? true : false;
	return(
		<div id="auction-detail">
			<h1>{props.data.productDetail.productName}</h1>
				<ul className="nav nav-tabs" id="auction-nav" role="tablist">
            	<li className="nav-item" role="presentation">
            	<button
                className="nav-link active"
                id="desc-tab"
                data-bs-toggle="tab"
                data-bs-target="#auction-desc-pane"
                type="button"
                role="tab"
              	>
                Description
              	</button>
            	</li>
				<li className="nav-item" role="presentation">
				{props.isLoggedIn ?
					<button
						className="nav-link"
						id="bid-tab"
						data-bs-toggle="tab"
						data-bs-target="#auction-bid-pane"
						type="button"
						role="tab"
					>
						Bid
					</button>
					:
					<></>
				}
				</li>
          		</ul>
		  	<div className="tab-content" id="auction-content">
				<div
				className="tab-pane fade show active"
				id="auction-desc-pane"
				role="tabpanel"
				tabIndex={"0"}
				>
					<AuctionDesc
					description={props.data.productDetail.description}
					/>
				</div>
				<div
				className="tab-pane fade show"
				id="auction-bid-pane"
				role="tabpanel"
				tabIndex={"1"}
				>	
					<Bidding
					bidStep={props.data.bidStep}
					submitBid={props.submitBid}
					isEnded={isEnded}
					isFiveMinutes={isFiveMinutes}
					isAlreadyBid5Minute={props.isAlreadyBid5Minute}
					/>
				</div>
          	</div>
			<AuctionInfo
			timeRemaining={timeRemaining}
			data={props.data}
			/>
		</div>
	)
}
const AuctionDesc = (props)=>{
	return (
		<p>{props.description}</p>
	)
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
	if(props.isFiveMinutes){
		if(props.myLastBid < 1){
			return (
				<p>You cannot bid this auction</p>
			)
		}
		return(
			<form onSubmit={submitWrapper} id="bidding">
				{props.isAlreadyBid5Minute ?
				<>You have already bid</>
				:
				<>
					<p>You can only bid once. Think wisely</p>
					<div id="bid-group" className="input-group">
						<input id="bid-price" type="text" placeholder="Enter bid price" className='form-control'></input>
						<button id="bid-price-button" type="submit" className='bid-button btn'>Bid</button>
					</div>
				</>
				}
			</form>
		)
	}
	return(
		<form onSubmit={submitWrapper} id="bidding">
			<div id="select-wrapper"><p>Select your bid price</p></div>
			<div id="static-price">
				<button type="button" onClick={()=>props.submitBid(bidStep,false)} className='bid-button btn'>+${bidStep}</button>
				<button type="button" onClick={()=>props.submitBid(bidStep*2,false)} className='bid-button btn'>+{bidStep*2}$</button>
				<button type="button" onClick={()=>props.submitBid(bidStep*3,false)} className='bid-button btn'>+${bidStep*3}</button>
			</div>
			<div id="or-wrapper"><p>OR</p></div>
			<div id="bid-group" className="input-group">
				<input id="bid-price" type="text" placeholder="Enter bid price" className='form-control'></input>
				<button id="bid-price-button" type="submit" className='bid-button btn'>Bid</button>
			</div>
		</form>
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
	const [historyError,setHistoryError] = useState("")
	const [isAlreadyBid5Minute,setIsAlreadyBid5Minute] = useState(false);
	const [error,setError] = useState("")
	const isLoggedIn = localStorage.getItem("isLoggedIn")
	const submitBid = (price, isAbsolute)=>{
		price = parseInt(price)
		if(!isAbsolute){
			price=price+data.currentPrice
		}
		if(isNaN(price)){
			setError("Price is not a number")
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

				const timeRemaining = data.endDate - Date.now()
				const isFiveMinutes = timeRemaining <= 5*60*1000 ? true : false;
				if(isFiveMinutes){
					setIsAlreadyBid5Minute(true)
				}
				getHistory() // after bid
			})
			.catch(e=>{
				setError(e.message)
			})
		}
	}
	const getHistory = ()=>{
		getData(`/auction/${auctionId}/bid-history`)
		.then((res)=>{
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
			setAuctioneer(res.data.auctioneerName)
			setIsAlreadyBid5Minute(res.data.isAlreadyBid5Minute)
			return res.data.auctioneerID
		})
		.then(()=>{
			getHistory() // first time
		})
		.catch((e)=>{
			setStatus("error");
			setData(e.message)
		})
		if(isLoggedIn){
			setInterval(()=>{
				getData(`/auction/${auctionId}/refresh`)
				.then((res)=>{
					setData(prev=>{
						return {...prev, currentPrice: res.data.currentPrice}
					})
				})
				getHistory() // other times
			},10000)
		}
	},[]);
	if(status === "success"){
		return (
			<div id="content">
				<AuctionTop
				data={history}
				error={historyError}
				isLoggedIn={isLoggedIn}
				/>
				<div id="auction-main">
					<Gallery
					pictures={data.productDetail.productPicture}
					/>
					<AuctionDetail
					data={data}
					isAlreadyBid5Minute={isAlreadyBid5Minute}
					submitBid={submitBid}
					isLoggedIn={isLoggedIn}
					/>
				</div>
				<PopupError
				error={error}
				setError={setError}
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