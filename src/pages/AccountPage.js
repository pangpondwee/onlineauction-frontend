import blank_profile from "../pictures/blank_profile.png";
import blank_star from "../pictures/star_blank.png";
import star from "../pictures/star.png";
import badge1 from "../pictures/badge1.png";
import badge2 from "../pictures/badge2.png";
import badge3 from "../pictures/badge3.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {getData, postData} from '../components/fetchData';
import "../css/AccountPage.css";

const AccountPage = () =>{
    const [data,setData] = useState({
        displayName: "Peeranut Srisuthangkul",
        email: "peeranut.sri@ku.th",
        phoneNumber: "06200000000",
        address: "4412 Matlock Rd #200 Arlington Texas United States 76018",
        description: "Exercitation sint fugiat et esse ut do quis laboris anim nisi proident ullamco. Sit eu mollit cillum et consequat eu consectetur ad reprehenderit exercitation sunt duis nisi est. Pariatur exercitation commodo non tempor. Fugiat minim velit veniam reprehenderit nulla veniam voluptate adipisicing ullamco culpa incididunt. Sunt irure commodo et ut do aute duis."});
    const [status,setStatus]=useState("unknown");

    // useEffect(()=>{
	// 	getData(`/api/user/myprofile`).then((res)=>{ 
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData(res.data);
	// 		}
	// 		else{
	// 			setData(res.message);
	// 		}
	// 	})
	// },[]);

	return (
        <div className="profile-page">
            <div className="d-flex justify-content-between">
                <h1>My Profile</h1>
                <div className="edit-profile">
                    <Link to="/account/edit" className="link-button">Edit Profile</Link>
                </div>
            </div>
            <div className="main-info-profile">
                {/* need to add pic */}
                <img className="profile-pic" alt="ProfilePic" src={blank_profile}/>
                <div>
                    <h5>Name</h5>
                    <div className="account-info"><h5>{data.displayName}</h5></div>
                    <h5>Email</h5>
                    <div className="account-info"><h5>{data.email}</h5></div>
                    <h5>Phone Number</h5>
                    <div className="account-info"><h5>{data.phoneNumber}</h5></div>
                    <h5>Address</h5>
                    <div className="account-info"><h5>{data.address}</h5></div>
                </div>
            </div>
            <div className="sub-info-profile">
                <div className="about-you">
                    <h5>Description</h5>
                    <h6>
                        {data.description}
                    </h6>
                </div>
                <div className="about-you">
                    <h5>My Badges & Statistics</h5>
                    <div>
                        <img src={badge1} className="badge-pic" alt="BadgePic"/>
                        <img src={badge2} className="badge-pic" alt="BadgePic"/>
                        <img src={badge3} className="badge-pic" alt="BadgePic"/>
                    </div>
                    <div className="d-flex">
                        <h6>Average Rating:</h6>
                        <img src={star} className="star" alt="star"/>
                        <img src={star} className="star" alt="star"/>
                        <img src={star} className="star" alt="star"/>
                        <img src={star} className="star" alt="star"/>
                        <img src={blank_star} className="star" alt="star"/>
                    </div>
                    <h6>Items submitted: 20</h6>
                    <h6>Items sold: 13</h6>
                </div>
            </div>
            
        </div>
	)
}
export default AccountPage;