import promptpayheader from '../pictures/promptpay-header.png'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import '../css/Payment.css'
import { FilePond, registerPlugin } from 'react-filepond'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { postData, getData } from '../components/fetchData'
import { generatePayload } from '../components/promptpay'
import { QRCodeSVG } from 'qrcode.react'
import { useNavigate } from 'react-router-dom'
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

  const [paymentDetails, setPaymentDetails] = useState({
    bidderName: '',
    phoneNumber: '',
    bidderAddress: '',
    transferDate: '',
    value: '',
    slipPicture: [],
  })
  const [itemDetails, setItemDetails] = useState({
    productName: '',
    auctioneerName: '',
    winningPrice: '',
    productPicture: '',
  })
  const [checked, setChecked] = useState(false)
  const [inputDisabled, setInputDisabled] = useState(false)

  const uploadFileRef = useRef()
  const [modalShow, setModalShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getData(`/payment/${auctionId}`)
      .then((res) => {
        console.log(res)
        setItemDetails(res.data)
      })
      .catch((e) => console.log(e))
  }, [])

  const getInformationFromProfileHandler = (checked) => {
    if (checked === true) {
      getData('/user/myprofile')
        .then((res) => {
          console.log(res)
          setPaymentDetails({
            ...paymentDetails,
            bidderName: res.data.displayName,
            phoneNumber: res.data.phoneNumber,
            bidderAddress: res.data.address,
          })
        })
        .catch((e) => console.log(e))
    } else {
      setPaymentDetails({
        ...paymentDetails,
        bidderName: '',
        phoneNumber: '',
        bidderAddress: '',
      })
    }
  }

  const submitHandler = () => {
    const uploadedFile = uploadFileRef.current.getFiles()

    let billingInfo = {
      ...paymentDetails,
      transferDate: String(new Date(paymentDetails.transferDate).getTime()),
      value: Number(paymentDetails.value),
      slipPicture: uploadedFile.map((f) => {
        return f.getFileEncodeDataURL()
      }),
    }
    postData(`/payment/${auctionId}`, JSON.stringify(billingInfo)).then(
      (res) => {
        console.log(billingInfo)
        console.log(res)
        navigate('/account/myorder')
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
          <div className="form-heading1">SHIPPING INFO</div>
          <div className="sub-form">
            <div className="form-input-field">
              <label htmlFor="fullName" className="form-label">
                RECIPIENT NAME
              </label>
              <input
                type="text"
                className="form-control"
                value={paymentDetails.bidderName}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    bidderName: e.target.value,
                  })
                }
                placeholder="e.g. Peeranat Srisuthangkul"
                disabled={inputDisabled}
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
                value={paymentDetails.phoneNumber}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="e.g. 0620000000"
                disabled={inputDisabled}
                required
              ></input>
            </div>
            <div className="form-input-field">
              <label htmlFor="billingAddress" className="form-label">
                SHIPPING ADDRESS
              </label>
              <textarea
                type="text"
                className="form-control"
                value={paymentDetails.bidderAddress}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    bidderAddress: e.target.value,
                  })
                }
                placeholder="50 Ngamwongwan Rd, Chatuchak Bangkok 10900 Thailand"
                disabled={inputDisabled}
                required
              ></textarea>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                checked={checked}
                onChange={(e) => {
                  setChecked(!checked)
                  setInputDisabled(!checked)
                  getInformationFromProfileHandler(!checked)
                  console.log(e.target.checked)
                }}
              />
              <label className="form-check-label">
                Use information from profile
              </label>
            </div>
          </div>
          <div className="form-heading1">TRANSACTION INFO</div>
          <div className="sub-form">
            <div className="form-input-field promptpay">
              <img
                className="promptpay-header"
                src={promptpayheader}
                alt="promptpay"
              />
              <PromptpayQR
                ppID={'0909754062'}
                amount={itemDetails.winningPrice}
              />
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
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    transferDate: e.target.value,
                  })
                }
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
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    value: e.target.value,
                  })
                }
                placeholder="e.g. 500"
                required
              ></input>
            </div>
            <div>
              <button type="submit" className="btn btn-primary first-button">
                Proceed
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
          itemName={itemDetails.productName}
          auctioneerName={itemDetails.auctioneerName}
          price={itemDetails.winningPrice}
          productPicture={itemDetails.productPicture}
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
