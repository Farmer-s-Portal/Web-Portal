import React from "react";
import { Switch, Route } from "react-router-dom";
import {ProductsProvider} from './contexts/product_context';
import {AdvProvider} from "./contexts/adv_context"
import {
  Home,
  Error,
  About,
  Login,
  Signup,
  PrivateRoute,
  MyAllCrops,
  Mandi,
  Adv,
  SellCrop,
  Profile,
  UpdateProfile,
  SingleCrop
} from "./pages";
import { Navbar, Footer } from "./components";
import "./App.css"
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
          <ProductsProvider>
            <Mandi />
          </ProductsProvider>
        </Route>
        <Route exact path="/sell-crop">
          <ProductsProvider>
            <SellCrop />
          </ProductsProvider>
        </Route>
        <Route exact path="/give-add">
          <ProductsProvider>
            <AdvProvider>
              <Adv />
            </AdvProvider>
          </ProductsProvider>
        </Route>
        <Route exact path="/profile">
          <Profile />
        </Route>
        <Route exact path="/profile/update">
          <UpdateProfile />
        </Route>
        <Route exact path="/my-all-crops">
          <MyAllCrops />
        </Route>
        <Route exact path="/crop/:id" component={SingleCrop}>
          <SingleCrop />
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
