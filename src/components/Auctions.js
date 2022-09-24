import React from "react";
import '../css/AuctioneerProfile.css';

const Auctions = () => {
    return (
        <div>
            <h4 className="auc-pro-head">Auctions by this auctioneer</h4>
            <div className="auctions">
                <button className="btn-scroll"></button>
                <div className="auction-list">
                    <div className="auction-card"></div>
                    <div className="auction-card"></div>
                    <div className="auction-card"></div>
                    <div className="auction-card"></div>
                </div>
                <button className="btn-scroll"></button>
            </div>
        </div>
    )
}

export default Auctions;