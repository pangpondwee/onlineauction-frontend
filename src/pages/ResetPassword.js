import React, { Fragment } from "react";

import Card from "../components/Card";

import classes from "../css/SignUp.module.css";
import styles from "../css/ResetPassword.module.css";

const ResetPassword = () => {
  return (
    <Fragment>
      <div className={styles.center}>
        <Card className={classes.input}>
          <div className={classes.Form}>
            <div className={styles.h2}>
              <h2>Password Requirements</h2>
            </div>
            <p>• Minimum length: 10 characters</p>
            <p>• Maximum length: 30 characters</p>
            <p>• Contains at least 1 upper case letter</p>
            <p>• Contains at least 1 lower case letter</p>
            <p>• Contains at least 1 number</p>
            <p>• Contains at least 1 special character</p>
            <p></p>
            <label htmlFor="newpassword">New Password</label>
            <input id="newpassword" type="text" placeholder="New Password" />
            <p></p>
            <p></p>
            <label htmlFor="newpassword">Confirm New Password</label>
            <input
              id="newpassword"
              type="text"
              placeholder="Confirm New Password"
            />
            <div>
              <button className={styles.button}>Reset Password</button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default ResetPassword;
