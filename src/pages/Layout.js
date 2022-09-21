import {Outlet} from "react-router-dom";
import Nav from "../components/Nav";
import { useState,useEffect } from "react";

const Layout = () => {
	const [loggedIn,setloggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
	useEffect(()=>{
		localStorage.setItem("isLoggedIn",loggedIn);
		if(!loggedIn){
			localStorage.clear()
		}
	},[loggedIn]);
	return (
		<>
			<Nav loggedIn={loggedIn} setloggedIn={(x)=>{
				setloggedIn(x);
			}}/>
			<main className="m-4 p-3">
				<Outlet context={[loggedIn,setloggedIn]}/>
			</main>
		</>
	)
}
export default Layout;
