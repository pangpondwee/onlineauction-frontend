import followHeart from "../pictures/heart-blue.png";
import emptyHeart from "../pictures/emptyHeart.png";
import { Link } from "react-router-dom";
import { postData } from "./fetchData";
import { useState } from "react";

const FollowObj = (props) =>{
    const [img, setImg] = useState(followHeart);
    const [_isfollow, set_isfollow] = useState(false);

    const cilckFollow = () =>{
        set_isfollow(!_isfollow)
        let new_data = {}
        if(_isfollow){
            new_data["follow"]="true"
            setImg(followHeart)
        } else {
            new_data["follow"]="false"
            setImg(emptyHeart)
        }

        // postData(`/auction/${props.data.auctionID}/follow`,JSON.stringify(new_data))
        // .then((res)=>{
        //     if(!res.status) throw new Error("Could not get status")
        //     if(res.status == "fail" || res.status == "error" || res.status == "err") throw new Error(res.message)
        //     console.log(res.status)
        // })
        // .catch(e=>{
        //     console.log(e.message)
        // })
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
                    <button className="Follow-button" onClick={cilckFollow}>
                        <img src={img} alt="heart" className="followHeart"/>
                        <h6>Following</h6>
                    </button>
                    <br/>
                    <Link to={`/auction/${props.data.auctionID}`}>Visit the Auction</Link>
                </div>
                
            </div>
            
		</div>
	)
}

export default FollowObj;