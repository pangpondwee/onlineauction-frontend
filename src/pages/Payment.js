//import promptpayqr from '../pictures/PromptpayQR.png'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import '../css/Payment.css'
import { FilePond, registerPlugin } from 'react-filepond'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { postData, getData } from '../components/fetchData'
import { generatePayload } from '../components/promptpay'
import { QRCodeSVG } from 'qrcode.react'
import PopupConfirmSubmit from '../components/PopupConfirmSubmit'

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

const PromptpayQR = (props) => {
  let payload = generatePayload(props.ppID, props.amount)
  return <QRCodeSVG value={payload} />
}

const Payment = () => {
  const { auctionId } = useParams()
  // const auctionId = '632c09fb1e43a833d78ad748'

  const [itemName, setItemName] = useState('')
  const [auctioneerName, setAuctioneerName] = useState('')
  const [price, setPrice] = useState('')
  const [productPicture, setProductPicture] = useState('')
  const [fullName, setFullName] = useState('')
  const [telephone, setTelephone] = useState('')
  const [billingAddress, setBillingAddress] = useState('')
  const [transactionDateTime, setTransactionDateTime] = useState('')
  const [value, setValue] = useState('')
  const uploadFileRef = useRef()
  const [modalShow, setModalShow] = useState(false)

  useEffect(() => {
    getData(`/payment/${auctionId}`)
      .then((res) => {
        console.log(res)
        setItemName(res.data.productName)
        setAuctioneerName(res.data.auctioneerName)
        setPrice(res.data.winningPrice)
        setProductPicture(res.data.productPicture)
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
  const submitHandler = () => {
    const uploadedFile = uploadFileRef.current.getFiles()
    let billingInfo = {
      bidderName: fullName,
      phoneNumber: telephone,
      bidderAddress: billingAddress,
      transferDate: String(new Date(transactionDateTime).getTime()),
      value: Number(value),
      slipPicture: uploadedFile.map((f) => {
        return f.getFileEncodeDataURL()
      }),
    }
    console.log(billingInfo)
    postData(`/payment/${auctionId}`, JSON.stringify(billingInfo)).then(
      (res) => {
        console.log(res)
      }
    )
  }

  return (
    <div className="page-with-summary">
      <div className="form-section">
        <h1 className="header">Payment</h1>
        <form
          className="payment-form"
          onSubmit={(event) => {
            setModalShow(true)
            event.preventDefault()
          }}
        >
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
                required
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
                required
              ></input>
              <button
                type="button"
                className="no-outline-btn"
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
                required
              ></textarea>
              <button
                type="button"
                className="no-outline-btn"
                onClick={useBillingAddressFromProfileHandler}
              >
                Use billing address from profile
              </button>
            </div>
          </div>
          <div className="form-heading1">TRANSACTION INFO</div>
          <div className="sub-form">
            <div className="center-pic form-input-field">
              <PromptpayQR ppID={'0909754062'} amount={price} />
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
                required
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
                required
              ></input>
            </div>
            <div>
              <button type="submit" className="btn btn-primary first-button">
                Submit
              </button>
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
      <PopupConfirmSubmit
        modalShow={modalShow}
        submitHandler={submitHandler}
        setModalShow={setModalShow}
      />
    </div>
  )
}

export default Payment
