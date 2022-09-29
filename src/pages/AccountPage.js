import blank_profile from "../pictures/blank_profile.png";
import blank_star from "../pictures/star_blank.png";
import half_star from "../pictures/star_half.png"
import star from "../pictures/star.png";
import badge1 from "../pictures/badge1.png";
import badge2 from "../pictures/badge2.png";
import badge3 from "../pictures/badge3.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {getData} from '../components/fetchData';
import "../css/AccountPage.css";

const AccountPage = () =>{
    const [data,setData] = useState({})
    const [other_data, setOther_data] = useState({})
    const [status,setStatus]=useState("unknown");

    useEffect(()=>{
		getData(`/user/myprofile`).then((res)=>{ 
			setStatus(res.status);
			if(res.status == "success"){
				setData(res.data);
			}
			else{
				setData(res.message);
			}
		})
	},[]);

    let userId = data._id;
    useEffect(()=>{
        getData(`/user/profile/${userId}`).then((res)=>{ 
			setStatus(res.status);
			if(res.status == "success"){
				setOther_data(res.data);
			}
			else{
				setOther_data(res.message);
			}
		})
    }, [userId])

    // console.log(data)
    // console.log(other_data)

    const allstar = []

    let tmp = other_data.rating
    while(tmp>=1){
        allstar.push(<img src={star} className="star" alt="star"/>)
        tmp-=1
    }
    if(tmp===0.5) allstar.push(<img src={half_star} className="star" alt="star"/>)
    while(allstar.length<5) allstar.push(<img src={blank_star} className="star" alt="star"/>)

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
                    <h5>Display Name</h5>
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
                        {data.accountDescription}
                    </h6>
                </div>
                <div className="about-you">
                    <h5>My Badges & Statistics</h5>
                    <div>
                        {/* <img src={other_data.badge[0]} className="badge-pic" alt="BadgePic"/>
                        <img src={other_data.badge[1]} className="badge-pic" alt="BadgePic"/>
                        <img src={other_data.badge[2]} className="badge-pic" alt="BadgePic"/> */}
                    </div>
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