const AddressBox = (props) => {
  return (
    <div className="grey-box address-box">
      <div>{props.name}</div>
      <div>{props.address}</div>
      <div>Tel. {props.phone}</div>
    </div>
  )
}

export default AddressBox
