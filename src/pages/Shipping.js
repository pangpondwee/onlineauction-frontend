import AddressBox from '../components/AddressBox'
// import Package from '../pictures/package.jpeg'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import { FilePond, registerPlugin } from 'react-filepond'
import PopupConfirmSubmit from '../components/PopupConfirmSubmit'
import { useState, useEffect, useRef } from 'react'
import { postData, getData } from '../components/fetchData'
import { useParams } from 'react-router-dom'

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

const Shipping = () => {
  const { auctionId } = useParams()

  const [modalShow, setModalShow] = useState(false)
  const [itemName, setItemName] = useState('')
  const [auctioneerName, setAuctioneerName] = useState('')
  const [price, setPrice] = useState('')
  const [productPicture, setProductPicture] = useState('')
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const uploadFileRef = useRef()
  const submitHandler = () => {}

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
    // getData(`/shipping/${auctionId}`)
    //   .then((res) => {
    //     console.log(res)
    //     setName(res.data.name)
    //     setAddress(res.data.address)
    //     setPhone(res.data.phone)
    //   })
    // .catch((e) => console.log(e))
    setName('Someone')
    setAddress('Some Address')
    setPhone('0620000000')
  }, [])
  return (
    <div className="page-with-summary">
      <div className="form-section">
        <h1 className="header">Shipping</h1>
        <form
          className="payment-form"
          onSubmit={(event) => {
            modalShow(true)
            event.preventDefault()
          }}
        >
          <div className="form">
            <div className="form-heading1">SHIPPING ADDRESS</div>
            <div className="sub-form">
              <AddressBox name={name} address={address} phone={phone} />
            </div>
            <div className="form-heading1">PAYMENT INFO</div>
            <div className="sub-form">
              <div className="form-input-field">
                <label htmlFor="bankAccount" className="form-label">
                  BANK ACCOUNT
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. 0718785888"
                  required
                ></input>
              </div>

              <div className="form-input-field">
                <label htmlFor="bankName" className="form-label">
                  BANK
                </label>
                <select
                  className="form-select form-control"
                  defaultValue={'Select a Bank'}
                  required
                >
                  <option value="Select a Bank" disabled>
                    Select a Bank
                  </option>
                  <option value="KTB">Krung Thai Bank (ธนาคารกรุงไทย)</option>
                  <option value="KBANK">Kasikornbank (ธนาคารกสิกรไทย)</option>
                  <option value="SCB">
                    Siam Commercial Bank (ธนาคารไทยพาณิชย์)
                  </option>
                  <option value="BBL">Bangkok Bank (ธนาคารกรุงเทพ)</option>
                  <option value="TTB">
                    TMBThanachat Bank (ธนาคารทหารไทยธนชาต)
                  </option>
                  <option value="ิBAY">Bank of Ayudhya (ธนาคารกรุงศรี)</option>
                  <option value="GSB">
                    Government Savings Bank (ธนาคารออมสิน)
                  </option>
                  <option value="CIMBT">
                    CIMB Thai Bank (ธนาคารซีไอเอ็มบีไทย)
                  </option>
                  <option value="UOB">
                    United Overseas Bank (Thai) (ธนาคารยูโอบี)
                  </option>
                  <option value="TISCO">Tisco Bank (ธนาคารทิสโก้ จำกัด)</option>
                  <option value="KKP">
                    Kiatnakin Phatra Bank (ธนาคารเกียรตินาคินภัทร)
                  </option>
                </select>
              </div>

              <div className="form-input-field">
                <label htmlFor="accountName" className="form-label">
                  ACCOUNT NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. Peeranat Srisuthangkul"
                  required
                ></input>
              </div>
            </div>
            <div className="form-heading1">SHIPPING INFO</div>
            <div className="sub-form">
              <div className="form-input-field">
                <label htmlFor="trackingNumber" className="form-label">
                  TRACKING NUMBER
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="e.g. ABCDEF123456"
                  required
                ></input>
              </div>

              <div className="form-input-field">
                <label htmlFor="shippingCompany" className="form-label">
                  SHIPPING COMPANY
                </label>
                <select
                  className="form-select form-control"
                  defaultValue={'Select a Shipping Company'}
                >
                  <option disabled>Select a Shipping Company</option>
                  <option value="thpost">Thailand Post</option>
                  <option value="kerry">Kerry Express</option>
                  <option value="scg">SCG Express</option>
                  <option value="dhl">DHL Express</option>
                  <option value="flash">Flash Express</option>
                  <option value="ิother">Other</option>
                </select>
              </div>

              <div className="form-input-field">
                <label htmlFor="uploadPackagePicture" className="form-label">
                  UPLOAD PACKAGE PICTURE
                </label>
                <FilePond
                  allowFileEncode={true}
                  acceptedFileTypes={['image/png', 'image/jpeg']}
                  ref={uploadFileRef}
                  credits={false}
                  required
                />
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

export default Shipping
