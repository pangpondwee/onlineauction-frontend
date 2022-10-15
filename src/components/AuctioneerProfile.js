import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import fullStar from "../pictures/star-full.png";
import emptyStar from "../pictures/star-empty.png";
import halfStar from "../pictures/star-half-empty.png"
import '../css/AuctioneerProfile.css';
import getData from "./fetchData";

// Badges
import badge_top_10 from "../pictures/badge-top-10.png"
import badge_top_100 from "../pictures/badge-top-100.png"
import badge_fraud from "../pictures/badge-fraud.png"
import badge_rising_stars from "../pictures/badge-rising-stars.png"
import badge_top_seller_100 from "../pictures/badge-top-seller-100.png"
import badge_top_seller_1k from "../pictures/badge-top-seller-1k.png"
import badge_top_seller_10k from "../pictures/badge-top-seller-10k.png"
import badge_newbie from "../pictures/badge-newbie.png"
import badge_admin from "../pictures/badge-admin.png"
import badge_official from "../pictures/badge-official.png"

const dictBadge = {
    "top-10":badge_top_10 ,
    "top-100":badge_top_100,
    "fraud":badge_fraud ,
    "rising-stars":badge_rising_stars ,
    "top-seller-100": badge_top_seller_100,
    "top-seller-1k":badge_top_seller_1k,
    "top-seller-10k":badge_top_seller_10k,
    "newbie":badge_newbie,
    "admin":badge_admin,
    "official":badge_official,
}

const Profile = (props) => {
    const auctioneer = props.auctioneer
    const description = props.description
    const profilePicture = props.profilePicture
    const rating = props.rating
    const totalAuctioned = props.totalAuctioned
    const successAuctioned = props.successAuctioned
    const isFraud = props.isFraud
    const badges = props.badges
    // console.log(rating)

    const star = []
    let badge = []

    if (badges === undefined) {

    } else {
        badge = badges.map((val,key)=>{
            let badgeName = dictBadge[val]
            return (
                <img src={badgeName} key={key} alt={val} className="badge-img" />
            )
        })
        console.log(badges)
    }

    if (rating === undefined) {

    } else {
        let tmp = rating
        while(tmp>=1){
            star.push(<img src={fullStar} className="star" alt="star"/>)
            tmp-=1
        }
        if(tmp===0.5) star.push(<img src={halfStar} className="star" alt="star"/>)
        while(star.length<5) star.push(<img src={emptyStar} className="star" alt="star"/>);
    }

    return (
        <div className="AucPro">
            <img className="AucProImg" src={profilePicture} alt="this-is-kong-desuwa" />
            {/* <img className="AucProImg" src={kong} alt="this-is-kong-desuwa" /> */}
            <div className="AucDetail">
                <div className="AucDes">
                    {(isFraud === true)?
                        <div style={{display:"flex"}}>
                            <h1 className="auctioneer-name">{auctioneer}</h1>
                            <h3 className="fraud pt-3"> (Fraud Warning)</h3>
                        </div>
                        :
                        <h1 className="auctioneer-name">{auctioneer}</h1>
                    }
                    {/* <h1>{auctioneer}</h1> */}
                    <h6>Auctioneer Veteran</h6>
                    <div>{description}</div>
                </div>
                <div className="AucAllStat">
                    <div className="AucRating">
                        <h6>Rating</h6>
                        <div className="rating-star">
                            <h6>{rating}</h6>
                            {star}
                            {/* <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={halfStar} alt="full-star" />
                            <img src={emptyStar} alt="empty-star" /> */}
                        </div>
                    </div>
                    <div className="AucStat">
                        <h6>Auction Statistic</h6>
                        <div className="stat">
                            {/* <img src={stat} alt="stat" /> */}
                            <h6>
                                Items submitted : {totalAuctioned}<br></br>
                                Items sold : {successAuctioned}
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="AucBadges">
                        <h6>Badges</h6>
                        {(badge.length === 0)?
                            <div className="badges">
                                <h6>No Badge</h6>
                            </div>
                            :
                            <div className="badges">
                                {badge}
                            </div>
                        }
                    </div>
            </div>
        </div>
    )
}

const Review = (props) => {
    const reviews = props.reviews
    // console.log(reviews)
    let reviewList = []

    if (reviews === undefined) {
        
    } else if (reviews.length === 0) {
        reviewList = (
            <h5 className="no-review-text">This auctioneer hasn't been reviewed yet.</h5>
        )
    } else {
        reviewList = reviews.map((reviews) => {
            const star = []
            let tmp = reviews.rating
            while(tmp>=1){
                star.push(<img src={fullStar} className="star" alt="star"/>)
                tmp-=1
            }
            if(tmp===0.5) star.push(<img src={halfStar} className="star" alt="star"/>)
            while(star.length<5) star.push(<img src={emptyStar} className="star" alt="star"/>);
            
            return (
                <div className="review-card">
                    <div className="review-detail">
                        <div className="review-star-zone">
                            {star}
                        </div>
                        <h6>{reviews.reviewer}</h6>
                        <h6>{reviews.productName}</h6>
                        <div className="review-text">{reviews.comment}</div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <h4 className="auc-pro-head">Review</h4>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                {reviewList}
            </div>
        </div>
    )
}

const AuctioneerProfile = () => {
    const { auctioneerID } = useParams();
    // console.log(auctioneerID)
    const [data, setData] = useState({});
    const [status, setStatus] = useState("unk")
    
    useEffect(() => {
        console.log("Begin getData AuctioneerProfile")
        getData(`/user/profile/${auctioneerID}`).then((res) => {
            setStatus(res.status);
            // console.log(status)
            if(res.status == "success"){
                setData(res.data)
                // console.log(data)
            }
            else{
                setData(res.message);
            }
        })
    },[]);

    console.log(data)

    // const data = {
    //     displayName: "Kong Pakkrapol",
    //     description: "Hiiiiiiiiiiiii",
    //     profilePicture: "kong",
    //     rating: 4,
    //     totalAuctioned: 20,
    //     successAuctioned: 13,
    //     isFraud: true,
    //     reviews: [
    //         {
    //             reviewer: "Kong",
    //             rating: 4,
    //             comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    //             productName: "Nintendo"
    //         },
    //         {
    //             reviewer: "New Kong",
    //             rating: 3,
    //             comment: "maybe fast delivery spd",
    //             productName: "Nintendo Switch"
    //         }
    //     ]
    // }

    return (
        <div>
            <Profile
            auctioneer={data.displayName}
            description={data.description}
            profilePicture={data.profilePicture}
            rating={data.rating}
            totalAuctioned={data.totalAuctioned}
            successAuctioned={data.successAuctioned}
            isFraud={data.isFraud}
            badges={data.badgeNames}
            />
            <Review reviews={data.reviews}/>
            <h4 className="auc-pro-head">Auctions by this auctioneer</h4>
        </div>
    )
}

export default AuctioneerProfile;