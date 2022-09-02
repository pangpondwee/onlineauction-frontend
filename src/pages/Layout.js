import {Outlet, Link} from "react-router-dom";

const Layout = () => {
	return (
		<>
			<nav>
				<p>Hello there</p>
			</nav>
			<Outlet/>
		</>
	)
}
export default Layout;
