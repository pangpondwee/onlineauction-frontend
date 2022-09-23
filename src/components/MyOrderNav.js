import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MyAuctionNav = () =>{
	const location = useLocation()
	
	const c_tab = (search) => (
		search===location.search.split("?")[2]? "current-tab" : ""
    )

	return (
		<nav className="My-Order-Nav">
			<div className={`Order-Menu ${c_tab("all")}`}>
                <Link to="/account/myorder?auction?all" className="menu-link">All</Link>
			</div>
			<div className={`Order-Menu ${c_tab("current")}`}>
                <Link to="/account/myorder?auction?current" className="menu-link">Currently On Auction</Link>
			</div>
			<div className={`Order-Menu ${c_tab("pay")}`}>
                <Link to="/account/myorder?auction?pay" className="menu-link">To Pay</Link>
			</div>
			<div className={`Order-Menu ${c_tab("shipped")}`}>
                <Link to="/account/myorder?auction?shipped" className="menu-link">To Shipped</Link>
			</div>
			<div className={`Order-Menu ${c_tab("confirm")}`}>
                <Link to="/account/myorder?auction?confirm" className="menu-link">To Confirm</Link>
			</div>
			<div className={`Order-Menu ${c_tab("complete")}`}>
                <Link to="/account/myorder?auction?complete" className="menu-link">Completed</Link>
			</div>
		</nav>
	)
}

export const MyBidNav = () =>{
	const location = useLocation()
	
	const c_tab = (search) => (
		search===location.search.split("?")[2]? "current-tab" : ""
    )

	return (
		<nav className="My-Order-Nav">
			<div className={`Order-Menu ${c_tab("all")}`}>
				<Link to="/account/myorder?bid?all" className="menu-link">All</Link>
			</div>
			<div className={`Order-Menu ${c_tab("current")}`}>
				<Link to="/account/myorder?bid?current" className="menu-link">Currently Bidding</Link>
			</div>
			<div className={`Order-Menu ${c_tab("pay")}`}>
				<Link to="/account/myorder?bid?pay" className="menu-link">To Pay</Link>
			</div>
			<div className={`Order-Menu ${c_tab("delivered")}`}>
				<Link to="/account/myorder?bid?delivered" className="menu-link">To Delivered</Link>
			</div>
			<div className={`Order-Menu ${c_tab("confirm")}`}>
				<Link to="/account/myorder?bid?confirm" className="menu-link">To Confirm</Link>
			</div>
			<div className={`Order-Menu ${c_tab("complete")}`}>
				<Link to="/account/myorder?bid?complete" className="menu-link">Completed</Link>
			</div>
		</nav>
	)
}

export default MyBidNav;