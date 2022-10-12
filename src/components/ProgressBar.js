import auctionIcon from '../pictures/auction-end.png'
import waitingPayment from '../pictures/waiting-payment.png'
import waitingConfirmPayment from '../pictures/confirm-payment.png'
import waitingShipping from '../pictures/waiting-shipping.png'
import waitingDeliver from '../pictures/waiting-deliver.png'
import complete from '../pictures/complete.png'

const ProgressBar = (props) => {
  let State = {
    waitingForPayment: 2,
    waitingConfirmSlip: 3,
    waitingForShipping: 4,
    waitingForConfirm: 5,
    completed: 6,
  }
  let currentState = State[props.status]
  return (
    <div>
      <div className="status-section">
        <div className="progress-container">
          <div className={`progress ${props.status}`} id="progress"></div>
          <div className="circle active">
            <img
              src={auctionIcon}
              className="progress-bar-icon"
              alt="auction-end"
            />
          </div>
          <div
            className={`circle waitingForPayment ${
              currentState >= 2 ? 'active' : ''
            }`}
          >
            <img
              src={waitingPayment}
              className="progress-bar-icon"
              alt="waitin-payment"
            />
          </div>
          <div
            className={`circle waitingConfirmSlip ${
              currentState >= 3 ? 'active' : ''
            }`}
          >
            <img
              src={waitingConfirmPayment}
              className="progress-bar-icon"
              alt="waiting-confirm-payment"
            />
          </div>
          <div
            className={`circle waitingForShipping ${
              currentState >= 4 ? 'active' : ''
            }`}
          >
            <img
              src={waitingShipping}
              className="progress-bar-icon"
              alt="waiting-shipping"
            />
          </div>
          <div
            className={`circle waitingForConfirm ${
              currentState >= 5 ? 'active' : ''
            }`}
          >
            <img
              src={waitingDeliver}
              className="progress-bar-icon"
              alt="waiting-deliver"
            />
          </div>
          <div
            className={`circle completed ${currentState >= 6 ? 'active' : ''}`}
          >
            <img src={complete} className="progress-bar-icon" alt="complete" />
          </div>
        </div>
      </div>
      <div className="progress-description">
        <div className="description-box active">Auction ends</div>
        <div
          className={`description-box waitingForPayment ${
            currentState >= 2 ? 'active' : ''
          }`}
        >
          Waiting for your payment
        </div>
        <div
          className={`description-box waitingConfirmSlip ${
            currentState >= 3 ? 'active' : ''
          }`}
        >
          Waiting to confirm your payment
        </div>
        <div
          className={`description-box waitingForShipping ${
            currentState >= 4 ? 'active' : ''
          }`}
        >
          Waiting for shipping
        </div>
        <div
          className={`description-box waitingForConfirm ${
            currentState >= 5 ? 'active' : ''
          }`}
        >
          Waiting for delivered
        </div>
        <div
          className={`description-box completed ${
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
