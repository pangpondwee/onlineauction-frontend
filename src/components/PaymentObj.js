import { Link, useNavigate  } from "react-router-dom";
import { postData } from "./fetchData";
import { useState, useEffect } from "react";
import edit from '../pictures/edit_icon.png';
import PaymentPop from "./PaymentPop";

import ktb_logo from "../pictures/ktb_logo.jpg";
import kbank_logo from "../pictures/KBANK.png";
import scb_logo from "../pictures/scb_logo.jpg";
import bbl_logo from "../pictures/bbl_logo.jpg";
import ttb_logo from "../pictures/ttb_logo.jpg";
import bay_logo from "../pictures/bay_logo.jpg";
import gsb_logo from "../pictures/gsb_logo.png";
import cimbt_logo from "../pictures/cimbt_logo.png";
import uob_logo from "../pictures/uob_logo.png";
import tisco_logo from "../pictures/tisco_logo.png";
import kkp_logo from "../pictures/kkp_logo.jpg";
import icb_logo from "../pictures/icb_logo.jpg";
import lh_logo from "../pictures/lh_logo.jpg";
import sct_logo from "../pictures/sct_logo.png";
import citi_logo from "../pictures/citi_logo.jpg";
import ghb_logo from "../pictures/ghb_logo.jpg";
import baac_logo from "../pictures/baac_logo.png";
import ibt_logo from "../pictures/ibt_logo.jpg";
import tcrb_logo from "../pictures/tcrb_logo.png";
import hsbc_logo from "../pictures/hsbc_logo.png";

import "../css/AccountPage.css";

const Bank_pic = {
    "KTB": ktb_logo,
    "KBANK": kbank_logo,
    "SCB": scb_logo,
    "BBL": bbl_logo,
    "TTB": ttb_logo,
    "BAY": bay_logo,
    "GSB": gsb_logo,
    "CIMBT": cimbt_logo,
    "UOB": uob_logo,
    "TISCO": tisco_logo,
    "KKP": kkp_logo,
    "ICB": icb_logo,
    "LH": lh_logo,
    "SCT": sct_logo,
    "CITI": citi_logo,
    "GHB": ghb_logo,
    "BAAC": baac_logo,
    "IBT": ibt_logo,
    "TCRB": tcrb_logo,
    "HSBC": hsbc_logo,
}

const PaymentObj = (props) =>{
    const navigate = useNavigate()

    const [accountName, setAccountName] = useState("")
    const [bank, setBank] = useState("")
    const [accountNumber, setAccountNumber] = useState("")

    let bs_target = "#confirmModal" + props.id;

	return (
        <div>
            <div className="Review-box">
			    <img src={Bank_pic[props.data.bankName]} alt="Bank_pic" className="mini-pic-goods"/>
                <span>
                    <h4>{props.data.productName}</h4>
                    <br/>
                    <h6>Account Number : {props.data.bankNO}</h6>
                    <h6>Account Name : {props.data.bankAccountName}</h6>
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