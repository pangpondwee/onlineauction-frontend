import nintendo_switch from '../pictures/nintendo-switch.jpeg'
const PaymentSummaryCard = (props) => {
  return (
    <div class="grey-box payment-summary-card">
      <h3>Summary</h3>
      <div>{props.itemName}</div>
      <div class="center-pic">
        <img src={nintendo_switch} alt="nintendo switch"></img>
      </div>

      <div>Auctioneer: {props.auctioneerName}</div>
      <hr></hr>
      <h3>Price: 2000 Baht</h3>
    </div>
  )
}

export default PaymentSummaryCard
