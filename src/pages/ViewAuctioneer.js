import AuctioneerProfile from "../components/AuctioneerProfile";
import Auctions from "../components/Auctions";
import AuctioneerReport from "../components/AuctioneerReport";
import PopupConfirm from "../components/PopupConfirm";
import PopupReview from "../components/PopupReview";
import AuctionCardRow from "../components/AuctionCardRow";
import { useEffect, useState } from "react";
import getData from "../components/fetchData";
import { useParams } from "react-router-dom";
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
    const { auctioneerID } = useParams();
    return (
        <div>
            <div style={{display:"flex"}}>
                {/* <PopupConfirm /> */}
                <AuctioneerReport />
            </div>
            <AuctioneerProfile />
            <AuctionList 
            message="There are no bids by this auctioneer"
            url={"/auction/auction-list?filter=auctioneer&auctioneer="+auctioneerID}
            />
        </div>
    )
}
export default ViewAuctioneer;