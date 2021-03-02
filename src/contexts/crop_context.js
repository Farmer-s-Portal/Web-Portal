import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";
import reducer from '../reducers/crops_reducer';
import { useUserContext } from "./user_context";

const CropContext = React.createContext();

const initalState = {
    allCrops: []
}

export const CropProvider = ({children}) => {
    const {currentUser} = useUserContext();
    const [state, dispatch] = useReducer(reducer, initalState);
    const getAllCrops = async ()=>{
        let temp = [];
        (await fire.collection('crops').get()).docs.forEach(crop => {
            temp.push(crop.data());
        });
        return temp;
    }
    useEffect(() => {
        getAllCrops().then(function(data){
            dispatch({type:"SET_CROPS", payload: data});
        })
    },[]);
    const createCrop = async (values) => {
        console.log(values);
        values={...values,userID:currentUser.uid}
        try {
            const res = await fire.collection('crops').add(values);
            const res2=await fire.collection('users').doc(currentUser.uid)
                     .update({
                         posts: firebase.firestore.FieldValue.arrayUnion(res.id)                    })
        } catch (error) {
            alert("Error in writing DB");
            console.log(error);
        }
    }
    return <CropContext.Provider value={{...state, createCrop, getAllCrops}}>{children}</CropContext.Provider>
}

export const useCropContext = () =>{
    return useContext(CropContext);
}