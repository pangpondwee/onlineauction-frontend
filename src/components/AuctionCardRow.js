import {Link} from "react-router-dom";
import AuctionCard from "../components/AuctionCard";
import arrow_left from "../pictures/arrow_left.png";
import arrow_right from "../pictures/arrow_right.png";
import AuctionCardForRow from "./AuctionCardForRow";

const AuctionCardRow = (props) =>{
    console.log(props);
    let auctionCard_element = []
    for(let i=0;i<15;i++){
        auctionCard_element.push(
            <AuctionCardForRow key={i} name={props.data[i].name} price={props.data[i].price} picture={props.data[i].picture}/>
        )
    }
	return (
        <>
        <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            {auctionCard_element}
        </div>
        	
		{/* <div className="card-deck"> */}
        {/* <div className="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">
            <AuctionCard name={props.name1} price={props.price1} time={props.time1} picture={props.picture1}/>
            <AuctionCard name={props.name2} price={props.price2} time={props.time2} picture={props.picture2}/>
            <AuctionCard name={props.name3} price={props.price3} time={props.time3} picture={props.picture3}/>
            <AuctionCard name={props.name4} price={props.price4} time={props.time4} picture={props.picture4}/>
            <AuctionCard name={props.name5} price={props.price5} time={props.time5} picture={props.picture5}/>
            <AuctionCard name={props.name6} price={props.price6} time={props.time6} picture={props.picture6}/>
            <AuctionCard name={props.name7} price={props.price7} time={props.time7} picture={props.picture7}/>
            <AuctionCard name={props.name8} price={props.price8} time={props.time8} picture={props.picture8}/>
            <AuctionCard name={props.name9} price={props.price9} time={props.time9} picture={props.picture9}/>
            <AuctionCard name={props.name10} price={props.price10} time={props.time10} picture={props.picture10}/>
            <AuctionCard name={props.name11} price={props.price11} time={props.time11} picture={props.picture11}/>
            <AuctionCard name={props.name12} price={props.price12} time={props.time12} picture={props.picture12}/>
            <AuctionCard name={props.name13} price={props.price13} time={props.time13} picture={props.picture13}/>
            <AuctionCard name={props.name14} price={props.price14} time={props.time14} picture={props.picture14}/>
            <AuctionCard name={props.name15} price={props.price15} time={props.time15} picture={props.picture15}/>
		</div> */}
        {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <h1>First page</h1>
                    <br></br>        
                    <div className="d-block">            
                    <AuctionCard name={props.name1} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name2} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name3} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name4} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name5} price={props.price} time={props.time}/>
                    </div>
                </div>
                <div className="carousel-item">
                    <h1>Second</h1>
                    <br></br>
                    <AuctionCard name={props.name6} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name7} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name8} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name9} price={props.price} time={props.time}/>
                    <AuctionCard name={props.name10} price={props.price} time={props.time}/>
                </div>
                <div className="carousel-item ">
                    <h1>Third page</h1>
                    <br></br>
                    <div className="d-block">
                        <AuctionCard name={props.name11} price={props.price} time={props.time}/>
                        <AuctionCard name={props.name12} price={props.price} time={props.time}/>
                        <AuctionCard name={props.name13} price={props.price} time={props.time}/>
                        <AuctionCard name={props.name14} price={props.price} time={props.time}/>
                        <AuctionCard name={props.name15} price={props.price} time={props.time}/>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div> */}
        {/* <section id="slider">
            <div className="container">
                <div className="subcontainer">
                    <div className="slider-wrapper">
                        <div className="controller">
                            <div id="controls">
                                <button className="previous"><img src={arrow_left} className="button"></img></button>
                                <button className="next"><img src={arrow_right} className="button"></img></button>
                            </div>
                            <br></br>
                            <div className="my-slider">
                                <div>
                                    <div className="slide">
                                        <div className="slide-card">
                                            <AuctionCard name={props.name1} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name2} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name3} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name4} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name5} price={props.price} time={props.time}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slide">
                                        <div className="slide-card">
                                            <AuctionCard name={props.name1} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name2} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name3} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name4} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name5} price={props.price} time={props.time}/>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="slide">
                                        <div className="slide-card">
                                            <AuctionCard name={props.name1} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name2} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name3} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name4} price={props.price} time={props.time}/>
                                            <AuctionCard name={props.name5} price={props.price} time={props.time}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        
        </>
	)
}
export default AuctionCardRow;
