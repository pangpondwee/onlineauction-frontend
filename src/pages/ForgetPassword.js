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
import "../UI/ForgetPassword.css";

function ForgetPassword() {
  return (
    <MDBContainer fluid className>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column ">
              <p className="mb-4 text-center fw-bold">
                Enter the Email Address associated with your account and we'll
                send you a link to reset password.
              </p>

              <MDBInput
                wrapperClass="mb-4"
                // label="Email"
                id="form1"
                type="email"
                placeholder="Email"
              />

              <MDBBtn className="w-25 mb-4 mx-auto" size="mb">
                Continue
              </MDBBtn>

              <div>
                <p className="mb-0 text-center">
                  <a href="#!" class="text-bllue-50 fw-bold">
                    Return to Login
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

export default ForgetPassword;
