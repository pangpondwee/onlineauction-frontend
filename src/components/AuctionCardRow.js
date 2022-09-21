import {Link} from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
// import AuctionCardForRow from "./AuctionCardForRow";
function getDate(timeRemaining){
	// TODO make date lighter
	const d = new Date(Number(timeRemaining));
	const d_days = Math.floor(timeRemaining/(24*60*60*1000)); // days remaining
	const d_hour = d.getHours();
	const d_minute = d.getMinutes();
	const d_seconds = d.getSeconds();
	if(timeRemaining <= 0){
		return "Ended";
	}
	if(d_days > 2){
		return `${d_days} day(s)`;
	}
	else{
		return `${d_hour}hr ${d_minute}m ${d_seconds}s`;
	}
}

const AuctionCardRow = (props) =>{
    let auctionCard_element = []
    for(let i=0;i<props.data.length;i++){
        const timeRemaining = Number(props.data[i].endDate) - Date.now()
        const price = props.data[i].currentPrice ? props.data[i].currentPrice : "Unknown";
        auctionCard_element.push(
            <AuctionCard 
            key={i} 
            name={props.data[i].productName} 
            price={price} 
            picture={"#"}
            time={getDate(timeRemaining)}/>
        )
    }
	return (
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {auctionCard_element}
        </div>
	)
}
export default AuctionCardRow;
