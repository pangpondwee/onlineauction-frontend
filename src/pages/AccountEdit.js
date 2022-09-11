import blank_profile from "../pictures/blank_profile.png";

const AccountEdit = () =>{
	return (
        <div className="profile-page d-flex justify-content-between">
            <div>
                <h1>My Profile</h1>
                <div className="d-flex">
                    <img className="profile-pic" alt="ProfilePic" src={blank_profile}/>
                </div>
            </div>
            <div>
                <div className="edit-profile">Edit Profile</div>
                <div className="edit-profile">Save Changes</div>
                <div className="edit-profile">Cancel</div>
            </div>
        </div>
	)
}
export default AccountEdit;