import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home, Error, About, Login, Signup, PrivateRoute } from "./pages";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <Router>
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

        <Route path="*">
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
