import auctionIcon from '../pictures/auction-end.png'
import waitingPayment from '../pictures/waiting-payment.png'
import waitingConfirmPayment from '../pictures/confirm-payment.png'
import waitingShipping from '../pictures/waiting-shipping.png'
import waitingDeliver from '../pictures/waiting-deliver.png'
import processingTransaction from '../pictures/processing-transaction.png'
import complete from '../pictures/complete.png'
import '../css/Payment.css'

const ProgressBar = (props) => {
  const auctioneerState = {
    waitingConfirmSlip: 2,
    waitingForShipping: 3,
    waitingForConfirm: 4,
    waitingAdminPayment: 5,
    completed: 6,
  }

  const bidderState = {
    waitingForPayment: 2,
    waitingConfirmSlip: 3,
    waitingForShipping: 4,
    waitingForConfirm: 5,
    completed: 6,
  }

  const currentState = props.isAuctioneer
    ? auctioneerState[props.status]
    : bidderState[props.status]

  return (
    <div>
      <div className="status-section">
        <div className="progress-container">
          <div className={`progress state${currentState}`} id="progress"></div>
          <div className="circle active">
            <img
              src={auctionIcon}
              className="progress-bar-icon"
              alt="auction-end"
            />
          </div>
          <div className={`circle state2 ${currentState >= 2 ? 'active' : ''}`}>
            <img
              src={waitingPayment}
              className="progress-bar-icon"
              alt="state2"
            />
          </div>
          <div className={`circle state3 ${currentState >= 3 ? 'active' : ''}`}>
            <img
              src={props.isAuctioneer ? waitingShipping : waitingConfirmPayment}
              className="progress-bar-icon"
              alt="state3"
            />
          </div>
          <div className={`circle state4 ${currentState >= 4 ? 'active' : ''}`}>
            <img
              src={props.isAuctioneer ? waitingDeliver : waitingShipping}
              className="progress-bar-icon"
              alt="state4"
            />
          </div>
          <div className={`circle state5 ${currentState >= 5 ? 'active' : ''}`}>
            <img
              src={props.isAuctioneer ? processingTransaction : waitingDeliver}
              className="progress-bar-icon"
              alt="state5"
            />
          </div>
          <div className={`circle state6 ${currentState >= 6 ? 'active' : ''}`}>
            <img src={complete} className="progress-bar-icon" alt="state6" />
          </div>
        </div>
      </div>
      <div className="progress-description">
        <div className="description-box active">Auction ends</div>
        <div
          className={`description-box state2 ${
            currentState >= 2 ? 'active' : ''
          }`}
        >
          {props.isAuctioneer
            ? "Waiting for bidder's payment"
            : 'Waiting for your payment'}
        </div>
        <div
          className={`description-box state3 ${
            currentState >= 3 ? 'active' : ''
          }`}
        >
          {props.isAuctioneer
            ? 'Waiting for you to ship the package'
            : 'Waiting for payment confirmation'}
        </div>
        <div
          className={`description-box state4 ${
            currentState >= 4 ? 'active' : ''
          }`}
        >
          {props.isAuctioneer
            ? 'Waiting for delivered'
            : 'Waiting for shipping'}
        </div>
        <div
          className={`description-box state5 ${
            currentState >= 5 ? 'active' : ''
          }`}
        >
          {props.isAuctioneer
            ? "We're processing your transaction"
            : 'Waiting for delivered'}
        </div>
        <div
          className={`description-box state6 ${
            currentState >= 6 ? 'active' : ''
          }`}
        >
          Completed
        </div>
      </div>
    </div>
  )
}
export default ProgressBar
