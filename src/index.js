import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./contexts/user_context";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>,
  document.getElementById("root")
);
