import React, { Fragment, useRef, useState } from "react";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";

import pic1 from "../pictures/loginpic.jpg";
import { Link,useOutletContext,useNavigate } from "react-router-dom";
import { postData } from "../components/fetchData";
import eye from "../pictures/eye.svg";
import eye_blind from "../pictures/eye_blind.svg";

const PopupError = (props)=>{
	let alertClass = "alertBox alert alert-danger"
	if(props.error){
		alertClass = "alertBox show alert alert-danger"
	}
	return (
	<div className={alertClass} role="alert">
		{props.error}
	</div>
	)
}

const TabSignUp = (props)=>{
  return (
    <div
      className="tab-pane fade show active"
      id="SignUp-tab-pane"
      role="tabpanel"
      aria-labelledby="SignUp-tab"
      tabIndex={"0"}
    >
      <form className={classes.Form} onSubmit={props.submit}>
        <label htmlFor="displayname">Display Name</label>
        <input
          id="displayname"
          type="displayname"
          placeholder="Display Name"
          ref={props.displayName}
          required
        />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Email" ref={props.email} required/>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" ref={props.password} required/>
        <label htmlFor="confirmpassword">Confirm Password</label>
        <input
          id="confirmpassword"
          type="password"
          placeholder="Confirm Password"
          ref={props.confirmPassword}
          required
        />
        <div>
          <input type="submit" className={classes.button} value="Sign Up" required/>
        </div>
      </form>
    </div>
  )
}

const TabSignIn = (props)=>{
  const [eye_icon,setEye_icon] = useState(eye)
  const togglePassword = (e)=>{
    const password = document.getElementById("password")
    if(password.type == "password"){
      password.type = "text"
      setEye_icon(eye_blind)
    }
    else{
      password.type = "password"
      setEye_icon(eye)
    }
    e.preventDefault()
  }
  return (
    <div
      className="tab-pane fade"
      id="SignIn-tab-pane"
      role="tabpanel"
      aria-labelledby="SignIn-tab"
      tabIndex={"1"}
    >
      <form className={classes.Form} action="" onSubmit={props.submit}>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Email" ref={props.email}/>
        <label htmlFor="password">Password</label>
        <div className="input-group">
				  <input id="password" type="password" placeholder="Password" className='form-control' ref={props.password}></input>
				  <input type="image" className="btn" style={{width: "40px",padding: 0}} src={eye_icon} onClick={togglePassword}></input>
			  </div>
        <Link to={"#"}>Forgot Password?</Link>
        
        <div>
          <input type="submit" className={classes.button} value="Sign In"/>
        </div>
      </form>
    </div>
  )
}
const SignUp = () => {
  let navigate = useNavigate();
  const [loggedIn, setloggedIn] = useOutletContext();
  const [error,setError] = useState("")
  const signinEmail = useRef();
  const signinPassword = useRef();
  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupConfirm = useRef();
  const displayName = useRef();
  const onSignUpSubmit = (e) =>{
    e.preventDefault()
    const password = signupPassword.current.value.trim()
    const confirm = signupConfirm.current.value.trim()
    const email = signupEmail.current.value.trim()
    const name = displayName.current.value.trim()
    if(password != confirm){
      // password not match
      console.log("Passwords do not match")
      setError("Passwords do not match")
      // setError("Invalid pass")
      return
    }
    if(!email.match(/.+@.+/)){
      console.log("Invalid email")
      // setError("Invalid email")
      return
    }
    postData(
      "/user/signup",
      JSON.stringify({
        email: email,
        password: password,
        displayName: name
      }))
    .then((res) => {
      if(!res.status) throw new Error("Could not get status")
      if(res.status == "fail" || res.status == "error") throw new Error(res.message)
      console.log("Signed up")
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  const onSignInSubmit = (e) => {
    postData(
      "/user/signin",
      JSON.stringify({
        email: signinEmail.current.value.trim(),
        password: signinPassword.current.value.trim()
      }))
    .then((res) => {
			if(!res.status) throw new Error("Could not get status")
			if(res.status == "fail" || res.status == "error") throw new Error(res.message)
      const data = res.data.user;
      localStorage.setItem("displayName", data.displayName);
      localStorage.setItem("token", res.token);
      localStorage.setItem("userStatus", data.userStatus);
      setloggedIn(true);
      navigate("/");
    })
    .catch((error)=>{
      console.log(error)
    })
    e.preventDefault()
  }

  return (
    <Fragment>
      <div className={classes.SignUp}>
        <div>
          <h1>Anything You Want, At A Super Satisfying Price!</h1>
          <h2 className="text-primary">Create An Account Now!</h2>
          <img className={classes.loginimg} src={pic1} />
        </div>
        <Card className={classes.input}>
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="SignUp-tab"
                data-bs-toggle="tab"
                data-bs-target="#SignUp-tab-pane"
                type="button"
                role="tab"
                aria-controls="SignUp-tab-pane"
                aria-selected="true"
              >
                Sign Up
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="SignIn-tab"
                data-bs-toggle="tab"
                data-bs-target="#SignIn-tab-pane"
                type="button"
                role="tab"
                aria-controls="SignIn-tab-pane"
                aria-selected="false"
              >
                Sign In
              </button>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <TabSignIn
              email={signinEmail}
              password={signinPassword}
              submit={onSignInSubmit}
            />
            <TabSignUp
              email={signupEmail}
              password={signupPassword}
              displayName={displayName}
              confirmPassword={signupConfirm}
              submit={onSignUpSubmit}
            />
          </div>
        </Card>
      </div>
      <PopupError
      error={error}/>
    </Fragment>
  );
};

export default SignUp;