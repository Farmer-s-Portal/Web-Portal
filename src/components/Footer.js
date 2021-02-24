import React from "react";
import "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressBook,faPhone,faEnvelopeOpenText} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="bg-light p-3 shadow-lg">
      <div className="container" style={{textAlign:"center"}}>
      <span className="m-0" style={{fontSize:"2rem"}}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>{" "}Contact Us</span>
      <div style={{fontSize:"1.2rem"}}>
      <address>
      <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon> Click 
         <a href="mailto:farmers.portal.adm@gmail.com"> here</a> to drop an email
      </address>
      <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> Phone Number <a href="tel:9315880376">9315880376</a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
