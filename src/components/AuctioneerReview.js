import React from "react";
import leftButton from "../pictures/leftButton.png";
import rightButton from "../pictures/rightButton.png";
import fullStar from "../pictures/fullStar.png";

const AucReview = () => {
    return (
        <div>
            <h4 className="auc-pro-head">Review</h4>
            <div className="review">
                <img className="btn-scroll" src={leftButton} alt="left-button" />
                <div className="review-list">
                    <div className="review-card">
                        <div className="review-detail">
                            <div className="review-star-zone">
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                            </div>
                            <h6>By someone</h6>
                            <h6>Item's name</h6>
                            <div className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ex at sagittis molestie. Donec leo mi, fringilla porta rutrum vitae, varius eu quam.</div>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="review-detail">
                            <div className="review-star-zone">
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                            </div>
                            <h6>By someone</h6>
                            <h6>Item's name</h6>
                            <div className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ex at sagittis molestie. Donec leo mi, fringilla porta rutrum vitae, varius eu quam.</div>
                        </div>
                    </div>
                    <div className="review-card">
                        <div className="review-detail">
                            <div className="review-star-zone">
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                            </div>
                            <h6>By someone</h6>
                            <h6>Item's name</h6>
                            <div className="review-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus commodo ex at sagittis molestie. Donec leo mi, fringilla porta rutrum vitae, varius eu quam.</div>
                        </div>
                    </div>
                </div>
                <img className="btn-scroll" src={rightButton} alt="right-button" />
            </div>
        </div>
    )
}

export default AucReview;