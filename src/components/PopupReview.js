import React from "react";

const PopupReview = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="PopupRe btn-primary" data-bs-toggle="modal" data-bs-target="#reviewModal">
                Review
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="reviewModal" tabindex="-1" aria-labelledby="reviewModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="reviewModalLabel">What did you think of your recent bidding item?</h5>
                            <h6 class="modal-title" id="reviewModalLabel">Your feedback is valuable to us and everyone</h6>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body-review">
                            <h6>Review Item : Nintendo Switch</h6>
                            <h6>Auctioneer Name : Kong Pakkapol</h6>
                            <h6>Rating : </h6>
                            <h6>Review : </h6>
                            <div className="review-box"></div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Confirm</button>
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Skip</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupReview;