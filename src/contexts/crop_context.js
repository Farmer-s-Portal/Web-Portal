import React, { useContext, useEffect, useReducer, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";
import reducer from '../reducers/crops_reducer';
import { useUserContext } from "./user_context";


const initalState = {
    allCrops: [{comm:"kela", price:"500",quantity:"100",city:"Hyderabad",state:"AP",zip:"530065",user:{name:"Dagar"}}]
    // allCrops: []
}
const CropContext = React.createContext();

export const CropProvider = ({children}) => {
    const {currentUser} = useUserContext();
    const [state, dispatch] = useReducer(reducer, initalState);
    const getAllCrops = ()=>{
        let temp = [];
        fire.collection('crops').get().then(function(data){
            data.docs.forEach(crop => {
                crop.data().user.get().then(function(res){
                    console.log("res",res.data())
                    let temp2=crop.data();
                    temp2={...temp2,user:res.data()}
                    temp.push(temp2);
                })
            })
        });
        return temp;
    }
    useEffect(async() => {
        let data = await getAllCrops();
        dispatch({type:"SET_CROPS", payload: data});
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