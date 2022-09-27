import { useEffect,useState } from "react";
import { Link,useParams,useSearchParams } from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import AuctionCardRow from "../components/AuctionCardRow";
import getData from "../components/fetchData";
import "../css/Home.css";
import "../css/Search.css";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";

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
	const { pageNumber } = useParams();
	const [searchParams, setSearchParams] = useSearchParams();
	let page = pageNumber ? Number(pageNumber) : 1; // Get page number
	if(page < 1) page = 1 // limit to 1
	const [data,setData] = useState([])
	const [status,setStatus] = useState("loading")
	const [pageCount,setPageCount] = useState(1)
	const name = searchParams.get("name");
	const selectSort = (e) =>{
		const s = document.getElementById("select1").value
		searchParams.set("sort",s)
		setSearchParams(searchParams)
	}

	useEffect(()=>{
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
		const auctionData = data.auctionList
		let auctionCard_element = []
		for(let i=0;i<auctionData.length;i++){
			const timeRemaining = Number(auctionData[i].endDate) - Date.now()
			const price = auctionData[i].currentPrice ? auctionData[i].currentPrice : "Unknown";
			auctionCard_element.push(
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
			<p className="headSearch">{name}</p>
			<div className="topSearch">		
				<p className="detailSearch">{auctionCard_element.length} items found for "{name}"</p>
				<p className="">Sort by
					<select id="select1" onChange={selectSort} >
						<option value="newest">Newest</option>
						<option value="time_remaining">Time remaining</option>
						<option value="highest_bid">Highest Bid Price</option>
						<option value="lowest_bid">Lowest Bid Price</option>
					</select>
				</p>
			</div>

			<div className="row searchRow">
				{auctionCard_element}
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
