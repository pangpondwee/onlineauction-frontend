import {Link} from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MyAuctionNav = () =>{
	const location = useLocation()
	
	const c_tab = (search) => (
		search===location.search.slice(1).split("&")[1]? "current-tab" : ""
    )

	return (
		<nav className="My-Order-Nav">
			<div className={`Order-Menu ${c_tab("type=all")}`}>
                <Link to="/account/myorder?list=auction&type=all" className="menu-link">All</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=current")}`}>
                <Link to="/account/myorder?list=auction&type=current" className="menu-link">Currently On Auction</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=pay")}`}>
                <Link to="/account/myorder?list=auction&type=pay" className="menu-link">To Pay</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=shipped")}`}>
                <Link to="/account/myorder?list=auction&type=shipped" className="menu-link">To Shipped</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=confirm")}`}>
                <Link to="/account/myorder?list=auction&type=confirm" className="menu-link">To Confirm</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=complete")}`}>
                <Link to="/account/myorder?list=auction&type=complete" className="menu-link">Completed</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=canceled")}`}>
                <Link to="/account/myorder?list=auction&type=canceled" className="menu-link">Canceled</Link>
			</div>
		</nav>
	)
}

export const MyBidNav = () =>{
	const location = useLocation()
	
	const c_tab = (search) => (
		search===location.search.slice(1).split("&")[1]? "current-tab" : ""
    )

	return (
		<nav className="My-Order-Nav">
			<div className={`Order-Menu ${c_tab("type=all")}`}>
				<Link to="/account/myorder?list=bid&type=all" className="menu-link">All</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=current")}`}>
				<Link to="/account/myorder?list=bid&type=current" className="menu-link">Currently Bidding</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=pay")}`}>
				<Link to="/account/myorder?list=bid&type=pay" className="menu-link">To Pay</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=delivered")}`}>
				<Link to="/account/myorder?list=bid&type=delivered" className="menu-link">To Delivered</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=confirm")}`}>
				<Link to="/account/myorder?list=bid&type=confirm" className="menu-link">To Confirm</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=complete")}`}>
				<Link to="/account/myorder?list=bid&type=complete" className="menu-link">Completed</Link>
			</div>
			<div className={`Order-Menu ${c_tab("type=canceled")}`}>
                <Link to="/account/myorder?list=auction&type=canceled" className="menu-link">Canceled</Link>
			</div>
		</nav>
	)
}

export default MyBidNav;