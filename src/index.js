import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { UserProvider } from "./contexts/user_context";
import { ProductsProvider } from "./contexts/product_context";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <Router>
    <UserProvider>
      <ProductsProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductsProvider>
    </UserProvider>
  </Router>,
  document.getElementById("root")
);
