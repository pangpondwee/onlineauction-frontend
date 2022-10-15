import React, { useState, useRef } from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
import { Link,useNavigate } from "react-router-dom";

import Card from "../components/Card";
import { postData } from "../components/fetchData";
import PopupError from "../components/PopupError";

import classes from "../css/SignUp.module.css";
// import styles from "../css/ForgetPassword.module.css";

import pic1 from "../pictures/loginpic.jpg";

const ForgetPassword = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const [error,setError] = useState("")
  const onSubmit = (e)=>{
    e.preventDefault()
    const email = emailRef.current.value.trim()
    if(!email.match(/.+@.+/)){
      setError("Error: Invalid Email")
      return
    }
    postData("/user/forgot-password",
    JSON.stringify({
      email: email
    }))
    .then((res)=>{
      if(!res.status) throw new Error("Could not get status")
      if(res.status == "fail" || res.status == "error") throw new Error(res.message)
      navigate("/forget-success")
    })
    .catch((error)=>{
      setError(error.message)
    })
  }
  return (
    <>
      <PopupError
      error={error}
      setError={setError}
      />
      <div className={classes.SignUp}>
        <div>
          <h1>Anything You Want, At A Super Satisfying Price!</h1>
          <h2 className="text-primary">Create An Account Now!</h2>
          <img className={classes.loginimg} src={pic1} />
        </div>
        <Card className={classes.input}>
          <form className={classes.Form} onSubmit={onSubmit}>
            <p>
              Enter the Email Address associated with your account and we'll
              send you a link to reset password.
            </p>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email" ref={emailRef} required/>
            <div>
            <input type="submit" className={classes.button} value="Continue"/>
            </div>
            <div className={classes.returnsignin}>
              <Link to={"/signup"}>Return To Sign In</Link>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default ForgetPassword;
