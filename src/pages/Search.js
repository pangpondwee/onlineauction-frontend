import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import AuctionCardRow from "../components/AuctionCardRow";
import "../css/Home.css";
import "../css/Search.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
const Search = () =>{
	const auctionData = [
		{name:"first", price:"2000", picture:"https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"},
		{name:"second", price:"2000", picture:"https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"},
		{name:"third", price:"2000", picture:"https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
		{name:"fourth", price:"2000", picture:arrow_left},
		{name:"fifth", price:"2000", picture:arrow_right},
		{name:"six", price:"2000", picture:arrow_left},
		{name:"seven", price:"2000", picture:arrow_right},
		{name:"eight", price:"2000", picture:arrow_left},
		{name:"nine", price:"2000", picture:arrow_right},
		{name:"ten", price:"2000", picture:arrow_left},
		{name:"eleven", price:"2000", picture:arrow_right},
		{name:"twelve", price:"2000", picture:arrow_left},
		{name:"thirteen", price:"2000", picture:arrow_right},
		{name:"fourteen", price:"2000", picture:arrow_left},
		{name:"fifteen", price:"2000", picture:arrow_right},
	]
	let auctionCard_element = []
	// for(let i=0;i<15;i++){
	// 	auctionCard_element.push(
	// 		<AuctionCard key={i} name={auctionData[i].name} picture={auctionData[i].picture}/>
	// 	)
	// }
	if (auctionData.length % 5 == 0)
		for(let i=0;i<15;i++){
			auctionCard_element.push(
				<AuctionCard key={i} name={auctionData[i].name} picture={auctionData[i].picture}/>
			)
		}
	return (
		<>
		<p className="headSearch">Nintendo Switch</p>
		<p className="sortFilter">Sort by
			<select id="select1">
            	<option value="Newest">Newest</option>
            	<option value="Time remaining">Time remaining</option>
            	<option value="Highest Bid Price">Highest Bid Price</option>
				<option value="Newest">Newest</option>
        	</select>
		</p>
		{/* <div className="filter ms-auto p-2">
			<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Sort By</Link>
			<ul className="dropdown-menu dropdown-menu-end ms-auto p-2">
				<li className="dropdown-item">Time remaining</li>
				<li className="dropdown-item">Lowest Bid Price</li>
				<li className="dropdown-item">Highest Bid Price</li>
				<li className="dropdown-item">Newest</li>
			</ul>
		</div> */}
		<p className="detailSearch">1000 items found for “Nintendo Switch”</p>
		<div className="flexRow">
			<AuctionCard name="first" price="2000$" time="18:30:22" picture="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"/>
			<AuctionCard name="second" price="100$" time="time" picture="https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"/>
			<AuctionCard name="third" price="1000$" time="time" picture="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			<AuctionCard name="Omnitrix" price="20$" time="08:53:05"picture="https://cdn.estore.nu/68744-thickbox_default/ben-10---deluxe-omnitrix-creator-set.jpg"/>
			<AuctionCard name="e"/>
		</div>
		<h1>Test</h1>
        <div className="flexRow">
			{auctionCard_element.slice(0,5)}
		</div>
		<div className="flexRow">
			{auctionCard_element.slice(5,10)}
		</div>
		<h1>End Test</h1>
		<div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		<div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
        <div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
        <div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
        <div className="flexRow">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only"></span>
                    </Link>
                </li>
                <li className="page-item active"><Link className="page-link" to="#">1</Link></li>
                <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                <li className="page-item">
                    <Link className="page-link" to="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only"></span>
                    </Link>
                </li>
            </ul>
        </nav>
		</>
	)
}
export default Search;
