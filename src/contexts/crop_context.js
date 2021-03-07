import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";
import reducer from "../reducers/crops_reducer";
import { useUserContext } from "./user_context";

const initalState = {
  allCrops: [],
  loading: true,
};
const CropContext = React.createContext();

export const CropProvider = ({ children }) => {
  const { currentUser } = useUserContext();
  const [state, dispatch] = useReducer(reducer, initalState);

  const getMyAllCrops = async () => {
    dispatch({ type: "SET_LOADING" });
    let temp = [];
    await fire.collection('users').doc(currentUser.uid).get().then(async (data) => {
      let posts = data.data().posts;
      if(!posts)
        return;
      for(let i = 0; i < posts.length; i++)
        await posts[i].get().then(async result => {
          await result.data().user.get().then(async user => {
            let t = await result.data();
            t.user = await user.data();
            t.id = result.ref.id;
            temp.push(t);
          });
        })
    });
    dispatch({ type: "SET_CROPS", payload: temp });
    dispatch({ type: "NOT_LOADING" });
  };

  useEffect(() => {
    getMyAllCrops();
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
  const deleteCrop = async (cropID) => {
    try{
      let ref = await fire.collection('crops').doc(cropID);
      await fire.collection('users').doc(currentUser.uid).update({
        posts: firebase.firestore.FieldValue.arrayRemove(ref)
      })
      await ref.delete();
    }catch(error){
      alert("Error in deleting from DB");
      console.log(error);
    }
  }

  const createAdv = async (values)=>{
    values = { ...values, user: fire.collection("users").doc(currentUser.uid) };
    try {
        const res = await fire.collection("advs").add(values);
        const ref = fire.collection("advs").doc(res.id);
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

   }


  return (
    <CropContext.Provider value={{ ...state, createCrop, getMyAllCrops, deleteCrop,createAdv}}>
      {children}
    </CropContext.Provider>
  );
};

export const useCropContext = () => {
  return useContext(CropContext);
};
