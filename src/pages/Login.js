import React, { Fragment } from "react";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";

import pic1 from "../pictures/loginpic.jpg";

const Login = () => {
  return (
    <Fragment>
      <h2 className="text-primary">Login To Start Your Journey!</h2>
      <div className={classes.SignUp}>
        <img className={classes.loginimg} src={pic1} />
        <Card className={classes.input}>
          <div className="Form">
            <label htmlFor="email">Email</label>
            <input id="email" type="text" placeholder="Email" />
            <label htmlFor="password">Password</label>
            <input id="password" type="text" placeholder="Password" />
            <div>
              <button className={classes.button}>LOG IN</button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Login;
