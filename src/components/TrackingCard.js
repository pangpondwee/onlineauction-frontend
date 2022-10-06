const TrackingCard = (props) => {
  return (
    <div className="grey-box">
      <div>Shipping</div>
      <div>Shipping company: {props.shippingCompany}</div>
      <div>Tracking Number: {props.trackingNumber}</div>
      <div>Package Picture</div>
      <div className="center-pic">
        <img
          className="package-picture"
          src={props.packagePicture}
          alt="package"
        ></img>
      </div>
    </div>
  )
}

export default TrackingCard
