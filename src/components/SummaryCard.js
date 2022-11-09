import '../css/Payment.css'

const SummaryCard = (props) => {
  const serviceFee = (props.bidPrice * 2) / 100
  const total = props.bidPrice - serviceFee
  return (
    <div className="summary-card">
      <div className="summary-card-header">Summary</div>
      <div className="summary-card-price-section">
        <div className="summary-card-bidprice">Bid Price</div>
        <div className="summary-card-bidprice">
          {props.bidPrice.toLocaleString('en-US')} Baht
        </div>
      </div>
      <div
        className={`summary-card-price-section ${
          props.isAuctioneer ? '' : 'hidden'
        }`}
      >
        <div className="summary-card-bidprice">Service Fee 2%</div>
        <div className="summary-card-bidprice">
          - {serviceFee.toLocaleString('en-US')} Baht
        </div>
      </div>
      <div>
        <hr />
        <div className="summary-card-price-section">
          <div className="summary-card-price">Total</div>
          {props.isAuctioneer ? (
            <div className="summary-card-price">
              {total.toLocaleString('en-US')} Baht
            </div>
          ) : (
            <div className="summary-card-price">
              {props.bidPrice.toLocaleString('en-US')} Baht
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default SummaryCard
