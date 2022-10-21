import { Link, useNavigate  } from "react-router-dom";
import { postData } from "./fetchData";
import { useState, useEffect } from "react";
import edit from '../pictures/edit_icon.png';
import PaymentPop from "./PaymentPop";

import "../css/AccountPage.css";

const PaymentObj = (props) =>{
    const navigate = useNavigate()
    const [_isfollow, set_isfollow] = useState(true);

    let followClass = 'follow-btn btn';
	let followText = 'Follow';
	if(_isfollow){
		followClass+=" active";
	}

	return (
        <div>
            <div className="Review-box">
			    <img src={props.data.productPicture} alt="Bank_pic" className="mini-pic-goods"/>
                <span>
                    <h4>{props.data.productName}</h4>
                    <br/>
                    <h6>Account Number : {props.data.number}</h6>
                    <h6>Account Name : {props.data.name}</h6>
                </span>
                <div className="d-flex justify-content-end">
                    <button className="btn-primary button-edit-payment" data-bs-toggle="modal" data-bs-target="#confirmModal">
                        <img id="follow-icon" src={edit} className='edit-payment'/>
                    </button>
                </div>
		    </div>
        <PaymentPop/>
        </div>
	)
}

export default PaymentObj;