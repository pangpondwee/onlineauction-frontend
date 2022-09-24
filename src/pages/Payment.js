import promptpayqr from '../pictures/PromptpayQR.png'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import '../css/Payment.css'
import { FilePond, registerPlugin } from 'react-filepond'
import { useState, useEffect } from 'react'
import { postData, getData } from '../components/fetchData'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Install plugin
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType
)

const Payment = () => {
  const [itemName, setItemName] = useState('Item Name')
  const [auctioneerName, setAuctioneerName] = useState('Auctioneer Name')
  const [fullName, setFullName] = useState()
  const [telephone, setTelephone] = useState()
  const [billingAddress, setBillingAddress] = useState()
  const [encodedTransactionSlip, setEncodedTransactionSlip] = useState([])
  const [transactionDateTime, setTransactionDateTime] = useState()
  const [value, setValue] = useState()

  useEffect(() => {
    const res = getData('http://13.250.98.9/api/payment/23484udsfuf3r9ur989fu')
      .then((res) => {
        console.log(res)
      })
      .catch((e) => console.log(e))
  }, [])

  const usePhoneNumberFromProfileHandler = () => {
    const res = getData('http://13.250.98.9/api/user/myprofile')
      .then((res) => {
        console.log(res.data.phoneNumber)
      })
      .catch((e) => console.log(e))
    setTelephone(res.data.phoneNumber)
  }
  const useBillingAddressFromProfileHandler = () => {
    const res = getData('http://13.250.98.9/api/user/myprofile')
      .then((res) => {
        console.log(res.data.address)
      })
      .catch((e) => console.log(e))
    setBillingAddress(res.data.address)
  }

  return (
    <div className="page-with-summary">
      <div className="form-section">
        <h1 className="header">Payment</h1>
        <form className="payment-form">
          <div className="form-heading1">BILLING INFO</div>
          <div className="sub-form">
            <div className="form-input-field">
              <label htmlFor="fullName" className="form-label">
                FULL NAME
              </label>
              <input
                type="text"
                className="form-control"
                value={fullName}
                onChange={setFullName}
                placeholder="e.g. Peeranat Srisuthangkul"
              ></input>
            </div>
            <div className="form-input-field">
              <label htmlFor="telephone" className="form-label">
                TELEPHONE
              </label>
              <input
                type="text"
                className="form-control"
                value={telephone}
                onChange={setTelephone}
                placeholder="e.g. 0620000000"
              ></input>
              <div onClick={usePhoneNumberFromProfileHandler}>
                Use telephone number from profile
              </div>
            </div>
            <div className="form-input-field">
              <label htmlFor="billingAddress" className="form-label">
                BILLING ADDRESS
              </label>
              <textarea
                type="text"
                className="form-control"
                value={billingAddress}
                placeholder="50 Ngamwongwan Rd, Chatuchak Bangkok 10900 Thailand"
              ></textarea>
            </div>
          </div>
          <div className="form-heading1">TRANSACTION INFO</div>
          <div className="sub-form">
            <div className="center-pic form-input-field">
              <img
                className="promptpayqrpic"
                src={promptpayqr}
                alt="promptpayqr"
              ></img>
            </div>
            <div className="form-input-field">
              <label htmlFor="uploadTransactionSlip" className="form-label">
                UPLOAD TRANSACTION SLIP
              </label>
              <FilePond
                allowMultiple={false}
                allowFileEncode={true}
                acceptedFileTypes={['image/png', 'image/jpeg']}
                credits={false}
              />
            </div>
            <div className="form-input-field">
              <label htmlFor="transactionDateTime" className="form-label">
                TRANSACTION DATE AND TIME
              </label>
              <input
                type="datetime-local"
                className="form-control"
                value={transactionDateTime}
              ></input>
            </div>
            <div className="form-input-field">
              <label htmlFor="value" className="form-label">
                VALUE
              </label>
              <input
                type="number"
                className="form-control"
                value={value}
                placeholder="e.g. 500"
              ></input>
            </div>
            <div>
              <button type="submit" className="btn btn-primary first-button">
                Proceed
              </button>
              <button type="submit" className="btn btn-outline-primary">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="payment-summary-section">
        <PaymentSummaryCard
          itemName={itemName}
          auctioneerName={auctioneerName}
        ></PaymentSummaryCard>
      </div>
    </div>
  )
}

export default Payment
