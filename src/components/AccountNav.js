import {Link} from "react-router-dom";

const AccountNav = () =>{
	return (
		<div className="lefthand-nav">
			{/* class "current-tab" 'll highlight depends on current page */}
			<div className="menu current-tab">
				<Link to="/account/profile" className="menu-link">My Profile</Link>
			</div>
			<div className="menu">
				<h5>My Order</h5>
				<ul className="no-bullets">
					<li className="menu-dropdown">
						<Link to="/account/mybid" className="menu-link">My Bid</Link>
					</li>
					<li className="menu-dropdown">
						<Link to="/account/myauction" className="menu-link">My Auction</Link>
					</li>
				</ul>
			</div>
			<div className="menu">
				<Link to="/account/review" className="menu-link">My Review</Link>
			</div>
			<div className="menu">
				<Link to="/account/following" className="menu-link">My Following List</Link>
			</div>
		</div>
	)
}

export default AccountNav;
