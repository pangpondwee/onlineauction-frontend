import { Link, useNavigate  } from "react-router-dom";
import { postData } from "./fetchData";
import { useState, useEffect } from "react";
import edit from '../pictures/edit_icon.png';

import "../css/AccountPage.css";

const PaymentObj = (props) =>{
    const navigate = useNavigate()
    const [_isfollow, set_isfollow] = useState(true);

    const timeRemaining = props.data.endDate - Date.now()

    let followClass = 'follow-btn btn';
	let followText = 'Follow';
	if(_isfollow){
		followClass+=" active";
	}

    const cilckEdit = () =>{
        let new_data = {
            "follow": String(!_isfollow)
        }
        // console.log(new_data)
        // console.log(props.data.auctionID)

        // postData(`/auction/${props.data.auctionID}/follow`,JSON.stringify(new_data))
        // .then((res)=>{
        //     if(!res.status) throw new Error("Could not get status")
        //     if(res.status == "fail" || res.status == "error" || res.status == "err") throw new Error(res.message)
        //     set_isfollow(!_isfollow)
        //     console.log(res.status)
        // })
        // .catch(e=>{
        //     console.log(e.message)
        // })
    }

	return (
		<div className="Review-box">
			<img src={props.data.productPicture} alt="Bank_pic" className="mini-pic-goods"/>
            <span>
                <h4>{props.data.productName}</h4>
                <br/>
                <h6>Account Number : {props.data.auctioneerName}</h6>
                <h6>Account Name : {props.data.highestBid}</h6>
            </span>
            <div className="d-flex justify-content-end">
                <button onClick={cilckEdit}>
                    <img id="follow-icon" src={edit}/>
		        </button>
            </div>
		</div>
	)
}

export default PaymentObj;