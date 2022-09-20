import nintendo_switch from '../pictures/nintendo-switch.jpeg'
const PaymentSummaryCard = () => {
  return (
    <div class="grey-box payment-summary-card">
      <div>Summary</div>
      <div>Nintendo Switch</div>
      <div class="center-pic">
        <img src={nintendo_switch} alt="nintendo switch"></img>
      </div>

      <div>Auctioneer: Kong Pakkapol</div>
      <hr></hr>
      <div>Price: 2000 Baht</div>
    </div>
  )
}

export default PaymentSummaryCard
