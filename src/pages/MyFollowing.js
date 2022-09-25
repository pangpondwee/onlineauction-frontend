import FollowObj from "../components/FollowObj";
import { useState, useEffect } from "react";
import getData from "../components/fetchData";

const MyFollowing = () =>{
    const [data, setData]=useState([{productName: "Nintendo Switch", lastBid : 2000}])
    const [status,setStatus]=useState("unknown");
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
    const display = []
    data.forEach(element => {
        display.push(<FollowObj name={element.productName} lastBid={element.lastBid}/>)
    });

	return (
        <>
            <h1>My Following List</h1>
            <div className="all-review">
                {/* store each review */}
                {display}
            </div>
        </>
	)
}
export default MyFollowing;