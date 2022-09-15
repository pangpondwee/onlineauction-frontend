import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";

import pic1 from "../pictures/loginpic.jpg";

const ForgetPassword = () => {
  return (
    <Fragment>
      <h1>Anything You Want, At A Super Satisfying Price!</h1>
      <h2 className="text-primary">Create An Account Now!</h2>
      <div className={classes.SignUp}>
        <img className={classes.loginimg} src={pic1} />
        <Card className={classes.input}>
          <div className={classes.Form}>
            <p>
              Enter the Email Address associated with your account and we'll
              send you a link to reset password.
            </p>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email" />
            <Link to={"#"}>Forgot Password?</Link>
            <div>
              <button className={classes.button}>Sign In</button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default ForgetPassword;
