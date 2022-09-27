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
		// const auctionData = [
		// 	{productName:"first", price:"2000", picture:"https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"},
		// 	{productName:"second", price:"2000", picture:"https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"},
		// 	{productName:"third", price:"2000", picture:"https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
		// 	{name:"fourth", price:"2000", picture:arrow_left},
		// 	{productName:"fifth", price:"2000", picture:arrow_right},
		// 	{productName:"six", price:"2000", picture:arrow_left},
		// 	{productName:"seven", price:"2000", picture:arrow_right},
		// 	{productName:"eight", price:"2000", picture:arrow_left},
		// 	{productName:"nine", price:"2000", picture:arrow_right},
		// 	{productName:"ten", price:"2000", picture:arrow_left},
		// 	{productName:"eleven", price:"2000", picture:arrow_right},
		// 	{productName:"twelve", price:"2000", picture:arrow_left},
		// 	{productName:"thirteen", price:"2000", picture:arrow_right},
		// 	{productName:"fourteen", price:"2000", picture:arrow_left},
		// 	{productName:"fifteen", price:"2000", picture:arrow_right},
		// ]
		const auctionData = data.auctionList
		let auctionCard_element = []
		// for(let i=0;i<15;i++){
		// 	auctionCard_element.push(
		// 		<AuctionCard key={i} name={auctionData[i].name} picture={auctionData[i].picture}/>
		// 	)
		// }
		// if (auctionData.length % 5 == 0)
		// 	for(let i=0;i<15;i++){
		// 		auctionCard_element.push(
		// 			<AuctionCard key={i} name={auctionData[i].name} picture={auctionData[i].picture}/>
		// 		)
		// 	}
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

			{/* <div className="filter ms-auto p-2">
				<Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown">Sort By</Link>
				<ul className="dropdown-menu dropdown-menu-end ms-auto p-2">
					<li className="dropdown-item">Time remaining</li>
					<li className="dropdown-item">Lowest Bid Price</li>
					<li className="dropdown-item">Highest Bid Price</li>
					<li className="dropdown-item">Newest</li>
				</ul>
			</div> */}
			
			{/* <p className="detailSearch">1000 items found for “Nintendo Switch”</p> */}
			{/* <div className="flexRow">
				<AuctionCard name="first" price="2000$" time="18:30:22" picture="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"/>
				<AuctionCard name="second" price="100$" time="time" picture="https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"/>
				<AuctionCard name="third" price="1000$" time="time" picture="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
				<AuctionCard name="Omnitrix" price="20$" time="08:53:05"picture="https://cdn.estore.nu/68744-thickbox_default/ben-10---deluxe-omnitrix-creator-set.jpg"/>
				<AuctionCard name="e"/>
			</div>		
			<div className="flexRow">
				{auctionCard_element.slice(0,5)}
			</div> */}

			<div className="row searchRow">
				{auctionCard_element}
			</div>
			
			{/* <div className="flexRow">
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
			</div> */}
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
