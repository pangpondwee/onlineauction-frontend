import AuctionCard from "../components/AuctionCard";
const Home = () =>{
	return (
		<>
		<p className="headHome">Welcome, Peeranat! Let’s see what you got...</p>
		<p className="detail">Your Recent Bids</p>
		<div className="test">
			<AuctionCard name="first"/>
			<AuctionCard name="second"/>
			<AuctionCard name="c"/>
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
