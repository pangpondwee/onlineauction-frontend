import promptpayqr from '../pictures/PromptpayQR.png'
import slip from '../pictures/slip.JPG'

const Payment = () => {
  return (
    <div>
      <h1 class="header">Payment</h1>
      <form>
        <div class="form">
          <div class="formHeading1">BILLING INFO</div>
          <div class="subForm col-5">
            <div class="mb-3">
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
            <div class="mb-3">
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
            <div class="mb-3">
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
          <div class="formHeading1">TRANSACTION INFO</div>
          <div class="subForm col-5">
            <div class="center-pic mb-3">
              <img
                class="promptpayqrpic"
                src={promptpayqr}
                alt="promptpayqr"
              ></img>
            </div>
            <div class="mb-3">
              <label for="transactionDateTime" class="form-label">
                TRANSACTION DATE AND TIME
              </label>
              <input
                type="datetime-local"
                class="form-control"
                id="transactionDateTime"
              ></input>
            </div>
            <div class="mb-3">
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
            <div class="mb-3">
              <label for="uploadTransactionSlip" class="form-label">
                UPLOAD TRANSACTION SLIP
              </label>
              <div class="mb-3 center-pic">
                <img class="transaction-slip-pic" src={slip} alt="slip"></img>
              </div>
              <input type="file" class="form-control" id="inputFile"></input>
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

export default Payment
