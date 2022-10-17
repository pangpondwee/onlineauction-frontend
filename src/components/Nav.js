import { Link,useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import "../css/Nav.css";

const Nav = (props) => {
	const navigate = useNavigate();
	const displayName=localStorage.getItem("displayName");
	const loggedIn = props.loggedIn;
	const logOut = ()=>{
		props.setloggedIn(false);
		window.location.href = "/signup";
	}
	const searchSubmit = (e)=>{
		const searchTerm = document.getElementById("nav-search").value;
        navigate({
			pathname:"/search",
			search: "?name=" + encodeURIComponent(searchTerm)});
		e.preventDefault()
	}
	const categoryTypesEnum = [
		"Home Improvement",
		"Jewellery",
		"Coins, Currency, Stamps",
		"Watches",
		"Fashion",
		"Arts",
		"Antiques & Collectables and Amulet",
		"Electronics",
		"Cars & Automotive",
		"Handbags",
		"Miscellaneous",
	];
	let category_elements = categoryTypesEnum.map((item,index)=>{
		return (
			<Link key={index} to={"/search?category="+encodeURIComponent(item)} className="ps-4 dropdown-item nav-link">{item}</Link>
		)
	})	
	return (
		<nav className="navbar d-flex sticky-top">{/* add sticky-top */}
			{/* Nav Bar BEGIN*/}
			<button className="ms-2 navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav">
				<span className="navbar-toggler-icon"></span>
			</button>
			<Link className="navbar-brand me-auto p-2" to="/">Online Auction</Link>
			<form onSubmit={searchSubmit}>
				<input id="nav-search" className="form-control me-2" type="search" placeholder="Search"/>
			</form>
			{loggedIn ? 
				<div className="dropdown ms-auto p-2">
					<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">{displayName}</Link>
					<div className="dropdown-menu dropdown-menu-end ms-auto p-2">
						<Link to="/account/profile" className="dropdown-item">Profile</Link>
						<Link to="/account/myorder?list=bid&type=all" className="dropdown-item">Bid & Auction</Link>
						<Link to="/place-auction" className="dropdown-item">Place Auction</Link>
						<Link to="/faq" className="dropdown-item">FAQs</Link>
						<Link to="#" onClick={logOut} className="dropdown-item">Log out</Link>
					</div>
				</div>
				:
				<Link className="btn ms-auto" to="/signup">Sign In/Sign Up</Link>				
			}
			
			{/* <div className="dropdown p-2">
				<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Noti</Link>
				<ul className="dropdown-menu ms-auto p-2" to="#">
					<li className="dropdown-item"></li>
				</ul>
			</div> */}
			{/* Nav Bar END*/}

			{/* Offcanvas BEGIN*/}
			{/* <div id="offcanvas-nav" className="offcanvas offcanvas-start ps-4">
				<div className="offcanvas-header">
					<h5 className="offcanvas-title">Auction Online</h5>
					<button className="btn-close" data-bs-dismiss="offcanvas"></button>
				</div>
				<Link id="offcanvas-profile" className="nav-link p-3" to="/account/profile">{displayName}</Link>
				<div className="navbar-nav">
					<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Categories</Link>
					<div className="dropdown-menu nav-dropdown show" >
					{category_elements}
					</div>
					<Link to="#" className="nav-link nav-item">Place Auction</Link>
					<Link to="/account/myorder?list=bid&type=all" className="nav-link nav-item">Currently Bidding</Link>
					<Link to="/account/myorder?list=auction&type=all" className="nav-link nav-item">Currently on Auction</Link>
					<Link to="/account/following" className="nav-link nav-item">My Following List</Link>
				</div>
			</div> */}
			{/* Offcanvas END*/}
			{loggedIn ?
				<div id="offcanvas-nav" className="offcanvas offcanvas-start ps-4">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title">Auction Online</h5>
						<button className="btn-close" data-bs-dismiss="offcanvas"></button>
					</div>
					<Link id="offcanvas-profile" className="nav-link p-3" to="/account/profile">{displayName}</Link>
					<div className="navbar-nav">
						<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Categories</Link>
						<div className="dropdown-menu nav-dropdown show" >
						{category_elements}
						</div>
						<Link to="/place-auction" className="nav-link nav-item">Place Auction</Link>
						<Link to="/account/myorder?list=bid&type=all" className="nav-link nav-item">Currently Bidding</Link>
						<Link to="/account/myorder?list=auction&type=all" className="nav-link nav-item">Currently on Auction</Link>
						<Link to="/account/following" className="nav-link nav-item">My Following List</Link>
					</div>
				</div>
				:
				<div id="offcanvas-nav" className="offcanvas offcanvas-start ps-4">
					<div className="offcanvas-header">
						<h5 className="offcanvas-title">Auction Online</h5>
						<button className="btn-close" data-bs-dismiss="offcanvas"></button>
					</div>
				
					<div className="navbar-nav">
						<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Categories</Link>
						<div className="dropdown-menu nav-dropdown show" >
						{category_elements}
						</div>
					</div>
			</div>
			}
		</nav>
  );
};

export default Nav;
