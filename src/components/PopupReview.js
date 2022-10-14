import React from "react";
import review from "../pictures/review.png";
import '../css/PopupConRev.css';

const PopupReview = () => {
    // const itemName = props.itemName
    // const auctioneer = props.auctioneer

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal">
                Review
            </button>

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
                            <h6>Review Item : Nintendo Switch</h6>
                            {/* <h6>Review Item : {itemName}</h6> */}
                            <h6>Auctioneer Name : Kong Pakkapol</h6>
                            {/* <h6>Auctioneer Name : {auctioneer}</h6> */}
                            <h6>Rating : </h6>
                            <h6>Review : </h6>
                            <textarea className="review-box" type="text" placeholder="Write a review here..."></textarea>
                        </div>
                        <div className="modal-footer-review">
                            <button type="button" className="btn btn-primary">Confirm</button>
                            <button type="button" className="btn btn-light" data-bs-dismiss="modal">Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupReview;