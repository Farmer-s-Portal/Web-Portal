import React from "react";
import { Switch, Route } from "react-router-dom";

import {
  Home,
  Error,
  About,
  Login,
  Signup,
  PrivateRoute,
  AllCrops,
  Mandi,
  Adv,
  SellCrop,
} from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/about">
          <About />
        </Route>

        <PrivateRoute exact path="/login">
          <Login />
        </PrivateRoute>

        <PrivateRoute exact path="/signup">
          <Signup />
        </PrivateRoute>

        <Route exact path="/mandi">
          <Mandi />
        </Route>
        <Route exact path="/sell-crop">
          <SellCrop />
        </Route>
        <Route exact path="/give-add">
          <Adv />
        </Route>
        <Route exact path="/all-crops">
          <AllCrops />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
