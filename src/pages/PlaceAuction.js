import bunny from '../pictures/bunny.jpeg'

const AuctionDetail = () => {
  return (
    <div>
      <h1 className="header">Place Auction</h1>
      <form className="payment-form">
        <div className="formHeading1">ITEM INFORMATION</div>
        <div className="subForm">
          <div className="mb-3">
            <label for="itemName" className="form-label">
              ITEM NAME
            </label>
            <input
              type="text"
              className="form-control"
              id="inputItemName"
              placeholder="e.g. White fluffy bunny doll"
            ></input>
          </div>
          <div className="mb-3">
            <label for="itemDetail" className="form-label">
              ITEM DETAILS
            </label>
            <textarea
              type="text"
              className="form-control"
              id="inputItemDetail"
              placeholder="e.g. White bunny with soft fur"
            ></textarea>
          </div>
          <div className="mb-3">
            <label for="itemCategory" className="form-label">
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
          <div className="mb-3">
            <label for="uploadPicture" className="form-label">
              UPLOAD PICTURE
            </label>
            <div className="mb-3">
              <img className="preview-picture" src={bunny} alt="bunny"></img>
            </div>
            <input type="file" className="form-control" id="inputFile"></input>
          </div>
        </div>
        <div className="formHeading1">AUCTION DETAILS</div>
        <div className="subForm">
          <div className="mb-3">
            <label for="startingPrice" className="form-label">
              STARTING PRICE
            </label>
            <input
              type="number"
              className="form-control"
              id="starting Price"
              placeholder="e.g. 500"
            ></input>
          </div>
          <label for="auctioningType" className="mb-3">
            AUCTIONING TYPE
          </label>
          <div className="mb-3">
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
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
                id="inlineRadio2"
                value="option2"
              ></input>
              <label className="form-check-label" for="inlineRadio2">
                Open Bid
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label for="endDate" className="form-label">
              END DATE
            </label>
            <input
              type="datetime-local"
              className="form-control"
              id="endDate"
            ></input>
          </div>
          <div className="mb-3">
            <label for="minimumBidStep" className="form-label">
              MINIMUM BID STEP (OPTIONAL)
            </label>
            <input
              type="number"
              className="form-control"
              id="minimumBidStep"
              placeholder="e.g. 500"
            ></input>
          </div>
          <div className="mb-3">
            <label for="expectedPrice" className="form-label">
              EXPECTED PRICE (OPTIONAL)
            </label>
            <input
              type="number"
              className="form-control"
              id="expectedPrice"
              placeholder="e.g. 500"
            ></input>
          </div>
        </div>
        <div className="form-footer">
          <div className="mt-3 mb-3 attention">
            IMPORTANT NOTE: BIDDING FEES WILL BE CALCULATED AFTER THE BIDDING
            TIME ENDS
          </div>
          <div className="mt-3 mb-3">
            By clicking Place Auction below, you agree to our Terms of Service
            and our Privacy Policy.
          </div>
          <div>
            <button type="submit" className="btn btn-primary first-button">
              Place Auction
            </button>
            <button type="submit" className="btn btn-outline-primary">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default AuctionDetail
