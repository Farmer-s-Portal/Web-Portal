import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import logo from "../assets/logos/logo1.svg";

// import './Navbar.css';
function NavbarComponent() {
  return (
    <Wrapper>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
      >
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img class="logo" src={logo} alt="nav logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link>
                <Link class="nav-link" to="/about">
                  About
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link class="nav-link" to="/contact">
                  Contact
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link class="nav-link" to="/signup">
                  Signup
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link class="nav-link" to="/login">
                  Login
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  margin-bottom: 80px;
  .logo {
    width: 80%;
    padding: 10px 0;
  }
  .nav-link {
    opacity: 0.85;
    text-decoration: none;
    color: #5c342f !important;
  }
  .nav-link:hover {
    opacity: 1;
    text-decoration: underline;
    text-decoration-color: #5c342f !important;
  }
`;

export default NavbarComponent;
