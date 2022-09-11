import { BrowserRouter, Routes, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
// Pages
import Layout from "./pages/Layout";
import AccountLayout from "./pages/AccountLayout";
import MyBidLayout from "./pages/MyBidLayout";
import MyAuctionLayout from "./pages/MyAuctionLayout";
import Home from "./pages/Home";
import AccountPage from "./pages/AccountPage";
import MyReview from "./pages/MyReview";
import MyFollowing from "./pages/MyFollowing";
import NoPage from "./pages/NoPage";

function App() {
  return (
	  <BrowserRouter>
		  <Routes>
		  <Route path="/" element={<Layout />}>
			  <Route index element={<Home />} />
			  <Route path="account/" element={<AccountLayout/>}>
			  	<Route path="profile" element={<AccountPage/>} />
				<Route path="mybid/" element={<MyBidLayout/>}/>
				<Route path="myauction/" element={<MyAuctionLayout/>}/>
				<Route path="review" element={<MyReview/>} />
				<Route path="following" element={<MyFollowing/>} />
			  </Route>
			  <Route path="*" element={<NoPage />} />
		  </Route>
		  </Routes>
	  </BrowserRouter>
  );
}

export default App;
