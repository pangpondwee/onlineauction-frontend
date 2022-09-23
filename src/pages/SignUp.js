import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";

import pic1 from "../pictures/loginpic.jpg";

const SignUp = () => {
  return (
    <Fragment>
      <h1>Anything You Want, At A Super Satisfying Price!</h1>
      <h2 className="text-primary">Create An Account Now!</h2>
      <div className={classes.SignUp}>
        <img className={classes.loginimg} src={pic1} />
        <Card className={classes.input}>
          <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
              <button
                class="nav-link active"
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
            <li class="nav-item" role="presentation">
              <button
                class="nav-link"
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
          <div class="tab-content" id="myTabContent">
            <div
              class="tab-pane fade show active"
              id="SignUp-tab-pane"
              role="tabpanel"
              aria-labelledby="SignUp-tab"
              tabindex="0"
            >
              <div className={classes.Form}>
                <label htmlFor="displayname">Display Name</label>
                <input
                  id="displayname"
                  type="displayname"
                  placeholder="Display Name"
                />
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" placeholder="Password" />
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  id="confirmpassword"
                  type="text"
                  placeholder="Confirm Password"
                />
                <div>
                  <button className={classes.button}>Sign Up</button>
                </div>
              </div>
            </div>
            <div
              class="tab-pane fade"
              id="SignIn-tab-pane"
              role="tabpanel"
              aria-labelledby="SignIn-tab"
              tabindex="0"
            >
              <div className={classes.Form}>
                <label htmlFor="email">Email</label>
                <input id="email" type="text" placeholder="Email" />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" placeholder="Password" />
                <Link to={"#"}>Forgot Password?</Link>
                <div>
                  <button className={classes.button}>Sign In</button>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default SignUp;
