import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";

const Layout = () => {
	return (
		<>
			<Nav />
			<main className="m-4 p-3">
				<Outlet/>
			</main>
		</>
	)
}
export default Layout;
