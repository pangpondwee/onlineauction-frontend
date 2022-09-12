import { Link } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import "../css/Home.css";
import "../css/Search.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
const Search = () =>{
	return (
		<>
		<p className="headSearch">Nintendo Switch</p>
		<div className="filter ms-auto p-2">
			<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Sort By</Link>
			<ul className="dropdown-menu dropdown-menu-end ms-auto p-2">
				<li className="dropdown-item">Time remaining</li>
				<li className="dropdown-item">Lowest Bid Price</li>
				<li className="dropdown-item">Highest Bid Price</li>
				<li className="dropdown-item">Newest</li>
			</ul>
		</div>
		<p className="detailSearch">1000 items found for “Nintendo Switch”</p>
		<div className="flexRow">
			<AuctionCard name="first" price="2000$" time="18:30:22" picture="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"/>
			<AuctionCard name="second" price="100$" time="time" picture="https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"/>
			<AuctionCard name="third" price="1000$" time="time" picture="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			<AuctionCard name="Omnitrix" price="20$" time="08:53:05"picture="https://cdn.estore.nu/68744-thickbox_default/ben-10---deluxe-omnitrix-creator-set.jpg"/>
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
                <li className="page-item active"><Link class="page-link" to="#">1</Link></li>
                <li className="page-item"><Link class="page-link" to="#">2</Link></li>
                <li className="page-item"><Link class="page-link" to="#">3</Link></li>
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
