import blank_profile from "../pictures/blank_profile.png";
import blank_star from "../pictures/star_blank.png";
import half_star from "../pictures/star_half.png"
import star from "../pictures/star.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {getData} from '../components/fetchData';
import "../css/AccountPage.css";

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
import { Badge } from "react-bootstrap";

const formatPhoneNumber = (phone) => {
    let phoneNumber = ''
    if (phone.length === 10) {
      //เบอร์มือถือ
      phoneNumber =
        phone.substring(0, 3) +
        '-' +
        phone.substring(3, 6) +
        '-' +
        phone.substring(6, 10)
    } else if (phone.length === 9 && phone.at(1) === '2') {
      //เบอร์บ้านกรุงเทพ
      phoneNumber =
        phone.substring(0, 2) +
        '-' +
        phone.substring(2, 5) +
        '-' +
        phone.substring(5, 9)
    } else {
      //เบอร์บ้านต่างจังหวัด
      phoneNumber =
        phone.substring(0, 3) +
        '-' +
        phone.substring(3, 6) +
        '-' +
        phone.substring(6, 9)
    }
    return phoneNumber
  }

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

const AccountPage = () =>{
    const [data,setData] = useState({})
    const [other_data, setOther_data] = useState({})
    const [status,setStatus]=useState("unknown");

    useEffect(()=>{
		getData(`/user/myprofile`).then((res)=>{ 
			setStatus(res.status);
			if(res.status == "success"){
				setData(res.data);
                return res.data._id;
			}
			else{
				setData(res.message);
			}
		})
        .then((userId)=>
        getData(`/user/profile/${userId}`).then((res)=>{ 
			setStatus(res.status);
			if(res.status == "success"){
				setOther_data(res.data);
			}
			else{
				setOther_data(res.message);
			}
		}))
    }, [])

    console.log(data)
    console.log(other_data)

    const allstar = []
    let badges = []

    let tmp = other_data.rating
    while(tmp>=1){
        allstar.push(<img src={star} className="star" alt="star"/>)
        tmp-=1
    }
    if(tmp===0.5) allstar.push(<img src={half_star} className="star" alt="star"/>)
    while(allstar.length<5) allstar.push(<img src={blank_star} className="star" alt="star"/>)

    if(data.badge){
        badges = data.badge.map((val,key)=>{
            let badgeName = dictBadge[val]
            return (
                <img src={badgeName} key={key} alt={val} className="badge-img" />
            )
        })
    }

	return (
        <div className="profile-page">
            <div className="d-flex justify-content-between">
                <h1>My Profile</h1>
                <div className="edit-profile">
                    <Link to="/account/edit" className="link-button">Edit Profile</Link>
                </div>
            </div>
            <div className="main-info-profile">
                <img className="profile-pic" alt="ProfilePic" src={data.profilePicture}/>
                <div>
                    <h4>Display Name</h4>
                    {data.displayName? <div className="account-info"><h5>{data.displayName}</h5></div> : <div className="account-info"><h5>No information</h5></div>}
                    <h4>Email</h4>
                    {data.email? <div className="account-info"><h5>{data.email}</h5></div> : <div className="account-info"><h5>No information</h5></div>}
                    <h4>Phone Number</h4>
                    {data.phoneNumber? <div className="account-info"><h5>{formatPhoneNumber(data.phoneNumber)}</h5></div> : <div className="account-info"><h5>No information</h5></div>}
                    <h4>Address</h4>
                    {data.address? <div className="account-info"><h5>{data.address}</h5></div> : <div className="account-info"><h5>No information</h5></div>}
                </div>
            </div>
            <div className="sub-info-profile">
                <div className="about-you">
                    <h5>Description</h5>
                    {data.accountDescription? <h6>{data.accountDescription}</h6> : <h6>No information</h6>}
                </div>
                <div className="about-you">
                    <h5>My Badges & Statistics</h5>
                    <div>
                        {/* <img src={other_data.badge[0]} className="badge-pic" alt="BadgePic"/>
                        <img src={other_data.badge[1]} className="badge-pic" alt="BadgePic"/>
                        <img src={other_data.badge[2]} className="badge-pic" alt="BadgePic"/> */}
                    </div>
                    {badges}
                    <div className="d-flex">
                        <h6>Average Rating:</h6>
                        {allstar}
                    </div>
                    <h6>Items submitted: {other_data.totalAuctioned}</h6>
                    <h6>Items sold: {other_data.successAuctioned}</h6>
                    
                </div>
            </div>
            
        </div>
	)
}
export default AccountPage;