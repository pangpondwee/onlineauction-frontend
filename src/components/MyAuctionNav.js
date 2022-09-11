import {Link} from "react-router-dom";

const MyAuctionNav = () =>{
	return (
		<nav className="My-Order-Nav">
			<div className="Order-Menu current-tab">
                <Link to="" className="menu-link">All</Link>
			</div>
			<div className="Order-Menu">
                <Link to="" className="menu-link">Currently On Auction</Link>
			</div>
			<div className="Order-Menu">
                <Link to="" className="menu-link">To Pay</Link>
			</div>
			<div className="Order-Menu">
                <Link to="" className="menu-link">To Shipped</Link>
			</div>
			<div className="Order-Menu">
                <Link to="" className="menu-link">To Confirm</Link>
			</div>
			<div className="Order-Menu">
                <Link to="" className="menu-link">Completed</Link>
			</div>
		</nav>
	)
}

export default MyAuctionNav;