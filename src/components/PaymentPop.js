import React, { useState, useEffect } from "react";
import '../css/PopupConRev.css'
import { Link } from 'react-router-dom'
import getData, { postData } from "./fetchData";

const PaymentPop = (props) => {
    const id = "confirmModal" + props.id
    const id_name = "account_name" + props.id
    const id_bank = "bank" + props.id
    const id_number = "account_number" + props.id

    function onConfirm(e) {
        e.preventDefault()
        const personal_info = [id_name, id_bank, id_number]
        
        const _changed = {}
        personal_info.forEach((_info)=>{
            const tmp = document.getElementById(_info).value
            if (tmp != ""){
                // console.log(tmp)
                _changed[_info] = tmp
            }
        })

        console.log(_changed)
        // console.log("Begin postData confirm popupConfirm")
        // postData(`/shipping/${auctionID}`, JSON.stringify(
        //     {
        //         "confirm": true
        //     }
        // ))
        // .then((res) => {
        //     console.log("Confirmed successfully")
        // })
        // .catch(e => {
        //     console.log(e.message)
        // })
    }

    return (
        <div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id={id} tabindex="-1" aria-labelledby="confirmModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-confirm-head-st modal-title" id="confirmModalLabel"><h3 className="mb-0">Payment Details</h3></div>
                        </div>
                        <div class="modal-body-confirm">
                            <div>
                                <label>Account Number</label><br/>
                                <input type="text" id={id_number} className="input-editing" maxlength="15" required/>
                            </div>
                            <div className="form-input-field">
                                <label htmlFor="bankName" className="form-label">BANK</label><br/>
                                <select
                                    id={id_bank}
                                    className="input-editing"
                                    defaultValue={''}
                                    required>
                                <option value="" disabled>Select a Bank</option>
                                <option value="KTB">Krung Thai Bank (ธนาคารกรุงไทย)</option>
                                <option value="KBANK">Kasikornbank (ธนาคารกสิกรไทย)</option>
                                <option value="SCB">Siam Commercial Bank (ธนาคารไทยพาณิชย์)</option>
                                <option value="BBL">Bangkok Bank (ธนาคารกรุงเทพ)</option>
                                <option value="TTB">TMBThanachat Bank (ธนาคารทหารไทยธนชาติ)</option>
                                <option value="ิBAY">Bank of Ayudhya (ธนาคารกรุงศรี)</option>
                                <option value="GSB">Government Savings Bank (ธนาคารออมสิน)</option>
                                <option value="CIMBT">CIMB Thai Bank (ธนาคารซีไอเอ็มบีไทย)</option>
                                <option value="UOB">United Overseas Bank (Thai) (ธนาคารยูโอบี)</option>
                                <option value="TISCO">Tisco Bank (ธนาคารทิสโก้ จำกัด)</option>
                                <option value="KKP">Kiatnakin Phatra Bank (ธนาคารเกียรตินาคินภัทร)</option>
                                <option value="ICB">Industrial and Commercial Bank of China Limited(ธนาคารพาณิชย์อุตสาหกรรมแห่งประเทศจีน)</option>
                                <option value="LH">Land & Houses Bank (ธนาคารแลนด์ แอนด์ เฮ้าส์)</option>
                                <option value="SCT">Standard Chartered Bank (ธนาคารสแตนดาร์ดชาร์เตอร์ด)</option>
                                <option value="CITI">Citibank (ธนาคารซิตี้แบงก์)</option>
                                <option value="GHB">Government Housing Bank (ธนาคารอาคารสงเคราะห์)</option>
                                <option value="BAAC">Bank for Agriculture and Agricultural Cooperatives(ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร)</option>
                                <option value="IBT">Islamic Bank of Thailand (ธนาคารอิสลามแห่งประเทศไทย)</option>
                                <option value="TCRB">The Thai Credit Retail Bank (ธนาคารไทยเครดิต เพื่อรายย่อย)</option>
                                <option value="HSBC">HSBC BANK (เอชเอสบีซี โฮลดิ้งส์)</option>
                                </select>
                            </div>

                            <div>
                                <label>Account Name</label><br/>
                                <input type="text" id={id_name} className="input-editing" maxlength="15" placeholder="John Doe" required/>
                            </div>
                        </div>
                        <div className="modal-footer-confirm">
                            <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={onConfirm}>Confirm</button>
                            <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPop;