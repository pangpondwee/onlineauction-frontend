import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../css/Login.css";

function Login() {
  let navigate = useNavigate();
  const onSubmit = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    fetch("http://13.250.98.9/api/api/user/signin", {
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
        localStorage.setItem("isLoggedIn",true)
        navigate("/")
      }
      else{
        throw new Error(res_data.message);
      }
    }).catch((error)=>{
      console.log(error)
    })
  }
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            <span className="text-primary">Login to Start Bidding Now!</span>
          </h1>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                // label="Email"
                id="email"
                type="email"
                placeholder="Email"
              />
              <MDBInput
                wrapperClass="mb-4"
                // label="Password"
                id="password"
                type="password"
                placeholder="Password"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="!#">Forgot password?</a>
              </div>

              <MDBBtn onClick={onSubmit} className="w-100 mb-4" size="md">
                LOGIN
              </MDBBtn>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" className="text-blue-50 fw-bold">
                    Sign Up
                  </a>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
