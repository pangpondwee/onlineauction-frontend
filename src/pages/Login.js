import { Link } from "react-router-dom";

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
                id="form1"
                type="email"
                placeholder="Email"
              />
              <MDBInput
                wrapperClass="mb-4"
                // label="Password"
                id="form1"
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

              <MDBBtn className="w-100 mb-4" size="md">
                LOGIN
              </MDBBtn>

              <div>
                <p className="mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="text-blue-50 fw-bold">
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
