import nintendo_switch from '../pictures/nintendo-switch.jpeg'
const PaymentSummaryCard = (props) => {
  return (
    <div className="grey-box payment-summary-card">
      <h3>Summary</h3>
      <div>{props.itemName}</div>
      <div className="center-pic">
        <img src={props.productPicture} alt="item pic"></img>
      </div>

      <div>Auctioneer: {props.auctioneerName}</div>
      <hr></hr>
      <h3>Price: {props.price} Baht</h3>
    </div>
  )
}

export default PaymentSummaryCard
