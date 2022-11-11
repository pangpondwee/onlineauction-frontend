import PaymentObj from "../components/PaymentObj";
import { useState, useEffect } from "react";
import getData from "../components/fetchData";
import PaymentPop from "../components/PaymentPop";

const MyPayment = () =>{
    const [data, setData]=useState({bankAccountName: "", bankNO: "", bankName: ""})
    const [status,setStatus]=useState("unknown");
    
    // useEffect(()=>{
	// 	getData(`/user/mypayment`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status === "success"){
	// 			setData(res.data);
	// 		}
	// 		else{
	// 			setData(res.message);
	// 		}
	// 	})
	// },[]);

    // console.log(data)
    
    let id=0;
    const display = []
    // data.forEach(element => {
    //     display.push(<PaymentObj data={element} id={id}/>)
    //     id += 1;
    // });
    // }
    if(data.bankAccountName==="" && data.bankNO==="" && data.bankName===""){
        display.push(<button className="add-payment" data-bs-toggle="modal" data-bs-target="#confirmModal0">+ Add Payment Info</button>)
        display.push(<div className="no-data-page">You don't have any payment information.</div>)
    } else {
        display.push(<PaymentObj data={data} id={id}/>)
    }

	return (
        <div>
            <h1>My Payment</h1>
            <div className="all-review">
                {/* store each review */}
                {display}
                <PaymentPop id={0}/>
            </div>
        </div>
	)
}
export default MyPayment;