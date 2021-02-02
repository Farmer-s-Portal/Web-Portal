import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  return (
    <Wrapper>
      <h3>navbar</h3>
      <ul>
        <li>
          <Link to="/">home</Link>{" "}
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/login">login</Link>
        </li>
        <li>
          <Link to="/logout">logout</Link>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  padding: 4px;
  margin-bottom: 10px;
  ul {
    list-items: none;
  }
`;

export default Navbar;
