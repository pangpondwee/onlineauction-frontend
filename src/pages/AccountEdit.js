import blank_profile from "../pictures/blank_profile.png";
import { Link } from "react-router-dom";

const AccountEdit = () =>{
	return (
        <div className="profile-page d-flex justify-content-between">
            <div>
                <h1>My Profile</h1>
                <div className="main-editing-page">
                    <div>
                        <img className="profile-pic" alt="ProfilePic" src={blank_profile}/>
                        <button className="choose-image">Choose Image</button>
                    </div>
                    <div>
                        <div>
                            <h5>Name</h5>
                            <input type="text" className="input-editing" placeholder="Peeranut Srisuthangkul"/>
                        </div>
                        <div>
                            <h5>Email</h5>
                            <input type="text" className="input-editing" placeholder="peeranut.sri@ku.th"/>
                        </div>
                        <div>
                            <h5>Phone Number</h5>
                            <input type="text" className="input-editing" placeholder="06200000000"/>
                        </div>
                        <div>
                            <h5>Address</h5>
                            <textarea type="text" className="input-editing" placeholder="4412 Matlock Rd #200 Arlington Texas United States 76018"/>
                        </div>
                        <div>
                            <h5>Description</h5>
                            <textarea type="text" className="input-editing" rows="5" placeholder="Exercitation sint fugiat et esse ut do quis laboris anim nisi proident ullamco. Sit eu mollit cillum et consequat eu consectetur ad reprehenderit exercitation sunt duis nisi est. Pariatur exercitation commodo non tempor. Fugiat minim velit veniam reprehenderit nulla veniam voluptate adipisicing ullamco culpa incididunt. Sunt irure commodo et ut do aute duis."/>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="edit-profile editing">Edit Profile</div>
                <div className="edit-profile">Save Changes</div>
                <div className="edit-profile cancel">
                    <Link to="/account/profile" className="link-button text-body">Cancel</Link>
                </div>
            </div>
        </div>
	)
}
export default AccountEdit;