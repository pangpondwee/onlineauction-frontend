import OrderObj from '../components/OrderObj'
import AddressBox from '../components/AddressBox'
import TrackingCard from '../components/TrackingCard'
import SummaryCard from '../components/SummaryCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../components/fetchData'
import ProgressBar from '../components/ProgressBar'
import '../css/Payment.css'
import waitingForPaymentPic from '../pictures/waiting-for-payment.png'
import waitingForPaymentAuctioneer from '../pictures/waiting-for-payment-auctioneer.jpg'
import { useNavigate } from 'react-router-dom'
import failedOrder from '../pictures/failed-order.jpg'
import NoPage from './NoPage'

const MapShippingCompany = {
  KEX: 'Kerry Express',
  GRAB: 'GRAB Express',
  LLMV: 'Lalamove',
  NIM: ' Nim Express',
  LINE: 'Line Man',
  TNT: 'TNT Express',
  DHL: 'DHL Express',
  SCG: 'SCG Express',
  FLASH: 'Flash Express',
  SKT: 'Skootar',
  'J&T': 'J&T Express',
  BEST: 'Best Express',
  IEL: 'Inter Express Logistics',
  NINJA: 'Ninja Van',
}

const MapFailedReasons = {
  noBidders: 'there was no bidder on your auction',
  biddderPaymentDeadlineBroken: 'payment deadline has been exceeded',
  auctioneerShippingDeadlineBroken: 'shipping deadline has been exceeded',
  bidderDenyItemReceive: 'bidder denied the package',
}

