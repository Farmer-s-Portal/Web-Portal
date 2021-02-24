import React, { useState } from "react";
import styled from "styled-components";

import Login from "../components/Login";

function LoginPage() {
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default LoginPage;
