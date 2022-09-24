import promptpayqr from '../pictures/PromptpayQR.png'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import '../css/Payment.css'
import { FilePond, registerPlugin } from 'react-filepond'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { postData, getData } from '../components/fetchData'
import Button from 'react-bootstrap/Button'

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
  // const { auctionId } = useParams()
  const auctionId = '632c09fb1e43a833d78ad748'

  const [itemName, setItemName] = useState()
  const [auctioneerName, setAuctioneerName] = useState()
  const [price, setPrice] = useState()
  const [productPicture, setProductPicture] = useState()
  const [fullName, setFullName] = useState()
  const [telephone, setTelephone] = useState()
  const [billingAddress, setBillingAddress] = useState()
  const [transactionDateTime, setTransactionDateTime] = useState()
  const [value, setValue] = useState()
  const uploadFileRef = useRef()
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    getData(`/payment/${auctionId}`)
      .then((res) => {
        console.log(res)
        setItemName(res.data.productName)
        setAuctioneerName(res.data.auctioneerName)
        setPrice(res.data.winningPrice)
        setProductPicture('base64:' + res.data.productPicture)
      })
      .catch((e) => console.log(e))
  }, [])

  const usePhoneNumberFromProfileHandler = () => {
    getData('/user/myprofile')
      .then((res) => {
        console.log(res.data.phoneNumber)
        setTelephone(res.data.phoneNumber)
      })
      .catch((e) => console.log(e))
  }
  const useBillingAddressFromProfileHandler = () => {
    getData('/user/myprofile')
      .then((res) => {
        console.log(res.data.address)
        setBillingAddress(res.data.address)
      })
      .catch((e) => console.log(e))
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const uploadedFile = uploadFileRef.current.getFiles()
    let billingInfo = {
      bidderNamre: fullName,
      phoneNumber: telephone,

      productPicture: uploadedFile.map((f) => {
        return f.getFileEncodeDataURL()
      }),
    }
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
                onChange={(event) => setFullName(event.target.value)}
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
                onChange={(event) => setTelephone(event.target.value)}
                placeholder="e.g. 0620000000"
              ></input>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={usePhoneNumberFromProfileHandler}
              >
                Use telephone number from profile
              </button>
            </div>
            <div className="form-input-field">
              <label htmlFor="billingAddress" className="form-label">
                BILLING ADDRESS
              </label>
              <textarea
                type="text"
                className="form-control"
                value={billingAddress}
                onChange={(event) => setBillingAddress(event.target.value)}
                placeholder="50 Ngamwongwan Rd, Chatuchak Bangkok 10900 Thailand"
              ></textarea>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={useBillingAddressFromProfileHandler}
              >
                Use billing address from profile
              </button>
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
                allowFileEncode={true}
                acceptedFileTypes={['image/png', 'image/jpeg']}
                ref={uploadFileRef}
                credits={false}
                required
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
                onChange={(event) => setTransactionDateTime(event.target.value)}
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
                onChange={(event) => setValue(event.target.value)}
                placeholder="e.g. 500"
              ></input>
            </div>
            <div>
              <Button variant="primary" onClick={() => handleShow}>
                Launch vertically centered modal
              </Button>
              <button type="button" className="btn btn-outline-primary">
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
          price={price}
          productPicture={productPicture}
        ></PaymentSummaryCard>
      </div>
    </div>
  )
}

export default Payment
