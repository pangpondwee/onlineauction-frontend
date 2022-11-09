import { useEffect,useState } from "react";
import { Link,useParams,useSearchParams } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import AuctionCardRow from "../components/AuctionCardRow";
import getData from "../components/fetchData";
import "../css/Home.css";
import "../css/Search.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
import { getDate } from "../components/util";

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

function getHeadSearch(searchParams){
	const searchTerm = searchParams.get("name");
	const searchCategory = searchParams.get("category");
	const searchSort = searchParams.get("sort");
	
	let title = "";
	let subtitle = "";

	if(searchTerm){
		title = searchTerm;
		if(searchCategory){
			subtitle += "Category: " + searchCategory + " "
		}
	}
	else if(searchCategory){
		title = "Category: " + searchCategory
	}
	// console.log(searchTerm)
	subtitle = subtitle.trim()
	return (
		<div className="headSearch">
			<h1>{title}</h1>
			<p>{subtitle}</p>
		</div>
	)
}

const PageNav = (props)=>{
	const page = props.page;
	const pageCount = props.pageCount
	const hasPrev = page > 1? true : false; 
	const hasNext = page < pageCount? true : false; 
	// simple page list
	const pageList = []
	for(let i=1;i<pageCount+1;i++){
		let c = "page-item";
		if(i == page) c = c + " active" // active item
		pageList.push(
			<li key={i} className={c}>
				<Link className="page-link" to="#">{i}</Link>
			</li>
		)
	}
	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				{ // previous page
				hasPrev ? <li className="page-item">
					<Link className="page-link" to="#" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only"></span>
					</Link>
				</li>
				:
				<></>}
				{pageList}

				{ // Next page
				hasNext ? <li className="page-item">
					<Link className="page-link" to="#" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						<span className="sr-only"></span>
					</Link>
				</li>
				:
				<></>}
			</ul>
		</nav>
	)
}

const Search = (props) =>{
	// Page number
	const { pageNumber } = useParams();
	let page = pageNumber ? Number(pageNumber) : 1;
	if(page < 1) page = 1 // limit to 1

	// Search Params
	const [searchParams, setSearchParams] = useSearchParams();
	const [status,setStatus] = useState("loading")
	const [data,setData] = useState({})
	const [pageCount,setPageCount] = useState(1)

	const headSearch = getHeadSearch(searchParams)

	const p1 = searchParams.get("sort")
	const p2 = searchParams.get("category")

	const selectSort = (e) =>{
		const s = document.getElementById("select1").value
		searchParams.set("sort",s)
		setSearchParams(searchParams)
	}
	const selectCate = (e)=>{
		const s = document.getElementById("select2").value
		searchParams.set("category",s)
		setSearchParams(searchParams)
	}

	useEffect(()=>{
		setStatus("loading")
		getData("/auction/search?"+searchParams.toString())
		.then((res)=>{
			setStatus(res.status)
			setData(res.data)
			setPageCount(res.data.pageCount)
		})
		.catch(e=>{
			setStatus("error")
			setData(e.message)
		})
	},[searchParams])

	if(status == "success"){
		const auctionData = data.auctionList;
		let AuctionElements = []
		for(let i=0;i<auctionData.length;i++){
			const timeRemaining = Number(auctionData[i].endDate) - Date.now()
			const price = auctionData[i].currentPrice ? auctionData[i].currentPrice : "Unknown";
			AuctionElements.push(
				<AuctionCard 
				key={i} 
				id={auctionData[i].auctionID}
				name={auctionData[i].productName}
				price={price} 
				picture={auctionData[i].coverPicture}
				time={timeRemaining}/>
			)
		}

		return (
			<>
			{headSearch}
			<div className="topSearch">		
				<p className="detailSearch">{AuctionElements.length} auctions found</p>
				
			</div>
			<div className="searchSort">
				<span className="searchSortBy">Sort by</span>
				<select id="select1" value={p1 == null ? "" : p1} onChange={selectSort} >
					<option value="" disabled>-- Select --</option>
					<option value="newest">Newest</option>
					<option value="time_remaining">Time remaining</option>
					<option value="highest_bid">Highest Bid Price</option>
					<option value="lowest_bid">Lowest Bid Price</option>
				</select>
				<span className="searchCategory">Category</span>
				<select id="select2" value={p2 == null ? "" : p2} onChange={selectCate} >
					<option value="" disabled>-- Select --</option>
				{categoryTypesEnum.map((val, key) => {
					return (
					<option key={key} value={val}>{val}</option>
					);
				})}
				</select>
				
			</div>
			
			<div className="row searchRow">
				{AuctionElements}
			</div>
			<PageNav page={page} pageCount={pageCount}/>
			</>
		)
	}
	else if(status == "loading"){
		return(
			<p>Loading...</p>
		)
	}
	else{
		return (
			<>
				<p>Error: {data}</p>
			</>
		)
	}
}
export default Search;
