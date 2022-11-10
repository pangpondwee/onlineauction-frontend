import promptpayheader from '../pictures/promptpay-header.png'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import '../css/Payment.css'
import { FilePond, registerPlugin } from 'react-filepond'
import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { postData, getData } from '../components/fetchData'
import { generatePayload } from '../components/promptpay'
import { QRCodeSVG } from 'qrcode.react'
import PopupConfirmSubmit from '../components/PopupConfirmSubmit'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

// Install plugin
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFileEncode from 'filepond-plugin-file-encode'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImageTransform from 'filepond-plugin-image-transform'
import FilePondPluginImageResize from 'filepond-plugin-image-resize'

registerPlugin(
  FilePondPluginFileEncode,
  FilePondPluginImagePreview,
  FilePondPluginFileValidateType,
  FilePondPluginImageTransform,
  FilePondPluginImageResize
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
    transferDate: new Date(),
    value: '',
    slipPicture: '',
  })
  const [itemDetails, setItemDetails] = useState({
    productName: '',
    auctioneerName: '',
    winningPrice: '',
    productPicture: '',
  })

  const uploadFileRef = useRef()
  const [modalShow, setModalShow] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    getData(`/payment/${auctionId}`)
      .then((res) => {
        console.log(res)
        setItemDetails(res.data)
      })
      .catch((e) => {
        console.log(e)
        navigate('/404')
      })
  }, [])

  const getInformationFromProfileHandler = () => {
    getData('/user/myprofile')
      .then((res) => {
        console.log(res)
        setPaymentDetails({
          ...paymentDetails,
          bidderName: 'displayName' in res.data ? res.data.displayName : '',
          phoneNumber: 'phoneNumber' in res.data ? res.data.phoneNumber : '',
          bidderAddress: 'address' in res.data ? res.data.address : '',
        })
        console.log(paymentDetails)
      })
      .catch((e) => console.log(e))
  }

  const submitHandler = () => {
    const uploadedFile = uploadFileRef.current.getFiles()

    let billingInfo = {
      ...paymentDetails,
      transferDate: String(new Date(paymentDetails.transferDate).getTime()),
      value: Number(paymentDetails.value),
      slipPicture: uploadedFile.map((f) => {
        return f.getFileEncodeDataURL()
      })[0],
    }
    // console.log(billingInfo)
    postData(`/payment/${auctionId}`, JSON.stringify(billingInfo)).then(
      (res) => {
        console.log(billingInfo)
        console.log(res)
        navigate('/account/myorder?list=bid&type=pay')
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
                placeholder="e.g. John Doe"
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
                pattern="[0-9]+"
                value={paymentDetails.phoneNumber}
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    phoneNumber: e.target.value,
                  })
                }
                placeholder="e.g. 0621234567"
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
                placeholder="e.g. 50 Ngamwongwan Rd, Chatuchak Bangkok 10900 Thailand"
                required
              ></textarea>
            </div>
            <button
              type="button"
              className="no-outline-btn"
              onClick={getInformationFromProfileHandler}
            >
              Use information from profile
            </button>
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
                imageTransformOutputQuality={50}
                imageTransformOutputQualityMode="always"
                acceptedFileTypes={['image/png', 'image/jpeg']}
                imageResizeTargetWidth={1000}
                imageResizeTargetHeight={1000}
                imageResizeMode="contain"
                ref={uploadFileRef}
                credits={false}
                required
              />
            </div>
            <div className="form-input-field">
              <label htmlFor="transactionDateTime" className="form-label">
                TRANSACTION DATE AND TIME
              </label>
              {/* <input
                type="datetime-local"
                className="form-control"
                onChange={(e) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    transferDate: e.target.value,
                  })
                }
                required
              ></input> */}
              <ReactDatePicker
                className="form-control"
                selected={paymentDetails.transferDate}
                onChange={(date) =>
                  setPaymentDetails({
                    ...paymentDetails,
                    transferDate: date,
                  })
                }
                timeIntervals={10}
                showTimeSelect
                dateFormat="d MMMM yyyy HH:mm"
                timeFormat="HH:mm"
                required
              />
            </div>
            <div className="form-input-field">
              <label htmlFor="value" className="form-label">
                VALUE
              </label>
              <div className="input-field-flex">
                <input
                  type="number"
                  className="form-control"
                  min={1}
                  onChange={(e) =>
                    setPaymentDetails({
                      ...paymentDetails,
                      value: e.target.value,
                    })
                  }
                  placeholder="e.g. 500"
                  required
                ></input>
                <div className="currency">
                  <div>BAHT</div>
                </div>
              </div>
            </div>
            <div className="form-submit-btn">
              <button type="submit" className="btn btn-primary first-button">
                Proceed
              </button>
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => navigate('/account/myorder?list=bid&type=pay')}
              >
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
