import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";

const getLocalStorage = () => JSON.parse(localStorage.getItem("user")) || null;
const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(getLocalStorage);
  const [isFarmer, setIsFarmer] = useState(true);
  const history = useHistory();
  // sign up function

  const signup = async (formVals) => {
    console.log(formVals.number);

    const res = await fire
      .collection("users")
      .where("phone", "==", formVals.number)
      .get();

    console.log("res data", res.docs);
    if (res.docs.length > 0) {
      alert("User Already Exists");
      history.push("/login");
      return;
    }

    console.log("signup fn in context");

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
            fire
              .collection("users")
              .doc(result.user.uid)
              .set({
                name: formVals.name,
                phone: formVals.number,
                aadharNumber: formVals.aadhar,
                address: formVals.address,
                type: formVals.type,
                posts:[]
              })
              .then(function () {
                fire.collection('users')
                  .doc(result.user.uid)
                  .get()
                  .then(function (res) {
                    let temp=res.data();
                    temp={...temp,uid:result.user.uid}
                    setCurrentUser(temp);
                    localStorage.setItem("user", JSON.stringify(temp));
                  });
              });
          })
          .catch((err) => {
            console.log("error", err);
          });
      });

    console.log("after everything");
  };

  const login = async (number) => {
    number = "+91" + number;
    const userRef = fire.collection("users");
    const snapshot = await userRef.where("phone", "==", number).get();

    if (!snapshot) {
      // alert show krke login p redirect krne ki functionality
      alert("User doesn't Exists / invalid phone number");
      return;
    }

    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );

    await firebase
      .auth()
      .signInWithPhoneNumber(number, window.recaptchaVerifier)
      .then(function (e) {
        console.log("inside then");
        let code = prompt("enter the otp");
        console.log("code", code);

        if (code == null) {
          return;
        }

        e.confirm(code)
          .then(function (result) {
            fire
              .collection("users")
              .doc(result.user.uid)
              .get()
              .then(function (res) {
                let temp=res.data();
                temp={...temp,uid:result.user.uid}
                setCurrentUser(temp);
                localStorage.setItem("user", JSON.stringify(temp));
              });
          })
          .catch((err) => {
            console.log("error", err);
          });
      });
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
    login,
    // updateDb
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
