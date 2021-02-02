import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

/**
 * user will input mobile
 * request for otp
 * enter opt and submit for login
 * if anything wrong display error
 * else login
 */

function LoginPage() {
  const [mobile, setMobile] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOtpSent) {
      // TODO: otp is entered by user check and login
    } else {
      //TODO: user is requesting for OTP
      setIsOtpSent(true);
    }
  };

  const resetHandler = (e) => {
    e.preventDefault();
    setMobile("");
    setIsOtpSent(false);
    setDisableButton(false);
    setError({
      show: false,
      msg: "",
    });
  };

  return (
    <Wrapper>
      <h1>login</h1>

      <form>
        <div>
          <label htmlFor="mobile">Mobile Number: </label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            value={mobile}
            onChange={handleMobileInput}
          />
        </div>
        {error.show && <p>{error.msg}</p>}
        {isOtpSent && (
          <div>
            <label htmlFor="otp">Enter OTP: </label>
            <input type="otp" name="otp" id="otp" />
            <p>
              OTP not received? <a href="#">resend otp</a>
            </p>
          </div>
        )}

        <button type="submit" onClick={handleSubmit} disabled={disableButton}>
          {isOtpSent ? "Login" : "Send OTP"}
        </button>
        <button onClick={resetHandler}>Reset</button>
      </form>
      <p>
        Don't have an account? <Link to="/signup">signup</Link>
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;

  // REMOVE INC DEC ARROWS FROM MOBILE INPUT
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default LoginPage;
