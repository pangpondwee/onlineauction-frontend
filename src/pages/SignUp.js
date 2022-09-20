import React, { Fragment,useRef } from "react";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";

import pic1 from "../pictures/loginpic.jpg";
import { Link,useOutletContext,useNavigate } from "react-router-dom";

const SignUp = () => {
  let navigate = useNavigate();
  const [loggedIn, setloggedIn] = useOutletContext();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const onSignInSubmit = (e) => {
    fetch("http://13.250.98.9/api/user/signin", {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: email.current.value.trim(),
        password: password.current.value.trim()
      })
    }).then(res => {
      return res.json();
    }).then(res_data=>{
      if(res_data.status == "success"){
        const data = res_data.data.user;
        localStorage.setItem("displayName",data.displayName)
        localStorage.setItem("token",res_data.token)
        setloggedIn(true);
        navigate("/");
      }
      else{
        throw new Error(res_data.message);
      }
    }).catch((error)=>{
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
                <input id="email" type="text" placeholder="Email" ref={email}/>
                <label htmlFor="password">Password</label>
                <input id="password" type="text" placeholder="Password" ref={password}/>
                <label htmlFor="confirmpassword" ref={confirmPassword}>Confirm Password</label>
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
            <div
              className="tab-pane fade"
              id="SignIn-tab-pane"
              role="tabpanel"
              aria-labelledby="SignIn-tab"
              tabIndex={"1"}
            >
              <form className={classes.Form} action="" onSubmit={onSignInSubmit}>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email" ref={email}/>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" placeholder="Password" ref={password}/>
                <Link to={"#"}>Forgot Password?</Link>
                <div>
                  <input type="submit" className={classes.button} value="Sign In"/>
                </div>
              </form>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default SignUp;