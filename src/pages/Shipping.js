import AddressBox from '../components/Address-box'
import Package from '../pictures/package.jpeg'

const Shipping = () => {
  return (
    <div>
      <h1 class="header">Shipping</h1>
      <form>
        <div class="form">
          <div class="formHeading1">SHIPPING ADDRESS</div>
          <div class="subForm col-5">
            <AddressBox></AddressBox>
          </div>
          <div class="formHeading1">PAYMENT INFO</div>
          <div class="subForm col-5">
            <div class="mb-3">
              <label for="bankAccount" class="form-label">
                BANK ACCOUNT
              </label>
              <input
                type="text"
                class="form-control"
                id="inputBankAccount"
                placeholder="e.g. 0718785888"
              ></input>
            </div>

            <div class="mb-3">
              <label for="bankName" class="form-label">
                BANK
              </label>
              <select class="form-select form-control">
                <option selected>Select a Bank</option>
                <option value="ktb">Krung Thai Bank (ธนาคารกรุงไทย)</option>
                <option value="kbank">Kasikornbank (ธนาคารกสิกรไทย)</option>
                <option value="scb">
                  Siam Commercial Bank (ธนาคารไทยพาณิชย์)
                </option>
                <option value="bbl">Bangkok Bank (ธนาคารกรุงเทพ)</option>
                <option value="ttb">
                  TMBThanachat Bank (ธนาคารทหารไทยธนชาต)
                </option>
                <option value="ิbay">Bank of Ayudhya (ธนาคารกรุงศรี)</option>
                <option value="gsb">
                  Government Savings Bank (ธนาคารออมสิน)
                </option>
                <option value="cimb">
                  CIMB Thai Bank (ธนาคารซีไอเอ็มบีไทย)
                </option>
                <option value="uob">
                  United Overseas Bank (Thai) (ธนาคารยูโอบี)
                </option>
                <option value="tisco">Tisco Bank (ธนาคารทิสโก้ จำกัด)</option>
                <option value="kkp">
                  Kiatnakin Phatra Bank (ธนาคารเกียรตินาคินภัทร)
                </option>
              </select>
            </div>

            <div class="mb-3">
              <label for="accountName" class="form-label">
                ACCOUNT NAME
              </label>
              <input
                type="text"
                class="form-control"
                id="inputAccountName"
                placeholder="e.g. Peeranat Srisuthangkul"
              ></input>
            </div>
          </div>
          <div class="formHeading1">SHIPPING INFO</div>
          <div class="subForm col-5">
            <div class="mb-3">
              <label for="trackingNumber" class="form-label">
                TRACKING NUMBER
              </label>
              <input
                type="text"
                class="form-control"
                id="inputTrackingNumber"
                placeholder="e.g. ABCDEF123456"
              ></input>
            </div>

            <div class="mb-3">
              <label for="shippingCompany" class="form-label">
                SHIPPING COMPANY
              </label>
              <select class="form-select form-control">
                <option selected>Select a Shipping Company</option>
                <option value="thpost">Thailand Post</option>
                <option value="kerry">Kerry Express</option>
                <option value="scg">SCG Express</option>
                <option value="dhl">DHL Express</option>
                <option value="flash">Flash Express</option>
                <option value="ิother">Other</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="uploadPackagePicture" class="form-label">
                UPLOAD PACKAGE PICTURE
              </label>
              <div class="mb-3 center-pic">
                <img class="preview-picture" src={Package} alt="package"></img>
              </div>
              <input
                type="file"
                class="form-control"
                id="inputPackagePicture"
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
        </div>
      </form>
    </div>
  )
}

export default Shipping
