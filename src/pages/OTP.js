import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import  OTPc  from "../components/OTP";
function OTP() {
  return (
    <Wrapper>
       <OTPc/>
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

export default OTP;
