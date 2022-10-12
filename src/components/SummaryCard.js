import '../css/Payment.css'

const SummaryCard = (props) => {
  return (
    <div className="summary-card">
      <div className="summary-card-header">Summary</div>
      <div className="summary-card-bidprice">
        Bid Price {props.bidPrice} Baht
      </div>
      <div className="summary-card-total">
        <hr />
        Total {props.bidPrice} Baht
      </div>
    </div>
  )
}

export default SummaryCard
