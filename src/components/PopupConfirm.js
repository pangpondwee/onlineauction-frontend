import React, { useState, useEffect } from "react";
import confirm from "../pictures/confirm.png";
import '../css/PopupConRev.css'
import { Link } from 'react-router-dom'
import getData, { postData } from "./fetchData";
import Rating from '@mui/material/Rating';

import review from "../pictures/review.png";

const PopupConfirm = () => {
    // const auctionID = props.auctionID
    // const [data, setData] = useState({})
    // const [status, setStatus] = useState("unk")
    // const [name, setName] = useState("")
    const [rating, setRating] = useState("")
    // const [reviewtext, setReview] = useState("")

    // useEffect(() => {
    //     getData(`/billingInfo/${auctionID}`).then((res) => {
    //         setStatus(res.status)
    //         if (res.status == "success") {
    //             setData(res.data)
    //         } else {
    //             setData(res.message)
    //         }
    //     })
    // },[]);

    // useEffect(() => {
    //     getData(`/user/profile/${data.auctioneerID}`).then((res) => {
    //         setStatus(res.status)
    //         if (res.status == "success") {
    //             setName(res.data.displayName)
    //         } else {
    //             setName(res.message)
    //         }
    //     })
    // },[]);

    // function onConfirm(e) {
    //     e.preventDefault()
    //     postData(`/shipping/${auctionID}`, JSON.stringify(
    //         {
    //             "confirm": true
    //         }
    //     ))
    //     .then((res) => {
    //         console.log("Confirmed successfully")
    //     })
    //     .catch(e => {
    //         console.log(e.message)
    //     })
    // }

    // function onReview(e) {
    //     e.preventDefault()
    //     postData(`/review/${auctionID}`, JSON.stringify(
    //         {
    //             "rating":"rating",
    //             "comment":"reviewtext"
    //         }
    //     ))
    //     .then((res) => {
    //         console.log(e.status)
    //     })
    //     .catch(e => {
    //         console.log("error")
    //     })
    // }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="PopupCon btn-primary" data-bs-toggle="modal" data-bs-target="#confirmModal">
                Confirm
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img className="popup-confirm-img" src={confirm} alt="shipping"/>
                            <div className="modal-confirm-header-text">
                                <div className="modal-confirm-head-st" class="modal-title" id="confirmModalLabel">Your item is on its way</div>
                                <h6 class="modal-title" id="confirmModalLabel">Check item information and a tracking number below</h6>
                            </div>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="modal-body-confirm">
                            <Link to={"/billing-info"} >
                                <button className="billing btn-link" data-bs-dismiss="modal">Billing Info</button>
                            </Link>
                            <h6>Item Name : Nintendo Switch</h6>
                            {/* <h6>Iten Name : {data.productName}</h6> */}
                            <h6>Auctioneer Name : Kong Pakkapol</h6>
                            {/* <h6>Auctioneer Name : {name}</h6> */}
                            <h6>Shipping : Thailand Post</h6>
                            {/* <h6>Shipping : {data.shippingCompany}</h6> */}
                            <h6>Tracking Number : ABCDEFGH12345</h6>
                            {/* <h6>Tracking Number : {data.trackingNumber}</h6> */}
                            <div className="tracking-img">
                                {/* <img src={productPicture} alt="pic" /> */}
                            </div>
                            <h6>Do you confirm that the package has arrived correctly?</h6>
                        </div>
                        <div class="modal-footer-confirm">
                            {/* btn-confirm ต้องมี func สำหรับแก้ไข status ของสินค้าเป็น completed */}
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal" /*onChange={onConfirm}*/>
                                Confirm
                            </button>
                            
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Deny</button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Not Yet</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img className="popup-review-img" src={review} alt="review" />
                            <div className="modal-review-header-text">
                                <div class="modal-title" id="reviewModalLabel">What did you think of your recent bidding item?</div>
                                <h6 class="modal-title" id="reviewModalLabel">Your feedback is valuable to us and everyone</h6>
                            </div>
                            {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div class="modal-body-review">
                            <h6>Review Item : Nintendo Switch</h6>
                            {/* <h6>Iten Name : {data.productName}</h6> */}
                            <h6>Auctioneer Name : Kong Pakkapol</h6>
                            {/* <h6>Auctioneer Name : {name}</h6> */}
                            <h6>
                                Rating : 
                                {/* have to install mui first to use this rating code */}
                                <Rating 
                                    name="half-rating"
                                    className="star-rating"
                                    dafaultValue={0}
                                    precision={0.5}
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                />
                            </h6>
                            <h6>Review : </h6>
                            <textarea className="review-box" type="text" placeholder="Write a review here..." /*value={reviewtext} onChange={e => setReview(e.target.value)}*/ ></textarea>
                        </div>
                        <div class="modal-footer-review">
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" /*onChange={onReview}*/>Confirm</button>
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupConfirm;