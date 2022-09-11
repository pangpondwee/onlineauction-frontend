const AccountPage = () =>{
	return (
        <div className="profile-page">
            <div className="head-profile">
                <h1>My Profile</h1>
                <button className="edit-profile">Edit Profile</button>
            </div>
            <div className="main-info-profile">
                {/* need to add pic */}
                <img className="profile-pic" alt="ProfilePic"/>
                <div>
                    <h5>Name</h5>
                    <div className="account-info"><h5>Peeranut Srisuthangkul</h5></div>
                    <h5>Email</h5>
                    <div className="account-info"><h5>peeranut.sri@ku.th</h5></div>
                    <h5>Phone Number</h5>
                    <div className="account-info"><h5>06200000000</h5></div>
                    <h5>Address</h5>
                    <div className="account-info"><h5>4412 Matlock Rd #200 Arlington Texas United States 76018</h5></div>
                </div>
            </div>
            <div className="sub-info-profile">
                <div className="about-you">
                    <h5>Description</h5>
                    <h6>
                        Exercitation sint fugiat et esse ut do quis laboris anim nisi proident ullamco. Sit eu mollit cillum et consequat eu consectetur ad reprehenderit exercitation sunt duis nisi est. Pariatur exercitation commodo non tempor. Fugiat minim velit veniam reprehenderit nulla veniam voluptate adipisicing ullamco culpa incididunt. Sunt irure commodo et ut do aute duis.
                    </h6>
                </div>
                <div className="about-you">
                    <h5>My Badges & Statistics</h5>
                    <div>
                        <img className="badge-pic" alt="BadgePic"/>
                        <img className="badge-pic" alt="BadgePic"/>
                        <img className="badge-pic" alt="BadgePic"/>
                    </div>
                    <h6>Average Rating: </h6>
                    <h6>Items submitted: 20</h6>
                    <h6>Items sold: 13</h6>
                </div>
            </div>
            
        </div>
	)
}
export default AccountPage;