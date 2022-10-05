import ReviewObj from "../components/ReviewObj";
import { useState, useEffect } from "react";
import getData from "../components/fetchData";

//const data=[{name: "Nintendo Switch", bidder: "A", rating: 3, reviewing: "Incididunt officia sit mollit qui ullamco enim quis deserunt aliqua nostrud pariatur aliquip. Ullamco pariatur incididunt commodo duis eu amet nulla. Minim sunt velit tempor nostrud id et. Veniam excepteur non deserunt adipisicing elit do ut nisi consectetur. Lorem proident eu laboris velit dolore. Nulla ad ut sunt labore est duis voluptate cupidatat duis laboris. Amet sint nostrud reprehenderit aliquip tempor in reprehenderit occaecat et do. Commodo sint magna nostrud ea ad elit quis."}]

const MyReview = () =>{
    const [data, setData]=useState([])
    const [status,setStatus]=useState("unknown");
    
    useEffect(()=>{
		getData(`/user/myreviews`).then((res)=>{
			setStatus(res.status);
			if(res.status === "success"){
				setData(res.data);
			}
			else{
				setData(res.message);
			}
		})
	},[]);

    console.log(data)

    const display = []
    data.forEach(element => {
        console.log(element)
        display.push(<ReviewObj name={element.productName} bidder={element.commenter} rating={element.rating} reviewing={element.comment}/>)
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