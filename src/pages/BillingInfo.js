import OrderObj from '../components/OrderObj'
import AddressBox from '../components/AddressBox'
import TrackingCard from '../components/TrackingCard'
import SummaryCard from '../components/SummaryCard'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getData from '../components/fetchData'

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

const BillingInfo = () => {
  const { auctionId } = useParams()

  const [orderDetails, setOrderDetails] = useState({
    auctionID: '',
    auctionStatus: '',
    auctioneerDisplayname: '',
    auctioneerID: '',
    billingStatus: '',
    lastBid: '',
    productName: '',
    productPicture: '',
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
      })
      .catch((e) => console.log(e))
  }, [])

  return (
    <div className="billing-info-page">
      <div className="billing-info-order-grid">
        <OrderObj data={orderDetails} type={isAuctioneer ? 'auction' : 'bid'} />
      </div>
      <div className="billing-info-address-box-grid grey-box">
        <AddressBox
          name={shippingAddress.name}
          address={shippingAddress.address}
          phone={shippingAddress.phone}
        ></AddressBox>
      </div>
      <div className="billing-info-tracking-card-grid grey-box">
        <TrackingCard
          shippingCompany={MapShippingCompany[shippingDetails.shippingCompany]}
          trackingNumber={shippingDetails.trackingNumber}
          packagePicture={shippingDetails.packagePicture}
        ></TrackingCard>
      </div>
      <div className="billing-info-summary-card-grid grey-box">
        <SummaryCard bidPrice={orderDetails.lastBid}></SummaryCard>
      </div>
    </div>
  )
}

export default BillingInfo
