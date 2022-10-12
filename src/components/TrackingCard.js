import '../css/Payment.css'

const TrackingCard = (props) => {
  return (
    <div className="shipping-card">
      <div className="shipping-header">Shipping Details</div>
      <div className="shipping-detail">
        <div>Shipping company: {props.shippingCompany}</div>
        <div>Tracking Number: {props.trackingNumber}</div>
      </div>
      <div className="shipping-header">Package Picture</div>
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
