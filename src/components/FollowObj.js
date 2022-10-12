import followHeart from "../pictures/heart-blue.png";
import emptyHeart from "../pictures/emptyHeart.png";
import { Link } from "react-router-dom";
import { postData } from "./fetchData";
import { useState } from "react";
import heart from '../pictures/heart-fill.svg';
import "../css/AccountPage.css";

const FollowObj = (props) =>{
    const [_isfollow, set_isfollow] = useState(true);

    let followClass = 'follow-btn btn';
	let followText = 'Follow';
	if(_isfollow){
		followClass+=" active";
	}

    const cilckFollow = () =>{
        set_isfollow(!_isfollow)
        let new_data = {}
        if(_isfollow){
            new_data["follow"]="true"
        } else {
            new_data["follow"]="false"
        }

        postData(`/auction/${props.data.auctionID}/follow`,JSON.stringify(new_data))
        .then((res)=>{
            if(!res.status) throw new Error("Could not get status")
            if(res.status == "fail" || res.status == "error" || res.status == "err") throw new Error(res.message)
            console.log(res.status)
        })
        .catch(e=>{
            console.log(e.message)
        })
    }

	return (
		<div className="Review-box">
			<img src={props.data.productPicture} alt="Review_goods" className="mini-pic-goods"/>
            <span>
                <h4>{props.data.productName}</h4>
                <h6>By : {props.data.auctioneerName}</h6>
                <h6>Highest Bid : {props.data.highestBid} Baht</h6>
                <h6>End in : </h6>
            </span>
            <div className="d-flex justify-content-end">
                <div>
                    <button 
		                onClick={cilckFollow}
		                className={followClass}>
			            {followText}&nbsp;&nbsp;<img id="follow-icon" src={heart}/>
		            </button>
                    <br/>
                    <Link to={`/auction/${props.data.auctionID}`}>Visit the Auction</Link>
                </div>
                
            </div>
            
		</div>
	)
}

export default FollowObj;