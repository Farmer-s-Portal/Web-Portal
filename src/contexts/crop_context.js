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
        const all=await fire.collection('crops').get()
        all.docs.forEach(async crop => {
            const res=await crop.data().user.get()
            
                 console.log("res",res.data())

                 let temp2=crop.data();
                 temp2={...temp2,user:res.data()}
                 temp.push(temp2);
         
             
           
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
        values={...values,
            user:fire.collection('users').doc(currentUser.uid)}
        try {
            const res = await fire.collection('crops').add(values);
            const ref= fire.collection('crops').doc(res.id)
            const res2=await fire.collection('users').doc(currentUser.uid)
                     .update({
                         posts: firebase.firestore.FieldValue.arrayUnion(ref)                    })
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