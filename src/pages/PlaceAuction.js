const AuctionDetail = () => {
  return (
    <div>
      <h1 class="header">Place Auction</h1>
      <form>
        <div class="form">
          <div class="formHeading1">ITEM INFORMATION</div>
          <div class="subForm col-5">
            <div class="mb-3">
              <label for="itemName" class="form-label">
                ITEM NAME
              </label>
              <input
                type="text"
                class="form-control"
                id="inputItemName"
                placeholder="e.g. White fluffy bunny doll"
              ></input>
            </div>
            <div class="mb-3">
              <label for="itemDetail" class="form-label">
                ITEM DETAILS
              </label>
              <textarea
                type="text"
                class="form-control"
                id="inputItemDetail"
                placeholder="e.g. White bunny with soft fur"
              ></textarea>
            </div>
            <div class="mb-3">
              <label for="uploadPicture" class="form-label">
                UPLOAD PICTURE
              </label>
              <div class="picture-preview" id="picturePreview">
                <img
                  src=""
                  alt="Preview"
                  class="picture-preview__picture"
                ></img>
              </div>
              <input type="file" class="form-control" id="inputFile"></input>
            </div>
          </div>
          <div class="formHeading1">AUCTION DETAILS</div>
          <div class="subForm col-5">
            <div class="mb-3">
              <label for="startingPrice">STARTING PRICE</label>
              <input
                type="number"
                class="form-control"
                id="starting Price"
                placeholder="e.g. 500"
              ></input>
            </div>
            <label for="auctioningType" class="mb-3">
              AUCTIONING TYPE
            </label>
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                ></input>
                <label class="form-check-label" for="inlineRadio1">
                  Closed Bid
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                ></input>
                <label class="form-check-label" for="inlineRadio2">
                  Open Bid
                </label>
              </div>
            </div>
            <div class="mb-3">
              <label for="endDate">END DATE</label>
              <input
                type="datetime-local"
                class="form-control"
                id="endDate"
              ></input>
            </div>
            <div class="mb-3">
              <label for="minimumBidStep">MINIMUM BID STEP (OPTIONAL)</label>
              <input
                type="number"
                class="form-control"
                id="minimumBidStep"
                placeholder="e.g. 500"
              ></input>
            </div>
            <div class="mb-3">
              <label for="expectedPrice">EXPECTED PRICE (OPTIONAL)</label>
              <input
                type="number"
                class="form-control"
                id="expectedPrice"
                placeholder="e.g. 500"
              ></input>
            </div>
          </div>
          <div class="mt-3 mb-3 attention">
            IMPORTANT NOTE: BIDDING FEES WILL BE CALCULATED AFTER THE BIDDING
            TIME ENDS
          </div>
          <div class="mt-3 mb-3">
            By clicking Place Auction below, you agree to our Terms of Service
            and our Privacy Policy.
          </div>
          <button type="submit" class="btn btn-primary">
            Place Auction
          </button>
          <button type="submit" class="btn btn-outline-primary">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
export default AuctionDetail
