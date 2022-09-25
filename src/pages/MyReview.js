import ReviewObj from "../components/ReviewObj";
import { useState, useEffect } from "react";
import getData from "../components/fetchData";

const MyReview = () =>{
    // const [data, setData]=useState([{productName: "Nintendo Switch", lastBid : 2000}])
    // const [status,setStatus]=useState("unknown");
    // useEffect(()=>{
	// 	getData(`/api/user/myorder?filter=mybid`).then((res)=>{
	// 		setStatus(res.status);
	// 		if(res.status == "success"){
	// 			setData(res.data);
	// 		}
	// 		else{
	// 			setData(res.message);
	// 		}
	// 	})
	// },[]);
    // const display = []
    // data.forEach(element => {
    //     display.push(<ReviewObj/>)
    // });

	return (
        <>
            <h1>My Review</h1>
            <div className="all-review">
                {/* store each review */}
                <ReviewObj/>
                {/* {display} */}
            </div>
        </>
	)
}
export default MyReview;