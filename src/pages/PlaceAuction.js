import bunny from '../pictures/bunny.jpeg'

const AuctionDetail = () => {
  const submitHandler = (event) => {
    event.preventDefault()
  }
  return (
    <div>
      <h1 className="header">Place Auction</h1>
      <form className="payment-form" onSubmit={submitHandler}>
        <div className="form-heading1">ITEM INFORMATION</div>
        <div className="subForm">
          <div className="form-input-field">
            <label htmlFor="itemName" className="form-label">
              ITEM NAME
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. White fluffy bunny doll"
              required
            ></input>
          </div>
          <div className="form-input-field">
            <label htmlFor="itemDetail" className="form-label">
              ITEM DETAILS
            </label>
            <textarea
              type="text"
              className="form-control"
              rows="8"
              placeholder="e.g. White bunny with soft fur"
            ></textarea>
          </div>
          <div className="form-input-field">
            <label htmlFor="itemCategory" className="form-label">
              ITEM CATEGORY
            </label>
            <select className="form-select form-control">
              <option selected>Select Category</option>
              <option value="homeImprovement">Home Improvement</option>
              <option value="jewellery">Jewellery</option>
              <option value="coinsCurrencyStamps">
                Coins, Currency, Stamps
              </option>
              <option value="watches">Watches</option>
              <option value="fashion">Fashion</option>
              <option value="arts">Arts</option>
              <option value="antiquesCollectablesAmulet">
                Antiques & Collectables and Amulet
              </option>
              <option value="electronics">Electronics</option>
              <option value="carsAutomotive">Cars & Automotive</option>
              <option value="handbags">Handbags</option>
              <option value="miscellaneous">Miscellaneous</option>
            </select>
          </div>
          <div className="form-input-field">
            <label htmlFor="uploadPicture" className="form-label">
              UPLOAD PICTURE
            </label>
            <div className="center-pic">
              <img className="preview-picture" src={bunny} alt="bunny"></img>
            </div>
            <div className="form-input-field">
              <input type="file" className="form-control" multiple></input>
            </div>
          </div>
        </div>
        <div className="formHeading1">AUCTION DETAILS</div>
        <div className="subForm">
          <div className="form-input-field">
            <label htmlFor="startingPrice" className="form-label">
              STARTING PRICE
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 500"
            ></input>
          </div>
          <div className="form-input-field">
            <label htmlFor="auctioningType">AUCTIONING TYPE</label>
            <div className="form-input-field">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option1"
                ></input>
                <label className="form-check-label" for="inlineRadio1">
                  Closed Bid
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  value="option2"
                ></input>
                <label className="form-check-label" for="inlineRadio2">
                  Open Bid
                </label>
              </div>
            </div>
          </div>
          <div className="form-input-field">
            <label htmlFor="endDate" className="form-label">
              END DATE
            </label>
            <input type="datetime-local" className="form-control"></input>
          </div>
          <div className="form-input-field">
            <label htmlFor="minimumBidStep" className="form-label">
              MINIMUM BID STEP (OPTIONAL)
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 500"
            ></input>
          </div>
          <div className="form-input-field">
            <label htmlFor="expectedPrice" className="form-label">
              EXPECTED PRICE (OPTIONAL)
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 500"
            ></input>
          </div>
        </div>
        <div className="form-footer">
          <div className="attention">
            IMPORTANT NOTE: BIDDING FEES WILL BE CALCULATED AFTER THE BIDDING
            TIME ENDS
          </div>
          <div>
            By clicking Place Auction below, you agree to our Terms of Service
            and our Privacy Policy.
          </div>
          <div>
            <button type="submit" className="btn btn-primary first-button">
              Place Auction
            </button>
            <button type="button" className="btn btn-outline-primary">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AuctionDetail
