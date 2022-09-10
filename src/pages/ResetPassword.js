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
import "../css/ResetPassword.css";

function ResetPassword() {
  return (
    <MDBContainer fluid className>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h2 className="mb-4 text-center fw-bold">Password Requirement</h2>
              <p>• Minimum length: 10 characters</p>
              <p>• Maximum length: 30 characters</p>
              <p>• Contains at least 1 upper case letter</p>
              <p>• Contains at least 1 lower case letter</p>
              <p>• Contains at least 1 number</p>
              <p className="mb-4">• Contains at least 1 special character</p>

              <MDBInput
                wrapperClass="mb-4"
                // label="Email"
                id="form1"
                type="password"
                placeholder="New Password"
              />

              <MDBInput
                wrapperClass="mb-4"
                // label="Email"
                id="form1"
                type="password"
                placeholder="Confirm New Password"
              />

              <MDBBtn className="w-50 mb-4 mx-auto" size="mb">
                Reset Password
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ResetPassword;