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
			<Link key={index} to={"/search?category="+encodeURIComponent(item)} className="ps-5 dropdown-item nav-link">{item}</Link>
		)
	})	
	return (
		<nav className="navbar d-flex sticky-top">{/* add sticky-top */}
			{/* Nav Bar BEGIN*/}
			<button className="ms-2 navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-nav">
				<span className="navbar-toggler-icon"></span>
			</button>
			<Link className="navbar-brand me-auto p-2" to="/"><img src="/icon-auction.png" className="nav-icon"/>Online Auction</Link>
			<form id="nav-search-block" onSubmit={searchSubmit}>
				<img src="/icon-search.png" className="nav-icon" />
				<input id="nav-search" className="me-2" type="search" placeholder="Search"/>
			</form>
			{loggedIn ? 
				<div id="nav-right" className="dropdown ms-auto p-2">
					<img id="navProfilePic" src={localStorage.getItem("profilePicture")}></img>
					<Link id="profile-link" className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">{displayName}</Link>
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

			{loggedIn ?
				<div id="offcanvas-nav" className="offcanvas offcanvas-start">
					<div className="offcanvas-header ps-4">
						<h5 className="offcanvas-title"><img src="/icon-auction.png" className="nav-icon"/>Online Auction</h5>
						<button className="btn-close" data-bs-dismiss="offcanvas"></button>
					</div>
					<div id="offcanvas-profile" className="ps-4 offcanvas-item">
						<img id="navProfilePic" src={localStorage.getItem("profilePicture")}></img>
						<Link id="offcanvas-profile-link" className="nav-link p-3" to="/account/profile">{displayName}</Link>
					</div>
					<div className="navbar-nav">
						<Link className="nav-link dropdown-toggle nav-item ps-4 offcanvas-item" to="#" data-bs-toggle="dropdown">
							<img className="nav-icon" src={"/icon-category.png"} />Categories</Link>
						<div className="dropdown-menu nav-dropdown show" >
						{category_elements}
						</div>
						<Link to="/place-auction" className="offcanvas-item nav-link nav-item ps-4">
						<img className="nav-icon" src={"/icon-package.png"} />Place Auction</Link>
						<Link to="/account/myorder?list=bid&type=all" className="offcanvas-item nav-link nav-item ps-4">
						<img className="nav-icon" src={"/icon-bid.png"} />My Bid</Link>
						<Link to="/account/myorder?list=auction&type=all" className="offcanvas-item nav-link nav-item ps-4">
						<img className="nav-icon" src={"/icon-auction.png"} />My Auction</Link>
						<Link to="/account/following" className="offcanvas-item nav-link nav-item ps-4">
						<img className="nav-icon" src={"/icon-heart.png"} />My Following List</Link>
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
