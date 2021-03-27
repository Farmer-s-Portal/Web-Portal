import React, {useState} from "react";
import Loading from "../components/Loading";
import {useParams} from 'react-router-dom'
import { useCropContext } from "../contexts/crop_context";
import firebase, { fire } from "../firebase";

const SingleCrop = (props) => {
    let cropTemp = "HELLO";
    const getCrop = async (id) => {
        console.log("EXECUTED");
        try{
            let cropref = await fire.collection('crops').doc(id);
            cropTemp = (await cropref.get()).data();
            console.log(cropTemp);
        }catch(error){
            alert("Error in showing from DB");
            console.log(error);
        }
    }
    const {id}=useParams();
    getCrop(id)
    const {loading}=useCropContext();
    if (loading) return <Loading />;
    return (
        <div>
            <h1>Single Product Page {cropTemp}</h1>
        </div>
    );
};

export default SingleCrop;
