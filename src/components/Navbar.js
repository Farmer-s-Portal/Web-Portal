import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserPlus,
  faSignInAlt,
  faSignOutAlt,
  faUserClock,
  faInfoCircle
} from "@fortawesome/free-solid-svg-icons";

import { useUserContext } from "../contexts/user_context";
import logo from "../assets/logos/logo1.svg";

function NavbarComponent() {
  const { currentUser, logout, setTrue, setFalse } = useUserContext();

  const handleLogout = async () => {
    try {
      await logout();
    } catch {
      console.log("error in logout");
    }
  };
  const handleFarmer = () => {
    setTrue();
  };
  const handleTrader = () => {
    setFalse();
  };
  console.log(currentUser);
  return (
    <Wrapper>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        fixed="top"
        className="shadow-sm"
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
                <FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon>{" "}
                  About
                </Link>
              </Nav.Link>
              {currentUser ? (
                <Nav.Link>
                  <Link class="nav-link" onClick={handleLogout}>
                    Logout{" "}
                    <FontAwesomeIcon icon={faSignOutAlt}></FontAwesomeIcon>
                  </Link>
                </Nav.Link>
              ) : (
                <Nav.Link>
                  <NavDropdown title="Register" id="collasible-nav-dropdown">
                    <NavDropdown.Item>
                      <Link
                        class="nav-link"
                        to="/signup"
                        onClick={handleFarmer}
                      >
                        Farmer{" "}
                        <FontAwesomeIcon icon={faUserPlus}></FontAwesomeIcon>
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        class="nav-link"
                        to="/signup"
                        onClick={handleTrader}
                      >
                        Trader{" "}
                        <FontAwesomeIcon icon={faUserClock}></FontAwesomeIcon>
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav.Link>
              )}

              {!currentUser ? (
                <Nav.Link>
                  <Link class="nav-link" to="/login">
                    <FontAwesomeIcon icon={faSignInAlt}></FontAwesomeIcon> Login
                  </Link>
                </Nav.Link>
              ) : null}
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
    opacity: 0.8;
    text-decoration: none;
    font-size: 1.2rem;
    color: #5c342f;
    /* transition: border-radius 200ms linear; */
  }
  .nav-link:hover {
    opacity: 1;
    text-decoration: none;
    color: #28a745 !important;
    /* text-decoration-color: #5c342f !important; */
    /* border-radius: 30px; */
    /* background-color: lightgrey; */
    // font-weight: 500;
  }
`;

export default NavbarComponent;
