import ReviewObj from "../components/ReviewObj";
import { useState, useEffect } from "react";
import getData from "../components/fetchData";

const data=[{name: "Nintendo Switch", rating: 3, reviewing: "Incididunt officia sit mollit qui ullamco enim quis deserunt aliqua nostrud pariatur aliquip. Ullamco pariatur incididunt commodo duis eu amet nulla. Minim sunt velit tempor nostrud id et. Veniam excepteur non deserunt adipisicing elit do ut nisi consectetur. Lorem proident eu laboris velit dolore. Nulla ad ut sunt labore est duis voluptate cupidatat duis laboris. Amet sint nostrud reprehenderit aliquip tempor in reprehenderit occaecat et do. Commodo sint magna nostrud ea ad elit quis."}]

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

    const display = []
    data.forEach(element => {
        display.push(<ReviewObj name={element.name} rating={element.rating} reviewing={element.reviewing}/>)
    });

	return (
        <>
            <h1>My Review</h1>
            <div className="all-review">
                {/* store each review */}
                {display}
            </div>
        </>
	)
}
export default MyReview;