const BillingInfo = () => {
  const { auctionId } = useParams()
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)

  const [orderDetails, setOrderDetails] = useState({
    auctionID: '',
    auctioneerDisplayname: '',
    auctioneerID: '',
    billingStatus: '',
    lastBid: '',
    productName: '',
    productPicture: '',
    isAuctioneer: '',
  })

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    phone: '',
  })

  const [shippingDetails, setShippingDetails] = useState({
    shippingCompany: '',
    trackingNumber: '',
    packagePicture: '',
  })

  const [failureCause, setFailureCause] = useState('')
  const [isAuctioneer, setIsAuctioneer] = useState(false)

  useEffect(() => {
    getData(`/billingInfo/${auctionId}`)
      .then((res) => {
        console.log(res)
        setOrderDetails({
          auctionID: auctionId,
          auctioneerDisplayname: res.data.auctioneerName,
          auctioneerID: res.data.auctioneerID,
          billingStatus: res.data.billingInfoStatus,
          lastBid: res.data.winningPrice,
          productName: res.data.productName,
          productPicture: res.data.productPicture,
          isAuctioneer: res.data.isAuctioneer,
        })
        setShippingAddress({
          name: res.data.bidderName,
          address: res.data.bidderAddress,
          phone: res.data.bidderPhoneNumber,
        })
        setShippingDetails({
          shippingCompany: res.data.shippingCompany,
          trackingNumber: res.data.trackingNumber,
          packagePicture: res.data.packagePicture,
        })
        setIsAuctioneer(res.data.isAuctioneer)
        if ('failureCause' in res.data) {
          setFailureCause(res.data.failureCause)
        }
      })
      .catch((e) => {
        console.log(e)
        setIsError(true)
      })
  }, [])

  if (isError) {
    return <NoPage />
  } else if (
    orderDetails.billingStatus === 'waitingForPayment' &&
    orderDetails.isAuctioneer === false
  ) {
    return (
      <div className="billing-info-page-nocard">
        <OrderObj data={orderDetails} type={isAuctioneer ? 'auction' : 'bid'} />
        <div className="billing-info-progress">
          <ProgressBar
            status={orderDetails.billingStatus}
            isAuctioneer={orderDetails.isAuctioneer}
          />
        </div>
        <div className="status-description">
          <img
            className="status-description-pic"
            src={waitingForPaymentPic}
            alt="waiting-payment"
          />
          <div className="status-description-text">
            We're waiting for your payment.
          </div>
          <button
            type="button"
            className="btn btn-primary status-description-btn"
            onClick={() => navigate(`/payment/${auctionId}`)}
          >
            Go to Payment Page
          </button>
        </div>
      </div>
    )
  } else if (
    orderDetails.billingStatus === 'waitingForShipping' &&
    orderDetails.isAuctioneer === false
  ) {
    return (
      <div className="billing-info-page">
        <div className="billing-info-order-grid">
          <OrderObj
            data={orderDetails}
            type={isAuctioneer ? 'auction' : 'bid'}
          />
        </div>
        <div className="billing-info-progress-grid">
          <ProgressBar
            status={orderDetails.billingStatus}
            isAuctioneer={orderDetails.isAuctioneer}
          />
        </div>
        <div className="billing-info-address-box-grid grey-box">
          <AddressBox
            name={shippingAddress.name}
            address={shippingAddress.address}
            phone={shippingAddress.phone}
          ></AddressBox>
        </div>
        <div className="billing-info-summary-card-grid grey-box">
          <SummaryCard
            bidPrice={orderDetails.lastBid}
            isAuctioneer={orderDetails.isAuctioneer}
          ></SummaryCard>
        </div>
        <div className="billing-info-tracking-card-grid grey-box">
          <TrackingCard
            status="waitingForShipping"
            isAuctioneer={orderDetails.isAuctioneer}
            shippingCompany={
              MapShippingCompany[shippingDetails.shippingCompany]
            }
            trackingNumber={shippingDetails.trackingNumber}
            packagePicture={shippingDetails.packagePicture}
          ></TrackingCard>
        </div>
      </div>
    )
  } else if (
    ((orderDetails.billingStatus === 'waitingForPayment' ||
      orderDetails.billingInfoStatus === 'waitingConfirmSlip') &&
      orderDetails.isAuctioneer === true) ||
    (orderDetails.billingStatus === 'waitingConfirmSlip' &&
      orderDetails.isAuctioneer === false)
  ) {
    return (
      <div className="billing-info-page-nocard">
        <OrderObj data={orderDetails} type={isAuctioneer ? 'auction' : 'bid'} />
        <div className="billing-info-progress">
          <ProgressBar
            status={orderDetails.billingStatus}
            isAuctioneer={orderDetails.isAuctioneer}
          />
        </div>
        <div className="status-description">
          <img
            className="status-description-pic"
            src={waitingForPaymentAuctioneer}
            alt="waiting-payment"
          />
          <div className="status-description-text">
            We're working on your order.
          </div>
        </div>
      </div>
    )
  } else if (
    orderDetails.billingStatus === 'waitingForShipping' &&
    orderDetails.isAuctioneer === true
  ) {
    return (
      <div className="billing-info-page">
        <div className="billing-info-order-grid">
          <OrderObj
            data={orderDetails}
            type={isAuctioneer ? 'auction' : 'bid'}
          />
        </div>
        <div className="billing-info-progress-grid">
          <ProgressBar
            status={orderDetails.billingStatus}
            isAuctioneer={orderDetails.isAuctioneer}
          />
        </div>
        <div className="billing-info-address-box-grid grey-box">
          <AddressBox
            name={shippingAddress.name}
            address={shippingAddress.address}
            phone={shippingAddress.phone}
          ></AddressBox>
        </div>
        <div className="billing-info-summary-card-grid grey-box">
          <SummaryCard
            bidPrice={orderDetails.lastBid}
            isAuctioneer={orderDetails.isAuctioneer}
          ></SummaryCard>
        </div>
        <div className="billing-info-tracking-card-grid grey-box">
          <TrackingCard
            status="waitingForShipping"
            isAuctioneer={true}
            auctionId={auctionId}
            shippingCompany={
              MapShippingCompany[shippingDetails.shippingCompany]
            }
            trackingNumber={shippingDetails.trackingNumber}
            packagePicture={shippingDetails.packagePicture}
          ></TrackingCard>
        </div>
      </div>
    )
  } else if (orderDetails.billingStatus === 'failed') {
    return (
      <div className="billing-info-page-nocard">
        <OrderObj data={orderDetails} type={isAuctioneer ? 'auction' : 'bid'} />
        <div className="status-description">
          <img
            className="status-description-pic"
            src={failedOrder}
            alt="failed-order"
          />
          <div className="status-description-text">
            <div>
              Your order has been canceled due to{' '}
              <span className="failed-reason">
                {MapFailedReasons[failureCause]}
              </span>
              .
            </div>
            <div>Please contact our admin for more information.</div>
            <div> We apologize for any inconvenience.</div>
          </div>
          <button
            type="button"
            className="btn btn-primary status-description-btn"
            onClick={() => window.open('mailto:ku.online.auction@gmail.com')}
          >
            Contact our admin
          </button>
        </div>
      </div>
    )
  } else {
    return (
      <div className="billing-info-page">
        <div className="billing-info-order-grid">
          <OrderObj
            data={orderDetails}
            type={isAuctioneer ? 'auction' : 'bid'}
          />
        </div>
        <div className="billing-info-progress-grid">
          <ProgressBar
            status={orderDetails.billingStatus}
            isAuctioneer={orderDetails.isAuctioneer}
          />
        </div>
        <div className="billing-info-address-box-grid grey-box">
          <AddressBox
            name={shippingAddress.name}
            address={shippingAddress.address}
            phone={shippingAddress.phone}
          ></AddressBox>
        </div>
        <div className="billing-info-summary-card-grid grey-box">
          <SummaryCard
            bidPrice={orderDetails.lastBid}
            isAuctioneer={orderDetails.isAuctioneer}
          ></SummaryCard>
        </div>
        <div className="billing-info-tracking-card-grid grey-box">
          <TrackingCard
            auctionID={auctionId}
            status={orderDetails.billingStatus}
            shippingCompany={
              MapShippingCompany[shippingDetails.shippingCompany]
            }
            isAuctioneer={orderDetails.isAuctioneer}
            trackingNumber={shippingDetails.trackingNumber}
            packagePicture={shippingDetails.packagePicture}
          ></TrackingCard>
        </div>
      </div>
    )
  }
}

export default BillingInfo
