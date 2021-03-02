import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import SignUp from "../components/Signup";

function SignupPage() {
  return (
    <Wrapper>
      <div className='container'>
        <div style={{background:'white',marginBottom:'40px',marginTop:'20px',borderRadius:'25px',padding:'20px'}}>
          <SignUp />
        </div>  
      </div>
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
