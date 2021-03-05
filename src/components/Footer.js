import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faPhone,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <Wrapper className="bg-light" id="footer">
      <div className="bg-light p-5">
        <div className="container">
          <span className="m-0 contact-us">
            <FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon> Contact Us
          </span>
          <div>
            <address>
              <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>{" "}
              Click
              <a href="mailto:farmers.portal.adm@gmail.com"> here</a> to drop an
              Email
            </address>
            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone:{" "}
            <a href="tel:9315880376">9315880376</a>
            <br></br>
            <a style={{ color: "#3B5998" }} href="#">
              <FontAwesomeIcon
                className="brand-style"
                icon={faFacebook}
              ></FontAwesomeIcon>
            </a>
            <a style={{ color: "#55ACEE" }} href="#">
              <FontAwesomeIcon
                className="brand-style"
                icon={faTwitter}
              ></FontAwesomeIcon>
            </a>
            <a style={{ color: "#125688" }} href="#">
              <FontAwesomeIcon
                className="brand-style"
                icon={faInstagram}
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  .contact-us {
    font-size: 2rem;
  }
`;

export default Footer;
