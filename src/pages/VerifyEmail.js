import { Link } from "react-router-dom";

import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import "../UI/VerifyEmail.css";

function VerifyEmail() {
  return (
    <MDBContainer fluid className>
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "500px" }}
          >
            <MDBCardBody className="p-5 w-100 d-flex flex-column">
              <h1 className="mb-4 text-center fw-bold text-primary">
                Email is Verified!
              </h1>
              <p className="mb-4 text-center fw-bold">for kittipak.wi@ku.th</p>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default VerifyEmail;
