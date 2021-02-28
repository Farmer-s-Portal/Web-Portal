import React from "react";
import styled from "styled-components";

import loadingGIF from "../assets/loading/loading.gif";

const Loading = () => {
  return (
    <Wrapper>
      <div className="contain">
        <img src={loadingGIF} alt="loading-gif" class="gif" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .contain {
    background: #f5f4f0;
    padding: 5rem 0;
    margin: 0 auto;
    min-height: 60vw;
  }

  .gif {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
`;

export default Loading;
