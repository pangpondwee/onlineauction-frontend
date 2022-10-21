import PaymentObj from "../components/PaymentObj";
import { useState, useEffect } from "react";
import getData from "../components/fetchData";
import kbank from '../pictures/KBANK.png';

const MyPayment = () =>{
    const [data, setData]=useState([{"productPicture" : kbank, "productName" : "Kbank", "number" : "07187958888", "name" : " John Doe"}])
    const [status,setStatus]=useState("unknown");
    
    // useEffect(()=>{
	// 	getData(`/user/myfollowing`).then((res)=>{
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
    
    const display = []
    data.forEach(element => {
        display.push(<PaymentObj data={element}/>)
    });

	return (
        <div>
            <h1>My Payment</h1>
            <div className="all-review">
                {/* store each review */}
                {display.length===0? <div className="no-data-page">No Data</div> : display}
            </div>
        </div>
	)
}
export default MyPayment;