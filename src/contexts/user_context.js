import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";

const getLocalStorage = () => JSON.parse(localStorage.getItem("user")) || null;
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getLocalStorage);
  const [isFarmer, setIsFarmer] = useState(true);

  // sign up function
  const signup = async (formVals) => {
    console.log(formVals.number);
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    console.log("signing up", window.recaptchaVerifier);
    await firebase
      .auth()
      .signInWithPhoneNumber(formVals.number, window.recaptchaVerifier)
      .then(function (e) {
        console.log("inside then");
        let code = prompt("enter the otp");
        console.log("code", code);

        if (code == null) {
          return;
        }

        e.confirm(code)
          .then(function (result) {
            console.log("adding to db");
            setCurrentUser(result.user);
            localStorage.setItem("user", JSON.stringify(result.user));
            console.log("user123", result.user);
            console.log("user12", result.user.uid);

            fire
              .collection("users")
              .doc(result.user.uid)
              .set({
                name: formVals.name,
                phone: formVals.number,
                aadharNumber: formVals.aadhar,
                address: formVals.address,
                type: formVals.type,
              })
              .then(function () {
                console.log("123");
              });
          })
          .catch((err) => {
            console.log("error", err);
          });
      });

    console.log("after everything");
  };

  const logout = async () => {
    await firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        console.log(currentUser);
        setCurrentUser(null);
        localStorage.removeItem("user");
        console.log("abc", currentUser);
      })
      .catch((error) => {
        // An error happened.
        console.log("error ", error);
      });
  };
  const setTrue = () => {
    setIsFarmer(true);
  };

  const setFalse = () => {
    setIsFarmer(false);
  };

  let value = {
    signup,
    currentUser,
    logout,
    setTrue,
    setFalse,
    isFarmer,
    // updateDb
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
