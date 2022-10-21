import { Link, useNavigate  } from "react-router-dom";
import { postData } from "./fetchData";
import { useState, useEffect } from "react";
import edit from '../pictures/edit_icon.png';
import PaymentPop from "./PaymentPop";

import "../css/AccountPage.css";

const PaymentObj = (props) =>{
    const navigate = useNavigate()

    const [accountName, setAccountName] = useState("")
    const [bank, setBank] = useState("")
    const [accountNumber, setAccountNumber] = useState("")

    let bs_target = "#confirmModal" + props.id;

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
                    <button className="btn-primary button-edit-payment" data-bs-toggle="modal" data-bs-target={bs_target}>
                        <img id="follow-icon" src={edit} className='edit-payment'/>
                    </button>
                </div>
		    </div>
        <PaymentPop id={props.id}/>
        </div>
	)
}

export default PaymentObj;