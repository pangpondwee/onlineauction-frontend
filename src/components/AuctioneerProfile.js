import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import fetchData from "./fetchData";
import kong from "../pictures/kong.png";
import fullStar from "../pictures/star.png";
import emptyStar from "../pictures/star_blank.png";
import halfStar from "../pictures/star_half.png"
import badge1 from "../pictures/badge1.png";
import badge2 from "../pictures/badge2.png";
import badge3 from "../pictures/badge3.png";
import stat from "../pictures/stat.png";
import '../css/AuctioneerProfile.css';
import getData from "./fetchData";

const Profile = (props) => {
    const auctioneer = props.auctioneer
    const description = props.description
    const profilePicture = props.profilePicture
    const rating = props.rating
    const totalAuctioned = props.totalAuctioned
    const successAuctioned = props.successAuctioned
    // const isFraud = props.isFraud
    // const badges = props.badges
    // const activeAuctionList = props.activeAuctionList

    return (
        <div className="AucPro">
            <img className="AucProImg" src={profilePicture} alt="this-is-kong-desuwa" />
            {/* <img className="AucProImg" src={kong} alt="this-is-kong-desuwa" /> */}
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
                            {/* <img src={badges[0]} alt="badge" />
                            <img src={badges[1]} alt="badge" />
                            <img src={badges[2]} alt="badge" /> */}
                            <img src={badge1} alt="badge" />
                            <img src={badge2} alt="badge" />
                            <img src={badge3} alt="badge" />
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

const Review = () => {
    // const reviews = props.reviews

    // const reviewList = reviews.map((reviews) => {
    //     const star = []
    //     let tmp = reviews.rating
    //     while(tmp>=1){
    //         star.push(<img src={fullStar} className="star" alt="star"/>)
    //         tmp-=1
    //     }
    //     if(tmp===0.5) star.push(<img src={halfStar} className="star" alt="star"/>)
    //     while(star.length<5) star.push(<img src={emptyStar} className="star" alt="star"/>);

    //     return (
    //         <div className="review-card">
    //             <div className="review-detail">
    //                 <div className="review-star-zone">
    //                     {star}
    //                     {/* <img src={fullStar} alt="review-star" />
    //                     <img src={fullStar} alt="review-star" />
    //                     <img src={fullStar} alt="review-star" />
    //                     <img src={fullStar} alt="review-star" />
    //                     <img src={fullStar} alt="review-star" /> */}
    //                 </div>
    //                 <h6>{reviews.reviewer}</h6>
    //                 <h6>{reviews.productName}</h6>
    //                 <div className="review-text">{reviews.comment}</div>
    //             </div>
    //         </div>
    //     )
    // })

    return (
        <div>
            <h4 className="auc-pro-head">Review</h4>
            <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
                {/* {reviewList} */}
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
                        <h6>Something</h6>
                        <div className="review-text">lorem</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const AuctioneerProfile = () => {
    const { auctioneerID } = useParams();
    console.log(auctioneerID)
    const [data, setData] = useState({});
    const [status, setStatus] = useState("unk")
    
    useEffect(() => {
        console.log("Begin getData")
        getData(`/user/profile/${auctioneerID}`).then((res) => {
            setStatus(res.status);
            console.log(status)
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
            // activeAuctionList={data.activeAuctionList}
            />
            <Review reviews={data.reviews}/>
        </div>
    )
}

export default AuctioneerProfile;