import React, { Fragment } from "react";

import classes from "../css/VerifyEmail.module.css";
import pic1 from "../pictures/blue_circle_check.png";

function VerifyEmail() {
  return (
    <Fragment>
      <img className={classes.pic1} src={pic1} />
      <div className={classes.text}>
        <h1>Your Email is now Verified!</h1>
      </div>
      <div className={classes.text2}>
        <p>(for kittipak.wi@ku.th)</p>
      </div>
    </Fragment>
  );
}

export default VerifyEmail;
