import { BrowserRouter, Routes, Route } from "react-router-dom"
import logo from "./logo.svg"
import "./App.css"
// Pages
import Layout from "./pages/Layout"
import Home from "./pages/Home"
import NoPage from "./pages/NoPage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import ForgetPassword from "./pages/ForgetPassword"
import ResetPassword from "./pages/ResetPassword"
import VerifyEmail from "./pages/VerifyEmail"
import PlaceAuction from './pages/PlaceAuction'
import Payment from './pages/Payment'
import Shipping from './pages/Shipping'
import BillingInfo from './pages/BillingInfo'
import ViewAuctioneer from "./pages/ViewAuctioneer"
import FAQ from "./pages/FAQ"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="verify-email" element={<VerifyEmail />} />
          <Route path="place-auction" element={<PlaceAuction />} />
          <Route path="payment" element={<Payment />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="billing-info" element={<BillingInfo />} />
          <Route path="view-auctioneer" element={<ViewAuctioneer />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
