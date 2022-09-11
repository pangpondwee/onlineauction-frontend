import {Outlet} from "react-router-dom";
import MyBidNav from "../components/MyBidNav";

const MyBidLayout = () => {
	return (
		<div>
			<MyBidNav/>
			<main>
				<Outlet/>
			</main>
		</div>
	)
}
export default MyBidLayout;