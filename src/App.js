import { BrowserRouter, Routes, Route } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
// Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ViewAuctioneer from "./pages/ViewAuctioneer";
import FAQ from "./pages/FAQ";

function App() {
  return (
	  <BrowserRouter>
		  <Routes>
		  <Route path="/" element={<Layout />}>
			  <Route index element={<Home />} />
			  <Route path="view-auctioneer" element={<ViewAuctioneer />} />
			  <Route path="faq" element={<FAQ />} />
			  <Route path="*" element={<NoPage />} />
		  </Route>
		  </Routes>
	  </BrowserRouter>
  );
}

export default App;
