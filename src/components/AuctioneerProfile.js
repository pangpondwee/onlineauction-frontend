import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import fetchData from "./fetchData";
import kong from "../pictures/kong.png";
import fullStar from "../pictures/fullStar.png";
import emptyStar from "../pictures/emptyStar.png";
import badge1 from "../pictures/badge1.png";
import badge2 from "../pictures/badge2.png";
import badge3 from "../pictures/badge3.png";
import stat from "../pictures/stat.png";
import leftButton from "../pictures/leftButton.png";
import rightButton from "../pictures/rightButton.png";
import '../css/AuctioneerProfile.css';

const Profile = (props) => {
    const auctioneer = props.auctioneer
    const description = props.description
    // const profilePicture = props.profilePicture
    const rating = props.rating
    const totalAuctioned = props.totalAuctioned
    const successAuctioned = props.successAuctioned
    // const isFraud = props.isFraud
    // const badges = props.badges
    // const activeAuctionList = props.activeAuctionList
    
    // console.log(profilePicture)
    // const badgeList = badges.map((badges) => <img src={badges} />)

    return (
        <div className="AucPro">
            {/* <img className="AucProImg" src={kong} alt="this-is-kong-desuwa" /> */}
            <img className="AucProImg" src={kong} alt="this-is-kong-desuwa" />
            <div className="AucDetail">
                <div className="AucDes">
                    <h1>{auctioneer}</h1>
                    <h6>Auctioneer Veteran</h6>
                    <div>{description}</div>
                </div>
                <div className="AucAllStat">
                    <div className="AucRating">
                        <h6>Rating</h6>
                        <div className="rating-star">
                            <h6>{rating}</h6>
                            {/* still thinking how to map rating no into star */}
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={fullStar} alt="full-star" />
                            <img src={emptyStar} alt="empty-star" />
                        </div>
                    </div>
                    <div className="AucBadges">
                        <h6>Badges</h6>
                        <div className="badges">
                            <img src={badge1} />
                            <img src={badge2} />
                            <img src={badge3} />
                        </div>
                    </div>
                    <div className="AucStat">
                        <h6>Auction Statistic</h6>
                        <div className="stat">
                            <img src={stat} alt="stat" />
                            <h6>
                                Items submitted : {totalAuctioned}<br></br>
                                Items sold : {successAuctioned}
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Review = (props) => {
    const reviews = props.reviews

    const reviewList = reviews.map((reviews) => 
        <div className="review-card">
            <div className="review-detail">
                <div className="review-star-zone">
                    <img src={fullStar} alt="review-star" />
                    <img src={fullStar} alt="review-star" />
                    <img src={fullStar} alt="review-star" />
                    <img src={fullStar} alt="review-star" />
                    <img src={fullStar} alt="review-star" />
                </div>
                <h6>{reviews.reviewer}</h6>
                <h6>{reviews.productName}</h6>
                <div className="review-text">{reviews.comment}</div>
            </div>
        </div>
    )

    return (
        <div>
            <h4 className="auc-pro-head">Review</h4>
            <div className="review">
                <img className="btn-scroll" src={leftButton} alt="left-button" />
                <div className="review-list">
                    {reviewList}
                    {/* <div className="review-card">
                        <div className="review-detail">
                            <div className="review-star-zone">
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                                <img src={fullStar} alt="review-star" />
                            </div>
                            <h6>By someone</h6>
                            <h6>Something</h6>
                            <div className="review-text">lorem</div>
                        </div>
                    </div> */}
                </div>
                <img className="btn-scroll" src={rightButton} alt="right-button" />
            </div>
        </div>
    )
}

const AuctioneerProfile = () => {
    // const { userId } = useParams();
    // const [data, setData] = useState({});

    // useEffect(()=>{
    //     fetchData(`http://13.250.98.9/api/user/profile/${userId}`).then((s)=>{
	// 		setData(s);
	// 	})
    // },[])

    const data = {
        displayName: "Kong Pakkrapol",
        description: "Hiiiiiiiiiiiii",
        profilePicture: "kong",
        rating: 4,
        totalAuctioned: 20,
        successAuctioned: 13,
        isFraud: true,
        reviews: [
            {
                reviewer: "Kong",
                rating: 4,
                comment: "so-so delivery spd",
                productName: "Nintendo"
            },
            {
                reviewer: "New Kong",
                rating: 4.5,
                comment: "maybe fast delivery spd",
                productName: "Nintendo Switch"
            }
        ]
    }

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
            // activeAuctionList={data.activeAuctionList}
            />
            <Review reviews={data.reviews}/>
        </div>
    )
}

export default AuctioneerProfile;