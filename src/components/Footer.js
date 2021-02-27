import React from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faPhone,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <Wrapper>
      <div className="bg-light p-3 shadow-lg">
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 100px;

  .contact-us {
    font-size: 2rem;
  }
`;

export default Footer;
