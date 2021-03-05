import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";
import reducer from "../reducers/crops_reducer";
import { useUserContext } from "./user_context";

const initalState = {
  allCrops: [
    {
      comm: "kela",
      price: "500",
      quantity: "100",
      city: "Hyderabad",
      state: "AP",
      zip: "530065",
      user: { name: "Dagar" },
    },
  ],
  loading: true,
  // allCrops: []
};
const CropContext = React.createContext();

export const CropProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initalState);

  const getAllCrops = () => {
    dispatch({ type: "SET_LOADING" });
    let temp = [];
    fire
      .collection("crops")
      .get()
      .then(async (data) => {
        for (let i = 0; i < data.docs.length; ++i) {
          const crop = data.docs[i];
          await crop
            .data()
            .user.get()
            .then(async (res) => {
              console.log("res", res.data());
              let temp2 = await crop.data();
              temp2 = { ...temp2, user: res.data() };
              temp.push(temp2);

              console.log("end get crp 2nd then");
            });
        }

        dispatch({ type: "SET_CROPS", payload: temp });
        dispatch({ type: "NOT_LOADING" });
        console.log("end get crp 1st then");
      });
  };

  useEffect(() => {
    getAllCrops();
  }, []);

  const createCrop = async (values) => {
    console.log(values);
    values = { ...values, user: fire.collection("users").doc(currentUser.uid) };
    try {
      const res = await fire.collection("crops").add(values);
      const ref = fire.collection("crops").doc(res.id);
      const res2 = await fire
        .collection("users")
        .doc(currentUser.uid)
        .update({
          posts: firebase.firestore.FieldValue.arrayUnion(ref),
        });
    } catch (error) {
      alert("Error in writing DB");
      console.log(error);
    }
  };
  return (
    <CropContext.Provider value={{ ...state, createCrop, getAllCrops }}>
      {children}
    </CropContext.Provider>
  );
};

export const useCropContext = () => {
  return useContext(CropContext);
};
