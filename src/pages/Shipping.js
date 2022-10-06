import AddressBox from '../components/AddressBox'
// import Package from '../pictures/package.jpeg'
import PaymentSummaryCard from '../components/PaymentSummaryCard'
import { FilePond, registerPlugin } from 'react-filepond'
import PopupConfirmSubmit from '../components/PopupConfirmSubmit'
import { useState, useEffect, useRef } from 'react'
import { postData, getData } from '../components/fetchData'
import { useParams, useNavigate } from 'react-router-dom'

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

const Shipping = () => {
  const { auctionId } = useParams()

  const [shippingDetails, setShippingDetails] = useState({
    bankAccountNO: '',
    bankName: '',
    bankAccountName: '',
    trackingNumber: '',
    shippingCompany: '',
    packagePicture: '',
  })

  const [itemDetails, setItemDetails] = useState({
    productName: '',
    auctioneerName: '',
    winningPrice: '',
    productPicture: '',
  })

  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    address: '',
    phone: '',
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
      .catch((e) => console.log(e))
    getData(`/billingInfo/${auctionId}`)
      .then((res) => {
        console.log(res)
        setShippingAddress({
          ...shippingAddress,
          name: res.data.bidderName,
          address: res.data.bidderAddress,
          phone: res.data.bidderPhoneNumber,
        })
      })
      .catch((e) => console.log(e))
    setShippingAddress({
      name: 'Someone',
      address: 'Some Address',
      phone: '0620000000',
    })
  }, [])

  const submitHandler = () => {
    const uploadedFile = uploadFileRef.current.getFiles()

    let shippingInfo = {
      ...shippingDetails,
      packagePicture: uploadedFile.map((f) => {
        return f.getFileEncodeDataURL()
      })[0],
    }
    postData(
      `/shipping/${auctionId}/shipping`,
      JSON.stringify(shippingInfo)
    ).then((res) => {
      console.log(shippingInfo)
      console.log(res)
      navigate('/account/myorder?list=bid?type=all')
    })
  }

  return (
    <div className="page-with-summary">
      <div className="form-section">
        <h1 className="header">Shipping</h1>
        <form
          className="payment-form"
          onSubmit={(event) => {
            setModalShow(true)
            event.preventDefault()
          }}
        >
          <div className="form">
            <div className="form-heading1">SHIPPING ADDRESS</div>
            <div className="sub-form">
              <div className="grey-box">
                <AddressBox
                  name={shippingAddress.name}
                  address={shippingAddress.address}
                  phone={shippingAddress.phone}
                />
              </div>
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
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      bankAccountNO: e.target.value,
                    })
                  }
                  required
                ></input>
              </div>

              <div className="form-input-field">
                <label htmlFor="bankName" className="form-label">
                  BANK
                </label>
                <select
                  className="form-select form-control"
                  defaultValue={''}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      bankName: e.target.value,
                    })
                  }
                  required
                >
                  <option value="" disabled>
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
                  <option value="ICB">
                    Industrial and Commercial Bank of China Limited
                    (ธนาคารพาณิชย์อุตสาหกรรมแห่งประเทศจีน)
                  </option>
                  <option value="LH">
                    Land & Houses Bank (ธนาคารแลนด์ แอนด์ เฮ้าส์)
                  </option>
                  <option value="SCT">
                    Standard Chartered Bank (ธนาคารสแตนดาร์ดชาร์เตอร์ด)
                  </option>
                  <option value="CITI">Citibank (ธนาคารซิตี้แบงก์)</option>
                  <option value="GHB">
                    Government Housing Bank (ธนาคารอาคารสงเคราะห์)
                  </option>
                  <option value="BAAC">
                    Bank for Agriculture and Agricultural Cooperatives
                    (ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร)
                  </option>
                  <option value="IBT">
                    Islamic Bank of Thailand (ธนาคารอิสลามแห่งประเทศไทย)
                  </option>
                  <option value="TCRB">
                    The Thai Credit Retail Bank (ธนาคารไทยเครดิต เพื่อรายย่อย)
                  </option>
                  <option value="HSBC">HSBC BANK (เอชเอสบีซี โฮลดิ้งส์)</option>
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
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      bankAccountName: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      trackingNumber: e.target.value,
                    })
                  }
                  required
                ></input>
              </div>

              <div className="form-input-field">
                <label htmlFor="shippingCompany" className="form-label">
                  SHIPPING COMPANY
                </label>
                <select
                  className="form-select form-control"
                  defaultValue={''}
                  onChange={(e) =>
                    setShippingDetails({
                      ...shippingDetails,
                      shippingCompany: e.target.value,
                    })
                  }
                  required
                >
                  <option value="" disabled>
                    Select a Shipping Company
                  </option>
                  <option value="KEX">Kerry Express</option>
                  <option value="GRAB">GRAB Express</option>
                  <option value="LLMV">Lalamove</option>
                  <option value="NIM">Nim Express</option>
                  <option value="LINE">Line Man</option>
                  <option value="TNT">TNT Express</option>
                  <option value="DHL">DHL Express</option>
                  <option value="SCG">SCG Express</option>
                  <option value="FLASH">Flash Express</option>
                  <option value="SKT">Skootar</option>
                  <option value="J&T">J&T Express</option>
                  <option value="BEST">Best Express</option>
                  <option value="IEL">Inter Express Logistics</option>
                  <option value="NINJA">Ninja Van</option>
                </select>
              </div>

              <div className="form-input-field">
                <label htmlFor="uploadPackagePicture" className="form-label">
                  UPLOAD PACKAGE PICTURE
                </label>
                <FilePond
                  allowFileEncode={true}
                  acceptedFileTypes={['image/png', 'image/jpeg']}
                  imageResizeTargetWidth={1000}
                  imageResizeTargetHeight={1000}
                  imageResizeMode="contain"
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

export default Shipping
