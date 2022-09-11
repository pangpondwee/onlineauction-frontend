import {Outlet} from "react-router-dom";
import MyAuctionNav from "../components/MyAuctionNav";

const MyAuctionLayout = () => {
	return (
		<div>
			<MyAuctionNav/>
			<main>
				<Outlet/>
			</main>
		</div>
	)
}
export default MyAuctionLayout;