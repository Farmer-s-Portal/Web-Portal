import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <h3>navbar</h3>
      <ul>
        <li>
          <Link to="/">home</Link>{" "}
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
