import goods from "../pictures/nintendo.png"
import followHeart from "../pictures/heart-blue.png";

const FollowObj = (props) =>{
	return (
		<div className="Review-box">
			<img src={goods} alt="Review_goods" className="mini-pic-goods"/>
            <span>
                <h4>{props.name}</h4>
                <h6>Highest Bid : {props.lastBid} Baht</h6>
            </span>
            <div className="d-flex justify-content-end">
                <button className="Follow-button">
                    <img src={followHeart} alt="heart" className="followHeart"/>
                    <h6>Following</h6>
                </button>
            </div>
            
		</div>
	)
}

export default FollowObj;