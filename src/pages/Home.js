import AuctionCard from "../components/AuctionCard";
const Home = () =>{
	return (
		<>
		<p className="headHome">Welcome, Peeranat! Let’s see what you got...</p>
		<p className="detail">Your Recent Bids</p>
		<div className="test">
			<AuctionCard name="first" price="2000$" time="time" picture="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGx8ZW58MHx8MHx8&w=1000&q=80"/>
			<AuctionCard name="second" price="100$" time="time" picture="https://www.skipprichard.com/wp-content/uploads/2015/12/bigstock-D-Small-People-Newtons-Crad-65362909.jpg"/>
			<AuctionCard name="third" price="1000$" time="time" picture="https://images.pexels.com/photos/1459495/pexels-photo-1459495.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		<p className="detail">Recent Following List</p>
		<div className="test">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
			<AuctionCard name="d"/>
			<AuctionCard name="e"/>
		</div>
		</>
	)
}
export default Home;
