import '../css/Payment.css'

const AddressBox = (props) => {
  return (
    <div className="address-box">
      <div className="address-box-name">{props.name}</div>
      <div className="address-box-address">{props.address}</div>
      <div className="address-box-phone">Tel. {props.phone}</div>
    </div>
  )
}

export default AddressBox
