import {Link} from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
// import AuctionCardForRow from "./AuctionCardForRow";

const AuctionCardRow = (props) =>{
    let auctionCard_element = []
    for(let i=0;i<props.data.length;i++){
        const timeRemaining = Number(props.data[i].endDate) - Date.now()
        const price = props.data[i].currentPrice ? props.data[i].currentPrice : "Unknown";
        auctionCard_element.push(
            <AuctionCard 
            key={i} 
            id={props.data[i].auctionID}
            name={props.data[i].productName}
            price={price} 
            picture={props.data[i].coverPicture}
            time={timeRemaining}/>
        )
    }
	return (
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {auctionCard_element}
        </div>
	)
}
export default AuctionCardRow;
