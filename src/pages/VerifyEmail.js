import { useParams } from "react-router-dom";

import classes from "../css/VerifyEmail.module.css";
import pic1 from "../pictures/blue_circle_check.png";
import { postData } from "../components/fetchData";
import { useEffect, useState } from "react";

function VerifyEmail() {
	const { userId } = useParams();
  const [status,setStatus] = useState("loading")
  const [data,setData] = useState({})
  useEffect(()=>{
    postData('/user/validateUser/'+userId)
    .then((res)=>{
      setStatus("success")
    })
    .catch(e=>{
      setStatus("error")
      setData(e.message)
    })
  },[])
  if(status == "success"){
    return (
      <>
        <img className={classes.pic1} src={pic1} />
        <div className={classes.text}>
          <h1>Your Email is now Verified!</h1>
        </div>
      </>
    );
  }
  else if(status == "loading"){
    return (
      <p>Loading...</p>
    )
  }
  else{
    return (
      <div>
        <h1>Error</h1>
        <p>{data}</p>
      </div>
    )
  }
}

export default VerifyEmail;
