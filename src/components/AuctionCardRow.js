import {Link} from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
// import AuctionCardForRow from "./AuctionCardForRow";
import { getDate } from "./util";

const AuctionCardRow = (props) =>{
    const auctionCard_element = props.data.map((item,index)=>{
        const timeRemaining = Number(item.endDate) - Date.now()
        const price = item.currentPrice ? item.currentPrice : "Unknown";
        return <AuctionCard 
        key={index} 
        id={item.auctionID}
        name={item.productName}
        price={price} 
        picture={item.coverPicture}
        time={timeRemaining}/>
    })
	return (
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {auctionCard_element}
        </div>
	)
}
export default AuctionCardRow;
