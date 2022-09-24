import promptpayqr from '../pictures/PromptpayQR.png'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import '../css/Payment.css'
import { FilePond, registerPlugin } from 'react-filepond'
import { useState } from 'react'

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
                id="inputFullName"
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
                id="inputTelephone"
                placeholder="e.g. 0620000000"
              ></input>
            </div>
            <div className="form-input-field">
              <label htmlFor="billingAddress" className="form-label">
                BILLING ADDRESS
              </label>
              <textarea
                type="text"
                className="form-control"
                id="inputBillingAddress"
                placeholder="50 Ngamwongwan Rd, Chatuchak Bangkok 10900 Thailand"
              ></textarea>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="useInformationFromProfile"
              ></input>
              <label
                className="form-check-label"
                htmlFor="useInformationFromProfile"
              >
                Use billing information from profile
              </label>
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
                // ref={uploadFileRef}
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
                id="transactionDateTime"
              ></input>
            </div>
            <div className="form-input-field">
              <label htmlFor="value" className="form-label">
                VALUE
              </label>
              <input
                type="number"
                className="form-control"
                id="value"
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
