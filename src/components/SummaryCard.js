const SummaryCard = (props) => {
  return (
    <div className="grey-box">
      <div>Bid Price {props.bidPrice} Baht</div>
      <hr></hr>
      <div>Total {props.bidPrice} Baht</div>
    </div>
  )
}

export default SummaryCard
