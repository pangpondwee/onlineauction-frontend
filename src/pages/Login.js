import React, { Fragment } from "react";

import classes from "../css/SignUp.module.css";
import Card from "../components/Card";
import pic1 from "../pictures/loginpic.jpg";
import { useOutletContext,useNavigate } from "react-router-dom";


function Login(props) {
  let navigate = useNavigate();
  const [loggedIn, setloggedIn] = useOutletContext();
  const onSubmit = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    fetch("http://13.250.98.9/api/user/signin", {
      method: 'POST',
      mode: 'cors',
      credentials: 'include',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value
      })
    }).then(res => {
      return res.json();
    }).then(res_data=>{
      if(res_data.status == "success"){
        const data = res_data.data.user;
        localStorage.setItem("displayName",data.displayName)
        setloggedIn(true);
        navigate("/");
      }
      else{
        throw new Error(res_data.message);
      }
    }).catch((error)=>{
      console.log(error)
    })
  }
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
              <button onClick={onSubmit} className={classes.button}>LOG IN</button>
            </div>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Login;
