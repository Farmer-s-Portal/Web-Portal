import React from "react";
import styled from "styled-components";

const Loading = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="loading"></div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .container {
    padding: 5rem 0;
    width: 90vw;
    margin: 0 auto;
    min-height: 100vw;
  }
`;

export default Loading;
