import React from "react";
import confirm from "../pictures/confirm.png";

const PopupConfirm = () => {
    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" class="PopupCon btn-primary" data-bs-toggle="modal" data-bs-target="#confirmModal">
                Confirm
            </button>

            {/* <!-- Modal --> */}
            <div class="modal fade" id="confirmModal" tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <img className="popup-confirm-img" src={confirm} alt="shipping"/>
                            <div className="modal-confirm-header-text">
                                <div className="modal-confirm-head-st" class="modal-title" id="confirmModalLabel">Your item is on its way</div>
                                <h6 class="modal-title" id="confirmModalLabel">Check item information and a tracking number below</h6>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body-confirm">
                            <button className="billing btn-link">Billing Info</button>
                            <h6>Item Name : Nintendo Switch</h6>
                            <h6>Auctioneer Name : Kong Pakkapol</h6>
                            <h6>Shipping : Thailand Post</h6>
                            <h6>Tracking Number : ABCDEFGH12345</h6>
                            <div className="tracking-img"></div>
                            <h6>Do you confirm that the package has arrived correctly?</h6>
                        </div>
                        <div class="modal-footer-confirm">
                            <button type="button" class="btn btn-primary">Confirm</button>
                            <button type="button" class="btn btn-outline-danger" data-bs-dismiss="modal">Deny</button>
                            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Not Yet</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupConfirm;