import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <Wrapper className="">
      <section>
        <h1>404</h1>
        <h3>page not found </h3>
        <Link to="/">back to home</Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ErrorPage;
