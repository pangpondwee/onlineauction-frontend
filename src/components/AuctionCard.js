import {Link} from "react-router-dom";

const AuctionCard = (props) =>{
	return (
		<div className="card">
		<div className="">
			<h2>{props.name}</h2>
		</div>
		</div>
	)
}
export default AuctionCard;
