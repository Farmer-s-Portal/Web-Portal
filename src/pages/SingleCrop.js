import React, {useState,useEffect} from "react";
import Loading from "../components/Loading";
import {useParams} from 'react-router-dom'
import { useCropContext } from "../contexts/crop_context";
import firebase, { fire } from "../firebase";

const SingleCrop = (props) => {
    let cropTemp = "HELLO";
    const [crop, setCrop]=useState({
        city:"",
        comm:"",
        date:"",
        email:"",
        number:"",
        price:"",
        quantity:""
    });
    const getCrop = async (id) => {
        console.log("EXECUTED");
        try{
            let cropref = await fire.collection('crops').doc(id);
            cropTemp = (await cropref.get()).data();
            console.log("temp crop ",cropTemp);
            setCrop({
                ...crop,
                city:cropTemp.city,
                comm:cropTemp.comm,
                date:cropTemp.date,
                email:cropTemp.email,
                number:cropTemp.number,
                price:cropTemp.price,
                quantity:cropTemp.quantity
            })
            
            //
        }catch(error){
            alert("Error in showing from DB");
            console.log(error);
        }
    }
    const {id}=useParams();
    
    useEffect(async ()=>{
        console.log("useEffect")
         getCrop(id)
        // setCrop(cropTemp)
        console.log("this is crop",crop)
    },[])
    const {loading}=useCropContext();
    if (loading) return <Loading />;
    return (
        <div>
            <h1>Single Product Page {crop.city}</h1>
        </div>
    );
};

export default SingleCrop;
