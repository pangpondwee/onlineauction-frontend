import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
// Pages
import Layout from './pages/Layout'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import SignUp from './pages/SignUp'
import ForgetPassword from './pages/ForgetPassword'
import ResetPassword from './pages/ResetPassword'
import VerifyEmail from './pages/VerifyEmail'
import PlaceAuction from './pages/PlaceAuction'
import Payment from './pages/Payment'
import Shipping from './pages/Shipping'
import BillingInfo from './pages/BillingInfo'
import ViewAuctioneer from './pages/ViewAuctioneer'
import FAQ from './pages/FAQ'
import AccountLayout from './pages/AccountLayout'
import AccountPage from './pages/AccountPage'
import AccountEdit from './pages/AccountEdit'
import MyOrder from './pages/MyOrder'
import MyPayment from './pages/MyPayment'
import MyReview from './pages/MyReview'
import MyFollowing from './pages/MyFollowing'
import Auction from './pages/Auction'
import Search from './pages/Search'
import AdminLayout from './pages/AdminLayout'
import AdminBlacklist from './pages/AdminBlacklist'
import AdminConfirmDelivery from './pages/AdminConfirmDelivery'
import AdminConfirmPayment from './pages/AdminConfirmPayment'
import AdminReport from './pages/AdminReport'
import SignupSuccess from './pages/SignupSuccess'
import ForgetSuccess from './pages/ForgetSuccess'
import ResetSuccess from './pages/ResetSuccess'
import AdminConfirmRefund from './pages/AdminConfirmRefund'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signup-success" element={<SignupSuccess />} />
          <Route path="auction/:auctionId" element={<Auction />} />
          <Route path="place-auction" element={<PlaceAuction />} />
          <Route path="payment/:auctionId" element={<Payment />} />
          <Route path="shipping/:auctionId" element={<Shipping />} />
          <Route path="billing-info/:auctionId" element={<BillingInfo />} />
          <Route path="auctioneer/:auctioneerID" element={<ViewAuctioneer />} />
          {/* <Route path="view-auctioneer" element={<ViewAuctioneer />} /> */}
          <Route path="faq" element={<FAQ />} />
          <Route path="search" element={<Search />} />
          <Route path="search/:pageNumber" element={<Search />} />
          <Route path="account/verify/:userId" element={<VerifyEmail />} />
          <Route path="forget-password" element={<ForgetPassword />} />
          <Route path="forget-success" element={<ForgetSuccess />} />
          <Route path="reset-success" element={<ResetSuccess />} />
          <Route path="account/reset-password/:userId" element={<ResetPassword />} />
          <Route path="account" element={<AccountLayout />}>
            <Route path="profile" element={<AccountPage />} />
            <Route path="edit" element={<AccountEdit />} />
            <Route path="myorder" element={<MyOrder />} />
            <Route path="mypayment" element={<MyPayment />} />
            <Route path="review" element={<MyReview />} />
            <Route path="following" element={<MyFollowing />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            <Route path="blacklist" element={<AdminBlacklist />} />
            <Route path="report" element={<AdminReport />} />
            <Route path="confirmpayment" element={<AdminConfirmPayment />} />
            <Route path="confirmdelivery" element={<AdminConfirmDelivery />} />
            <Route path="confirmrefund" element={<AdminConfirmRefund />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
