import blank_profile from "../pictures/blank_profile.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {getData, patchData} from '../components/fetchData';

const AccountEdit = (props) =>{
    const navigate = useNavigate()

    const navigateTo = ()=>{
        navigate(`/account/profile`)
    }

    const [prepic, setPrepic] = useState(blank_profile)

    const previewImage = (event)=>{ setPrepic(URL.createObjectURL(event.target.files[0])) }

    const [data,setData] = useState({
        displayName: "Peeranut Srisuthangkul",
        email: "peeranut.sri@ku.th",
        phoneNumber: "06200000000",
        address: "4412 Matlock Rd #200 Arlington Texas United States 76018",
        description: "Exercitation sint fugiat et esse ut do quis laboris anim nisi proident ullamco. Sit eu mollit cillum et consequat eu consectetur ad reprehenderit exercitation sunt duis nisi est. Pariatur exercitation commodo non tempor. Fugiat minim velit veniam reprehenderit nulla veniam voluptate adipisicing ullamco culpa incididunt. Sunt irure commodo et ut do aute duis."});
    const [status,setStatus]=useState("unknown");

    const sendChange = (new_data) =>{
        // patchData(`'/api/user/edit'`,JSON.stringify(new_data))
        // .then((res)=>{
        //     if(!res.status) throw new Error("Could not get status")
        //     if(res.status == "fail" || res.status == "error" || res.status == "err") throw new Error(res.message)
        // })
        // .catch(e=>{
        //     console.log(e.message)
        // })
        console.log(new_data)
        navigateTo()
    }

    const summitChange = (e) =>{
        const personal_info = ["Name", "Email", "PhoneNumber", "Address", "Description"]
        const _changed = {}
        personal_info.forEach((_info)=>{
            const tmp = document.getElementById(_info).value
            if (tmp != ""){
                console.log(tmp)
                _changed[_info] = tmp
            }
        })
        sendChange(_changed)
		e.preventDefault()
    }

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

    const _changed = []

	return (
        <div className="profile-page d-flex justify-content-between">
            <div>
                <h1>My Profile</h1>
                <div className="main-editing-page">
                    <div>
                        <img className="profile-pic" alt="ProfilePic" id="Profile" src={prepic}/>
                        <label for="input_pic" className="choose-image">Choose Image</label>
                        <input id="input_pic" type="file" className="choose-image" name="yourPic" accept="image/*" onChange={previewImage} hidden/>
                    </div>
                    <div>
                        <div>
                            <label><h5>Name</h5></label><br/>
                            <input type="text" id="Name" className="input-editing" placeholder={data.displayName}/>
                        </div>
                        <div>
                            <label><h5>Email</h5></label><br/>
                            <input type="email" id="Email" className="input-editing" placeholder={data.email}/>
                        </div>
                        <div>
                            <label><h5>Phone Number</h5></label><br/>
                            <input type="number" id="PhoneNumber" className="input-editing" placeholder={data.phoneNumber}/>
                        </div>
                        <div>
                            <label><h5>Address</h5></label><br/>
                            <textarea type="text" id="Address" className="input-editing" placeholder={data.address}/>
                        </div>
                        <div>
                            <label><h5>Description</h5></label><br/>
                            <textarea type="text" id="Description" className="input-editing" rows="7" placeholder={data.description}/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="edit-profile editing">Edit Profile</div>
                <div className="edit-profile" onClick={summitChange}>Save Changes</div>
                <div className="edit-profile cancel">
                    <Link to="/account/profile" className="link-button text-body">Cancel</Link>
                </div>
            </div>
        </div>
	)
}
export default AccountEdit;