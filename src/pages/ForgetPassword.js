import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

import classes from "../css/SignUp.module.css";
import styles from "../css/ForgetPassword.module.css";

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
            <div className={styles.h6}>
              <h6>
                Enter the Email Address associated with your account and we'll
                send you a link to reset password.
              </h6>
            </div>
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email" />
            <div>
              <button className={styles.button}>Continue</button>
            </div>
            <div className={styles.return}>
              <Link to={"#"}>Return To Sign In</Link>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default ForgetPassword;
