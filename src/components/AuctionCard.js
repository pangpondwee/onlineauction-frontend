import {Link} from "react-router-dom";
import { getDate } from "./util";
function getPrice(price){
	if(price < 1000000)
		return price.toLocaleString('en-US')
	price = price/1000000;
	if(price < 1000)
		return `${price.toFixed(2)}M`
	price = price/1000;
	if(price < 1000)
		return `${price.toFixed(2)}B`
	price = price/1000;
	return `${price.toFixed(2)}T`
}

const AuctionCard = (props) =>{
	let timeClass = "timeBox"
	if(props.time < 24*60*60*1000){
		timeClass=timeClass+" timeBox-red" // red if time less than 1 day
	}
	return (		
		<div className="card auctionCard border-light mb-3">
			<div className="cardBody">
				<Link to={"/auction/"+props.id} className="img-link">
					<img src={props.picture} className="card-img-top"></img>
				</Link>
				<div className={timeClass}>{getDate(props.time)}</div>
				<Link to="#" className="itemName-link">
					<p className="itemName">{props.name}</p>
				</Link>
				<p className="card-text">{getPrice(props.price)}฿</p>			
			</div>			
		</div>
	)
}
export default AuctionCard;