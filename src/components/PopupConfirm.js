import React, { useState, useEffect } from "react";
import confirm from "../pictures/confirm.png";
import '../css/PopupConRev.css'
import { Link } from 'react-router-dom'
import getData, { postData } from "./fetchData";
import Rating from '@mui/material/Rating';

import review from "../pictures/review.png";

const PopupConfirm = (props) => {
    const auctionID = props.auctionID
    // const auctionID = "633d37c44cb5c704804ea3b6"
    const [data, setData] = useState({})
    const [rating, setRating] = useState("")
    const [reviewtext, setReview] = useState("")
    const shippingDict = {
        "KEX":"Kerry Express" ,
        "GRAB":"Grab" ,
        "LLMV":"Lalamove" ,
        "NIM":"Nim Express" ,
        "LINE":"Line Man" ,
        "TNT":"TNT Express" ,
        "DHL":"DHL Express" ,
        "SCG":"SCG Express" ,
        "FLASH":"Flash Express" ,
        "SKT":"Skootar" ,
        "J&T":"J&T Express",
        "BEST":"Best Express" ,
        "IEL":"Inter Express Logistics" ,
        "NINJA":"Ninja Van" 
       }

    useEffect(() => {
        // console.log("Begin getData tracking")
        getData(`/shipping/${auctionID}/tracking`).then((res) => {
            setData(res.data.trackingInfo)
        })
    },[]);

    // console.log(data)
    // console.log(data.delivery)

    function onConfirm(e) {
        // e.preventDefault()
        // console.log("Begin postData confirm popupConfirm")
        postData(`/shipping/${auctionID}`, JSON.stringify(
            {
                "confirm": true
            }
        ))
        .then((res) => {
            console.log("Confirmed successfully")
        })
        .catch(e => {
            console.log(e.message)
        })
    }

    function onDeny(e) {
        // e.preventDefault()
        // console.log("Begin postData deny popupconfirm")
        postData(`/shipping/${auctionID}`, JSON.stringify(
            {
                "confirm": false
            }
        ))
        .then((res) => {
            console.log("Confirmed successfully")
            window.location.reload()
        })
        .catch(e => {
            console.log(e.message)
            window.location.reload()
        })
    }

    function onReview(e) {
        // e.preventDefault()
        // console.log("Begin postData review")
        postData(`/review/${auctionID}`, JSON.stringify(
            {
                "rating": rating,
                "comment": reviewtext
            }
        ))
        .then((res) => {
            console.log("Review Successfully")
            window.location.reload()
        })
        .catch(e => {
            console.log("error")
            window.location.reload()
        })
    }

    function onSkip() {
        window.location.reload()
    }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}

            <button type="button" class="PopupCon btn-primary d-none" data-bs-toggle="modal" data-bs-target="#confirmModal">
                Confirm
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="popup-confirm-img" src={confirm} alt="shipping"/>
                            <div className="modal-confirm-header-text">
                                <div className="modal-confirm-head-st modal-title" id="confirmModalLabel">Your item is on its way</div>
                                <h6 className="modal-title" id="confirmModalLabel">Check item information and a tracking number below</h6>
                            </div>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="modal-body-confirm">
                            <Link to={`/billing-info/${auctionID}`} >
                                <button className="billing btn-link" data-bs-dismiss="modal">Billing Info</button>
                            </Link>
                            {(Object.keys(data).length === 0)?
                                <div>
                                    <h6>Item Name : No data</h6>
                                    <h6>Auctioneer Name : No data</h6>
                                    <h6>Shipping : No data</h6>
                                    <h6>Tracking Number : No data</h6>
                                    <div className="tracking-img"></div> 
                                </div>
                                :
                                <div>
                                    <h6>Item Name : {data.productName}</h6>
                                    <h6>Auctioneer Name : {data.auctioneerName}</h6>
                                    <h6>Shipping : {shippingDict[data.delivery.shippingCompany]}</h6>
                                    <h6>Tracking Number : {data.delivery.trackingNumber}</h6>
                                    <div className="tracking-img">
                                        <img src={data.delivery.packagePicture} alt="pic" />
                                    </div>
                                </div>
                            }
                            {/* <h6>Item Name : Nintendo Switch</h6> */}
                            {/* <h6>Item Name : {data.productName}</h6> */}
                            {/* <h6>Auctioneer Name : Kong Pakkapol</h6> */}
                            {/* <h6>Auctioneer Name : {data.auctioneerName}</h6> */}
                            {/* <h6>Shipping : Thailand Post</h6> */}
                            {/* <h6>Shipping : {data.delivery.shippingCompany}</h6> */}
                            {/* <h6>Tracking Number : ABCDEFGH12345</h6> */}
                            {/* <h6>Tracking Number : {data.delivery.trackingNumber}</h6> */}
                            {/* <div className="tracking-img">
                                <img src={data.delivery.packagePicture} alt="pic" />
                            </div> */}
                            <h6>Do you confirm that the package has arrived correctly?</h6>
                        </div>
                        <div className="modal-footer-confirm">
                            {/* btn-confirm ต้องมี func สำหรับแก้ไข status ของสินค้าเป็น completed */}
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal" onClick={onConfirm}>
                                Confirm
                            </button>
                            
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal" onClick={onDeny}>Deny</button>
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Not Yet</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img className="popup-review-img" src={review} alt="review" />
                            <div className="modal-review-header-text">
                                <div className="modal-title" id="reviewModalLabel">What did you think of your recent bidding item?</div>
                                <h6 className="modal-title" id="reviewModalLabel">Your feedback is valuable to us and everyone</h6>
                            </div>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body-review">
                            {/* <h6>Review Item : Nintendo Switch</h6> */}
                            <h6>Iten Name : {data.productName}</h6>
                            {/* <h6>Auctioneer Name : Kong Pakkapol</h6> */}
                            <h6>Auctioneer Name : {data.auctioneerName}</h6>
                            <h6>
                                Rating : 
                                {/* have to install mui first to use this rating code */}
                                <Rating 
                                    name="half-rating"
                                    className="star-rating"
                                    defaultValue={0}
                                    precision={0.5}
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </h6>
                            <h6>Review : </h6>
                            <textarea className="review-box" type="text" placeholder="Write a review here..." value={reviewtext} onChange={e => setReview(e.target.value)} ></textarea>
                        </div>
                        <div className="modal-footer-review">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={onReview}>Confirm</button>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal" onSkip={onSkip}>Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupConfirm;