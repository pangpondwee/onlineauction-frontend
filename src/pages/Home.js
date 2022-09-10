import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import "../css/Home.css";
import arrow_left from "../images/arrow_left.png";
import arrow_right from "../images/arrow_right.png";
const Home = () =>{
	return (
		<>
		<p className="headHome">Welcome, Peeranat! Let’s see what you got...</p>
		<div className="filter ms-auto p-2">
			<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Sort By</Link>
			<ul className="dropdown-menu dropdown-menu-end ms-auto p-2">
				<li className="dropdown-item">Time remaining</li>
				<li className="dropdown-item">Lowest Bid Price</li>
				<li className="dropdown-item">Highest Bid Price</li>
				<li className="dropdown-item">Newest</li>
			</ul>
		</div>
		<p className="detail">Your Recent Bids</p>
		<div className="test">
			{/* previous button */}
			<Link to={"#"}>
				<img src={arrow_left} className="button"></img>
			</Link>
			<AuctionCard name="first" price="2000$" time="18:30:22" picture="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"/>
			<AuctionCard name="second" price="100$" time="time" picture="https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"/>
			<AuctionCard name="third" price="1000$" time="time" picture="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			<AuctionCard name="Omnitrix" price="20$" time="08:53:05"picture="https://cdn.estore.nu/68744-thickbox_default/ben-10---deluxe-omnitrix-creator-set.jpg"/>
			<AuctionCard name="e"/>
			{/* next button */}
			<Link to={"#"}>
				<img src={arrow_right} className="button"></img>
			</Link>
		</div>
		<p className="detail">Recent Following List</p>
		<div className="test">
			{/* Add previous button */}
			<Link to={"#"}>
				<img src={arrow_left} className="button"></img>
			</Link>
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
			{/* Add next button */}
			<Link to={"#"}>
				<img src={arrow_right} className="button"></img>
			</Link>
		</div>
		<p className="detail">Poppular</p>
		<div className="test">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		<p className="detail">Ending soon</p>
		<div className="test">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		</>
	)
}
export default Home;
