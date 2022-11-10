import {Outlet} from "react-router-dom";
import AccountNav from "../components/AccountNav";

const AccountLayout = () => {
	return (
		<div className="main-account-page">
			<AccountNav />
			<Outlet/>
		</div>
	)
}
export default AccountLayout;