import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import firebase, { fire } from "../firebase";

const CropContext = React.createContext();

export const CropProvider = ({children}) => {
    const createCrop = async (values) => {
        console.log(values);
        try {
            const res = await fire.collection('crops').add(values);
        } catch (error) {
            alert("Error in writing DB");
            console.log(error);
        }
    }
    return <CropContext.Provider value={{createCrop}}>{children}</CropContext.Provider>
}

export const useCropContext = () =>{
    return useContext(CropContext);
}