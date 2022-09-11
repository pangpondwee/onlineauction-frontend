import {Outlet} from "react-router-dom";
import AccountNav from "../components/AccountNav";

const AccountLayout = () => {
	return (
		<div className="main-account-page">
			<AccountNav />
			<main>
				<Outlet/>
			</main>
		</div>
	)
}
export default AccountLayout;