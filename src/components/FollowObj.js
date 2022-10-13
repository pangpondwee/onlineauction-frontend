import { Link, useNavigate  } from "react-router-dom";
import { postData } from "./fetchData";
import { useState, useEffect } from "react";
import heart from '../pictures/heart-fill.svg';
import {getDate} from "../components/util";

import "../css/AccountPage.css";

const FollowObj = (props) =>{
    const navigate = useNavigate()
    const [_isfollow, set_isfollow] = useState(true);

    const timeRemaining = props.data.endDate - Date.now()

    let followClass = 'follow-btn btn';
	let followText = 'Follow';
	if(_isfollow){
		followClass+=" active";
	}

    const cilckFollow = () =>{
        let new_data = {
            "follow": String(!_isfollow)
        }
        // console.log(new_data)

        postData(`/auction/${props.data.auctionID}/follow`,JSON.stringify(new_data))
        .then((res)=>{
            if(!res.status) throw new Error("Could not get status")
            if(res.status == "fail" || res.status == "error" || res.status == "err") throw new Error(res.message)
            set_isfollow(!_isfollow)
            console.log(res.status)
        })
        .catch(e=>{
            console.log(e.message)
        })
    }

    const Timer = (props)=>{
        const [time,setTime] = useState(props.timeRemaining);
        useEffect(()=>{
          const timer = setInterval(() => {
            setTime(time-1000)
          }, 1000);
          return ()=>clearInterval(timer);
        })
        return (
          <h6 id="time-remaining" className='info-data'>End in : {getDate(time)}</h6>
        )
      }

	return (
		<div className="Review-box">
			<img src={props.data.productPicture} alt="Review_goods" className="mini-pic-goods can_click" onClick={()=> navigate(`/auction/${props.data.auctionID}`)}/>
            <span>
                <h4 onClick={()=> navigate(`/auction/${props.data.auctionID}`)} className="can_click">{props.data.productName}</h4>
                <h6>By : {props.data.auctioneerName}</h6>
                <h6>Highest Bid : {props.data.highestBid} Baht</h6>
                <Timer timeRemaining={timeRemaining}/>
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