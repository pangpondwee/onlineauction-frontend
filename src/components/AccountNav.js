import {Link, useLocation} from "react-router-dom";

const AccountNav = () =>{
	const location = useLocation();
	const c_tab = (tag, search) => {
		if(tag === "myorder"){
			return search===location.search.split("?")[1]? "current-tab" : "";
		}
		else {
			return tag===location.pathname.split("/")[2]? "current-tab" : "";
		}
	}

	return (
		<div className="lefthand-nav">
			{/* class "current-tab" 'll highlight depends on current page */}
			<div className={`menu ${c_tab("profile", " ")}`}>
				<Link to="/account/profile" className="menu-link">My Profile</Link>
			</div>
			<div className="menu">
				<h5>My Order</h5>
				<ul className="no-bullets">
					<li className={`menu-dropdown ${c_tab("myorder", "bid")}`}>
						<Link to="/account/myorder?bid?all" className="menu-link">My Bid</Link>
					</li>
					<li className={`menu-dropdown ${c_tab("myorder", "auction")}`}>
						<Link to="/account/myorder?auction?all" className="menu-link">My Auction</Link>
					</li>
				</ul>
			</div>
			<div className={`menu ${c_tab("review", "")}`}>
				<Link to="/account/review" className="menu-link">My Review</Link>
			</div>
			<div className={`menu ${c_tab("following", "")}`}>
				<Link to="/account/following" className="menu-link">My Following List</Link>
			</div>
		</div>
	)
}

export default AccountNav;
