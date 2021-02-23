import React from "react";
import "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";
function Footer() {
  return (
    <div className="bg-light p-3 shadow-lg">
      <span className="m-0" style={{fontSize:"2rem"}}><FontAwesomeIcon icon={faAddressBook}></FontAwesomeIcon>{" "}Contact Us</span>
      <div style={{fontSize:"1.2rem"}}>
        @faemers.portal.adm@gmail.com
        <br></br>
        Phone: 93158 80376
      </div>
    </div>
  );
}

export default Footer;
