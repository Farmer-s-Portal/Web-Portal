import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Form, Row, Container, Col, Button, InputGroup } from "react-bootstrap";

import { useUserContext } from "../contexts/user_context";

const Login = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");

  const [isOtpSent, setIsOtpSent] = useState(false);
  const [disableButton, setDisableButton] = useState(true);
  const [error, setError] = useState({
    show: false,
    msg: "",
  });

  const handleMobileInput = (e) => {
    let input = e.target.value;
    setMobile(input);
    if (input.length === 10) {
      setError({ show: false, msg: "" });
      setDisableButton(false);
    } else {
      setError({ show: true, msg: "mobile number should be of length 10" });
      setDisableButton(true);
    }
  };

  const handleOtpInput = (e) => {
    let input = e.target.value;
    setOtp(input);
    if (input.length > 0) {
      setDisableButton(false);
    } else {
      setDisableButton(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpSent) {
      // TODO: otp is entered by user check and login
    } else {
      //TODO: user is requesting for OTP
      setDisableButton(true);
      setIsOtpSent(true);
    }
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setMobile("");
    setIsOtpSent(false);
    setDisableButton(true);
    setError({
      show: false,
      msg: "",
    });
  };

  return (
    <Wrapper>
      <hr></hr>
      <Container>
        <h2>Login</h2>
      </Container>
      <hr></hr>
      <Container>
        <Row>
          <Col sm={1} md={3}></Col>
          <Col sm={12} md={6}>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <Form.Group controlId="formGridPassword">
                    <Form.Label>Phone number</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text>+91</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        name="phone"
                        placeholder="Phone Number"
                        value={mobile}
                        onChange={handleMobileInput}
                      />
                    </InputGroup>
                    <Form.Text id="" muted>
                      {error.show && <p>{error.msg}</p>}
                    </Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              {isOtpSent && (
                <Row>
                  <Col sm={12}>
                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>OTP</Form.Label>
                      <Form.Control
                        placeholder="12XXX"
                        value={otp}
                        onChange={handleOtpInput}
                      />
                      <Form.Text id="passwordHelpBlock" muted>
                        Enter the OTP received...
                      </Form.Text>
                      <p>
                        OTP not received? <a href="#">resend otp</a>{" "}
                      </p>
                    </Form.Group>
                  </Col>
                </Row>
              )}
              <Button variant="success" type="submit" disabled={disableButton}>
                {isOtpSent ? "Login" : "Send OTP"}
              </Button>{" "}
              <Button variant="danger" type="reset" onClick={resetHandler}>
                Reset
              </Button>
            </Form>
            <p>
              Don't have an account? <Link to="/signup">signup</Link>{" "}
            </p>
          </Col>
          <Col sm={1} md={3}></Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* align-items:center; */
  /* text-align:center; */
  /* justify-content:center; */
  /* background-color: lightslategrey; */
  hr,
  h2 {
    /* margin: 0; */
  }
  form {
    margin: auto;
  }
  input {
    /* margin-bottom: 20px; */
  }
  input:focus,
  select:focus {
    border-color: greenyellow;
    box-shadow: 0 0 0 0.2rem #dbf3dc;
  }
  label {
    font-weight: 500;
    padding-left: 5px;
    color: #5c342f;
  }
  .form-group {
    text-align: left;
  }

  text-align: center;

  // REMOVE INC DEC ARROWS FROM MOBILE INPUT
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
`;
export default Login;
