import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <Wrapper>
      <h1>sign up</h1>

      <p>name</p>
      <p>address</p>
      <p>aadhar</p>
      <p>mobile</p>
      <p>
        Already have an account? <Link to="/login">login</Link>
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

export default SignupPage;
