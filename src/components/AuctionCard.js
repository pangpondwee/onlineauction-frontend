import {Link} from "react-router-dom";

const AuctionCard = (props) =>{
	return (
		
		<div className="card border-light mb-3">
			<div className="">
				{/* https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80 */}
				<img src={props.picture} className="card-img-top"></img>
				{/* <div className="pictureBox">
					<img src="{props.picture}"></img>
				</div> */}
				<div className="timeBox">{props.time} left</div>
				{/* <p className="itemName">{props.name}</p> */}
				<p className="itemName">{props.name}</p>
				<p className="card-text">{props.price}</p>			
			</div>			
		</div>
	)
}
export default AuctionCard;
