import {Link} from "react-router-dom";

function getDate(timeRemaining){
	// TODO make date lighter
	const d = new Date(Number(timeRemaining));
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

const AuctionCard = (props) =>{
	return (		
		<div className="card border-light mb-3">
			<div className="cardBody">
				<Link to={"/auction/"+props.id} className="img-link">
					<img src={props.picture} className="card-img-top"></img>
				</Link>
				<div className="timeBox">{getDate(props.time)}</div>
				<Link to="#" className="itemName-link">
					<p className="itemName">{props.name}</p>
				</Link>
				<p className="card-text">{props.price}</p>			
			</div>			
		</div>
	)
}
export default AuctionCard;