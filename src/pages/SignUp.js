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
  MDBIcon,
} from "mdb-react-ui-kit";
import "../UI/SignUp.css";

function SignUp() {
  return (
    <MDBContainer fluid className="p-4">
      <MDBRow>
        <MDBCol
          md="6"
          className="text-center text-md-start d-flex flex-column justify-content-center"
        >
          <h1 className="my-5 display-5 fw-bold ls-tight px-3">
            <p>Anything You Want, At A Super Satisfying Price!</p>
            <span className="text-primary">Create An Account Now!</span>
          </h1>
        </MDBCol>

        <MDBCol md="6">
          <MDBCard className="my-5">
            <MDBCardBody className="p-5">
              <MDBInput
                wrapperClass="mb-4"
                // label="Display Name"
                id="form1"
                type="name"
                placeholder="Display Name"
              />

              <MDBInput
                wrapperClass="mb-4"
                // label="Email"
                id="form1"
                type="email"
                placeholder="Email"
              />

              <MDBInput
                wrapperClass="mb-4"
                // label="Confirm Email"
                id="form1"
                type="email"
                placeholder="Confirm Email"
              />

              <MDBInput
                wrapperClass="mb-4"
                // label="Password"
                id="form1"
                type="password"
                placeholder="Password"
              />

              <MDBInput
                wrapperClass="mb-4"
                // label="Confirm Password"
                id="form1"
                type="password"
                placeholder="Confirm Password"
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Agree to Terms and Services"
                />
              </div>

              <MDBBtn className="w-100 mb-4" size="md">
                SIGN UP
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUp;
