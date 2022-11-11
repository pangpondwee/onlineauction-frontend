import '../css/Payment.css'
import bidderWaitingForShipping from '../pictures/waiting-for-shipping-bidder.png'
import auctioneerWaitingForShipping from '../pictures/waiting-for-shipping-auctioneer.png'
import { useNavigate } from 'react-router-dom'
import PopupConfirm from './PopupConfirm'
import { fetchPicture } from './fetchData'

const TrackingCard = (props) => {
  const navigate = useNavigate()
  if (props.status === 'waitingForShipping' && props.isAuctioneer === false) {
    return (
      <div className="shipping-card-not-ready">
        <img
          className="wait-shipping-pic"
          src={bidderWaitingForShipping}
          alt="waiting-for-shipping"
        />
        <div className="wait-shipping-description">
          Auctioneer is preparing your package
        </div>
      </div>
    )
  } else if (
    props.status === 'waitingForShipping' &&
    props.isAuctioneer === true
  ) {
    return (
      <div className="shipping-card-not-ready">
        <img
          className="wait-shipping-pic"
          src={auctioneerWaitingForShipping}
          alt="waiting-for-shipping"
        />
        <div className="wait-shipping-description">
          If you've shipped your package, please provide us the shipping
          information.
        </div>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate(`/shipping/${props.auctionId}`)}
        >
          Go to Shipping Page
        </button>
      </div>
    )
  } else {
    return (
      <div className="shipping-card">
        <div className="shipping-header">Shipping Details</div>
        <div className="shipping-detail">
          <div>Shipping company: {props.shippingCompany}</div>
          <div>Tracking Number: {props.trackingNumber}</div>
        </div>
        <div className="shipping-header">Package Picture</div>
        <div className="center-pic">
          <img
            className="package-picture"
            src={props.packagePicture ? fetchPicture(props.packagePicture) : ""}
            alt="package"
          ></img>
        </div>
        <div className="center-button">
          {props.status === 'waitingForConfirm' &&
          props.isAuctioneer === false ? (
            <button
              type="button"
              className="btn btn-primary status-description-btn"
              data-bs-toggle="modal"
              data-bs-target="#confirmModal"
            >
              Confirm Recieve Package
            </button>
          ) : (
            <></>
          )}
        </div>
        {props.status === 'waitingForConfirm' ? (
          <PopupConfirm auctionID={props.auctionID} />
        ) : (
          <></>
        )}
      </div>
    )
  }
}

export default TrackingCard
