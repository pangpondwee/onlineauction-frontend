import React, { useRef, useState } from "react";

import Card from "../components/Card";

import classes from "../css/SignUp.module.css";
import styles from "../css/ResetPassword.module.css";
import PopupError from "../components/PopupError";
import eye from "../pictures/eye.svg";
import eye_blind from "../pictures/eye_blind.svg";
import { postData } from "../components/fetchData";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
	const { userId } = useParams();
  const newPasswordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error,setError] = useState();
  const [eye_icon,setEye_icon] = useState(eye)
  const togglePassword = ()=>{
    const password = document.getElementById("signup-password")
    if(password.type == "password"){
      password.type = "text"
      setEye_icon(eye_blind)
    }
    else{
      password.type = "password"
      setEye_icon(eye)
    }
  }
  const onSubmit = (e)=>{
    e.preventDefault()
    const newPassword = newPasswordRef.current.value.trim();
    const confirmPassword = passwordConfirmRef.current.value.trim();
    if(newPassword != confirmPassword){
      // password not match
      setError("Error: Passwords do not match")
      return
    }
    postData("/user/reset-password?id="+userId,JSON.stringify({
      newPassword: newPassword
    }))
    .then((res)=>{
      console.log("okay")
    })
    .catch(e=>{
      setError(e.message)
    })
  }
  
  return (
    <>
      <PopupError
      error={error}
      setError={setError}
      />
      <div className={styles.center}>
        <Card className={classes.input}>
          <form className={classes.Form} onSubmit={onSubmit}>
            <div className={styles.h2}>
              <h2>Reset Password</h2>
            </div>
            <ul style={{paddingLeft: "1em", textAlign: "start", marginBottom: "0"}} >
              <li>Be 10-30 characters long</li>
              <li>Contains at least 1 number</li>
              <li>Contains at least 1 lower case character</li>
              <li>Contains at least 1 upper case character</li>
              <li>Contains at least 1 special character</li>
              <li>Contains no spaces</li>
            </ul>
            <br/>
            <div className="input-group">
              <input id="signup-password" type="password" placeholder="Password" className='form-control' ref={newPasswordRef}></input>
              <img src={eye_icon} className="btn" style={{width: "40px",padding: 0, margin: "1em auto"}} onClick ={togglePassword} />
            </div>
            <label htmlFor="confirmpassword">Confirm Password</label>
            <input
              id="confirmpassword"
              type="password"
              placeholder="Confirm Password"
              ref={passwordConfirmRef}
              required
            />
            <div>
              {/* <button className={styles.button}>Reset Password</button> */}
              <input type="submit" className={classes.button} value="Reset Password" required/>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default ResetPassword;
