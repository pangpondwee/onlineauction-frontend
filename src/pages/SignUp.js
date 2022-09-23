import React, { Fragment, useRef } from "react";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";

import pic1 from "../pictures/loginpic.jpg";
import { Link,useOutletContext,useNavigate } from "react-router-dom";
import { postData } from "../components/fetchData";
const TabSignUp = (props)=>{
  return (
    <div
      className="tab-pane fade show active"
      id="SignUp-tab-pane"
      role="tabpanel"
      aria-labelledby="SignUp-tab"
      tabIndex={"0"}
    >
      <form className={classes.Form}>
        <label htmlFor="displayname">Display Name</label>
        <input
          id="displayname"
          type="displayname"
          placeholder="Display Name"
        />
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="Email" ref={props.email}/>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Password" ref={props.password}/>
        <label htmlFor="confirmpassword" ref={props.confirmPassword}>Confirm Password</label>
        <input
          id="confirmpassword"
          type="text"
          placeholder="Confirm Password"
        />
        <div>
          <input type="submit" className={classes.button} value="Sign Up"/>
        </div>
      </form>
    </div>
  )
}

const TabSignIn = (props)=>{
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
        <input id="password" type="password" placeholder="Password" ref={props.password}/>
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
  const signinEmail = useRef();
  const signinPassword = useRef();
  const signupEmail = useRef();
  const signupPassword = useRef();
  const signupConfirm = useRef();
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
      <h1>Anything You Want, At A Super Satisfying Price!</h1>
      <h2 className="text-primary">Create An Account Now!</h2>
      <div className={classes.SignUp}>
        <img className={classes.loginimg} src={pic1} />
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
              confirmPassword={signupConfirm}
            />
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default SignUp;