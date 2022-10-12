import { Link, useParams } from "react-router-dom";

import classes from "../css/VerifyEmail.module.css";
import successIcon from "../pictures/blue_circle_check.png";
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
        <div className={classes.successIconWrapper}>
          <img className={classes.successIcon} src={successIcon} />
        </div>
        <div className={classes.desc}>
          <h1>Your Email is now Verified!</h1>
          <p><Link to="/signup">&lt;- Back to Sign Up</Link></p>
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
