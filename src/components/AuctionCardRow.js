import {Link} from "react-router-dom";
import AuctionCard from "../components/AuctionCard";

const AuctionCardRow = (props) =>{
    console.log(props);
	return (		
		// <div className="card-deck">
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            <AuctionCard name={props.name1} price={props.price} time={props.time}/>
            <AuctionCard name={props.name2} price={props.price} time={props.time}/>
            <AuctionCard name={props.name3} price={props.price} time={props.time}/>
            <AuctionCard name={props.name4} price={props.price} time={props.time}/>
            <AuctionCard name={props.name5} price={props.price} time={props.time}/>
            <AuctionCard name={props.name6} price={props.price} time={props.time}/>
            <AuctionCard name={props.name7} price={props.price} time={props.time}/>
            <AuctionCard name={props.name8} price={props.price} time={props.time}/>
            <AuctionCard name={props.name9} price={props.price} time={props.time}/>
            <AuctionCard name={props.name10} price={props.price} time={props.time}/>
            <AuctionCard name={props.name11} price={props.price} time={props.time}/>
            <AuctionCard name={props.name12} price={props.price} time={props.time}/>
            <AuctionCard name={props.name13} price={props.price} time={props.time}/>
            <AuctionCard name={props.name14} price={props.price} time={props.time}/>
            <AuctionCard name={props.name15} price={props.price} time={props.time}/>
		</div>
	)
}
export default AuctionCardRow;
