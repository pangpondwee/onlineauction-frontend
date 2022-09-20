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
    <div class="page-with-summary">
      <div class="form-section">
        <h1 class="header">Payment</h1>
        <form>
          <div class="form-heading1">BILLING INFO</div>
          <div class="sub-form">
            <div class="form-input-field">
              <label for="fullName" class="form-label">
                FULL NAME
              </label>
              <input
                type="text"
                class="form-control"
                id="inputFullName"
                placeholder="e.g. Peeranat Srisuthangkul"
              ></input>
            </div>
            <div class="form-input-field">
              <label for="telephone" class="form-label">
                TELEPHONE
              </label>
              <input
                type="text"
                class="form-control"
                id="inputTelephone"
                placeholder="e.g. 0620000000"
              ></input>
            </div>
            <div class="form-input-field">
              <label for="billingAddress" class="form-label">
                BILLING ADDRESS
              </label>
              <textarea
                type="text"
                class="form-control"
                id="inputBillingAddress"
                placeholder="50 Ngamwongwan Rd, Chatuchak Bangkok 10900 Thailand"
              ></textarea>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="useInformationFromProfile"
              ></input>
              <label class="form-check-label" for="useInformationFromProfile">
                Use billing information from profile
              </label>
            </div>
          </div>
          <div class="form-heading1">TRANSACTION INFO</div>
          <div class="sub-form">
            <div class="center-pic form-input-field">
              <img
                class="promptpayqrpic"
                src={promptpayqr}
                alt="promptpayqr"
              ></img>
            </div>
            <div class="form-input-field">
              <label for="uploadTransactionSlip" class="form-label">
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
            <div class="form-input-field">
              <label for="transactionDateTime" class="form-label">
                TRANSACTION DATE AND TIME
              </label>
              <input
                type="datetime-local"
                class="form-control"
                id="transactionDateTime"
              ></input>
            </div>
            <div class="form-input-field">
              <label for="value" class="form-label">
                VALUE
              </label>
              <input
                type="number"
                class="form-control"
                id="value"
                placeholder="e.g. 500"
              ></input>
            </div>
            <div>
              <button type="submit" class="btn btn-primary first-button">
                Proceed
              </button>
              <button type="submit" class="btn btn-outline-primary">
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div class="payment-summary-section">
        <PaymentSummaryCard
          itemName={itemName}
          auctioneerName={auctioneerName}
        ></PaymentSummaryCard>
      </div>
    </div>
  )
}

export default Payment
