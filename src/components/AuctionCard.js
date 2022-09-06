import {Link} from "react-router-dom";

const AuctionCard = (props) =>{
	return (
		
		<div className="card border-light mb-3">
			<div className="">
				<img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80" className="card-img-top"></img>
				{/* <div className="pictureBox">Image</div> */}
				<div className="timeBox">time</div>
				<p className="itemName">{props.name}</p>			
			</div>			
		</div>
	)
}
export default AuctionCard;
