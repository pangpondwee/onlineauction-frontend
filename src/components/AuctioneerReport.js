import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../css/AuctioneerReport.css';
import { postData, getData} from "./fetchData";

const AuctioneerReport = () => {
    const { auctioneerID } = useParams()
    // console.log(auctioneerID)
    const [name, setName] = useState("")
    const [status, setStatus] = useState("unk")
    const [reports, setReport] = useState({
        report: [],
        response: []
    })
    const [message, setMessage] = useState("")

    useEffect(() => {
        console.log("Begin getData for report auctioneer")
        getData(`/user/profile/${auctioneerID}`).then((res) => {
            setStatus(res.status);
            // console.log(status)
            if(res.status == "success"){
                setName(res.data.displayName)
                // console.log(data)
            }
            else{
                setName(res.message);
            }
        })
    },[]);

    const handleChange = (e) => {
        const { value, checked } = e.target
        const { report } = reports

        if (checked) {
            setReport({
                report: [...report, value],
                response: [...report, value]
            })
        } else {
            setReport({
                report: report.filter((e) => e !== value),
                response: report.filter((e) => e !== value)
            })
        }
    }

    function handleReport (e) {
        // console.log(e.target.value)
        e.preventDefault()
        postData(`/report`, JSON.stringify(
            {
                "reportID": auctioneerID,
                "reportDescription": e.target.value
            }
        ))
        .then((res) => {
            console.log("Report successfully")
        })
        .catch(e => {
            console.log("error")
        })
    }

    return (
        <div>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="Report btn-primary" data-bs-toggle="modal" data-bs-target="#reportModal">
                Report
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="reportModal" tabIndex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-report-header-text" className="modal-title" id="reportModalLabel">Report Pakkapol Kong</h5> */}
                            <h5 className="modal-report-header-text modal-title" id="reportModalLabel">Report {name}</h5>
                            {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                        </div>
                        <div className="modal-body-report">
                            <h6>Please specify the reason</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Reason1" id="flexCheck1" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheck1">
                                    Reason1
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Reason2" id="flexCheck2" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheck2">
                                    Reason2
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Reason3" id="flexCheck3" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheck3">
                                    Reason3
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Reason4" id="flexCheck4" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheck4">
                                    Reason4
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="Reason5" id="flexCheck5" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheck5">
                                    Reason5
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value={message} id="flexCheck6" onChange={handleChange}/>
                                <label className="form-check-label" htmlFor="flexCheck6">
                                    Other, please specify
                                    <textarea className="report-box" type="text" placeholder="Please enter detail before check box" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                                </label>
                            </div>
                            {/* <div className="form-check">
                                <textarea className="report-box" value={reports.response} onChange={handleChange}></textarea>
                            </div> */}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-danger" data-bs-dismiss="modal" value={reports.response} onClick={handleReport}>Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuctioneerReport;