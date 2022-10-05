const PaymentSummaryCard = (props) => {
  return (
    <div className="grey-box payment-summary-card">
      <div className="payment-summary-header">Summary</div>
      <div className="payment-summary-detail">{props.itemName}</div>
      <div className="center-pic payment-summary-pic-container">
        <img
          className="payment-summary-pic"
          src={props.productPicture}
          alt="item pic"
        ></img>
      </div>

      <div className="payment-summary-detail">
        Auctioneer: {props.auctioneerName}
      </div>
      <hr></hr>
      <div className="payment-summary-price">Price: {props.price} Baht</div>
    </div>
  )
}

export default PaymentSummaryCard
