import AuctioneerProfile from "../components/AuctioneerProfile";
import AuctioneerReview from "../components/AuctioneerReview";
import Auctions from "../components/Auctions";
import AuctioneerReport from "../components/AuctioneerReport";
import PopupConfirm from "../components/PopupConfirm";
import PopupReview from "../components/PopupReview";
import AuctionCardRow from "../components/AuctionCardRow";
import { useEffect, useState } from "react";
import getData from "../components/fetchData";
import "../css/ViewAuctioneer.css"

const AuctionList = (props)=>{
	const [data,setData] = useState([])
	const [status,setStatus] = useState("loading")
	useEffect(()=>{
		getData(props.url,setData)
		.then((res)=>{
			setStatus(res.status)
			setData(res.data)
		})
		.catch(e=>{
			setData(e.message)
			setStatus("error")
		})
	},[])
	if(status == "success"){
		if(data.length > 0){
			return <AuctionCardRow data={data}/>
		}
		else{
			return <p>{props.message}</p>
		}
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

const ViewAuctioneer = () => {
    return (
        <div>
            <div style={{display:"flex"}}>
                <PopupConfirm />
                <PopupReview />
                <AuctioneerReport />
            </div>
            <AuctioneerProfile />
            <AuctioneerReview />
            <Auctions />
        </div>
    )
}
export default ViewAuctioneer;