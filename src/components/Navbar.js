import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import './Navbar.css';
function Navbar() {
  return (
    <Wrapper>
      <div>
        <h3>NavBar</h3>
        <ul style={{display:"flex"}}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  padding: 10px;
  // margin-bottom: 10px;
  border: 0 0 2px 0;
  border-bottom: 1px lightgrey solid;
  div{
    display: flex;
  }
  div>h3{
    background-color: #4caf50;
    border-radius: 5px;
    padding: 4px 6px 4px 6px;
    height: 50px;
  }
  ul {
    list-items: none;
    margin: 0px;
  }
  .link{
    color:black;
  }
  h3{
    color:white;
    margin: 0px;
  }
  li{
    margin: 10px;
    margin-top: 15px;
  }
  li>a{
    color: black;
    padding: 12px;
    border-radius: 3px;
    font-weight: 600;
  }
  li>a:hover{
    background-color: #e4e4e4;
    text-decoration : none;
  }
`;

export default Navbar;
