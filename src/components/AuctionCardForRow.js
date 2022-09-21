import {Link} from "react-router-dom";

const AuctionCardForRow = (props) =>{
	return (		
		<div className="card border-light mb-3">
			<div className="cardBody">
				<Link to="#" className="img-link">
					<img src={props.picture} className="card-img-top"></img>
				</Link>
				<div className="timeBox">{props.time} left</div>
				<Link to="#" className="itemName-link">
					<p className="itemName">{props.name}</p>
				</Link>
				<p className="card-text">{props.price}</p>			
			</div>			
		</div>
	)
}
export default AuctionCardForRow;