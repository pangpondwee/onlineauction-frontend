import '../css/Payment.css'

const formatPhoneNumber = (phone) => {
  let phoneNumber = ''
  if (phone.length === 10) {
    //เบอร์มือถือ
    phoneNumber =
      phone.substring(0, 3) +
      '-' +
      phone.substring(3, 6) +
      '-' +
      phone.substring(6, 10)
  } else if (phone.length === 9 && phone.at(1) === '2') {
    //เบอร์บ้านกรุงเทพ
    phoneNumber =
      phone.substring(0, 2) +
      '-' +
      phone.substring(2, 5) +
      '-' +
      phone.substring(5, 9)
  } else if (phone.length === 9) {
    //เบอร์บ้านต่างจังหวัด
    phoneNumber =
      phone.substring(0, 3) +
      '-' +
      phone.substring(3, 6) +
      '-' +
      phone.substring(6, 9)
  } else {
    phoneNumber = phone
  }
  return phoneNumber
}

const AddressBox = (props) => {
  return (
    <div className="address-box">
      <div className="address-box-name">{props.name}</div>
      <div className="address-box-address">{props.address}</div>
      <div className="address-box-phone">
        Tel. {formatPhoneNumber(props.phone)}
      </div>
    </div>
  )
}

export default AddressBox
