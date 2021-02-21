import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./contexts/user_context";
import {ProductsProvider} from './contexts/product_context';
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

ReactDOM.render(
  <UserProvider>
    <ProductsProvider>
      <React.StrictMode>
      <App />
    </React.StrictMode>
    </ProductsProvider>   
  </UserProvider>,
  document.getElementById("root")
);
