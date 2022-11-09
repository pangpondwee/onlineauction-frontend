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

		const sp = new URLSearchParams(props.searchParams);
		sp.set("page",i);

		pageList.push(
			<li key={i} className={c}>
				<Link className="page-link" to={"?"+sp.toString()}>{i}</Link>
			</li>
		)
	}

	const sp = new URLSearchParams(props.searchParams);
	sp.set("page",props.searchParams.get("page")+1);

	const sn = new URLSearchParams(props.searchParams);
	sn.set("page",props.searchParams.get("page")-1);

	return (
		<nav aria-label="Page navigation example">
			<ul className="pagination justify-content-center">
				{ // previous page
				hasPrev ? <li className="page-item">
					<Link className="page-link" to={"?"+sn.toString()} aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span className="sr-only"></span>
					</Link>
				</li>
				:
				<></>}
				{pageList}

				{ // Next page
				hasNext ? <li className="page-item">
					<Link className="page-link" to={"?"+sp.toString()} aria-label="Next">
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
	const [searchParams, setSearchParams] = useSearchParams();
	const [status,setStatus] = useState("loading")
	const [data,setData] = useState({})

	const [searchPage,setSearchPage] = useState(1);
	const [searchPageCount,setSearchPageCount] = useState(1);
	const [searchCategory,setSearchCategory] = useState("all");
	const [searchSort,setSearchSort] = useState("newest");

	useEffect(()=>{
		setStatus("loading")
		getData("/auction/search?"+searchParams.toString())
		.then((res)=>{
			setStatus(res.status)
			setData(res.data)
			setSearchPageCount(res.data.pageCount);
		})
		.catch(e=>{
			setStatus("error")
			setData(e.message)
		})

		let page = Number(searchParams.get("page"));
		if(!page || page < 1) page = 1; // limit to 1
		setSearchPage(page)

		let category = searchParams.get("category");
		if(!category) category = "none";
		setSearchCategory(category);

		let sort = searchParams.get("sort");
		if(!sort) sort = "newest";
		setSearchSort(sort);
	
	},[searchParams])

	const selectSort = ()=>{
		const s = document.getElementById("sort").value
		searchParams.set("sort",s)
		setSearchParams(searchParams)
	}

	const selectCategory = (e)=>{
		let s = document.getElementById("category").value
		if(!s || s == "all"){
			searchParams.delete("category")
		}
		else{
			searchParams.set("category",s)
		}
		setSearchParams(searchParams)
	}

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
			{getHeadSearch(searchParams)}
			<div className="topSearch">		
				<p className="detailSearch">{data.itemCount} auctions found</p>
			</div>
			<div className="searchSort">
				<span className="searchCategory">Category</span>
				<select id="category" value={searchCategory} onChange={selectCategory} >
					<option value="all">All</option>
					{categoryTypesEnum.map((val, key) => {
						return (
						<option key={key} value={val}>{val}</option>
						);
					})}
				</select>
				<span className="searchSortBy">Sort by</span>
				<select id="sort" value={searchSort} onChange={selectSort} >
					<option value="newest">Newest</option>
					<option value="time_remaining">Time remaining</option>
					<option value="highest_bid">Highest Bid Price</option>
					<option value="lowest_bid">Lowest Bid Price</option>
				</select>
				
			</div>
			
			<div className="row searchRow">
				{AuctionElements}
			</div>
			<PageNav page={searchPage} pageCount={searchPageCount} searchParams={searchParams} setSearchParams={setSearchParams}/>
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
