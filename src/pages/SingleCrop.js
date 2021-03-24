import React from "react";
import Loading from "../components/Loading";
import {useParams} from 'react-router-dom'
import { useCropContext } from "../contexts/crop_context";
import firebase, { fire } from "../firebase";
let cropref;
const getCrop = async (id) => {
    // try{
    //     cropref = await fire.collection('crops').doc(id);
    //     console.log("asdfasdfasdfadf");
    //     console.log(cropref.get());
    // }catch(error){
    //     alert("Error in showing from DB");
    //     console.log(error);
    // }
    // try{
    //     cropref=await fire.collection('crops').doc(id);
    //     cropref.get().then((doc)=>{
    //         if(doc.exists){
    //             console.log("Crop Data",doc.data());
    //         }else{
    //             console.log("No such document!"); 
    //         }
    //     }).catch((error) => {
    //         console.log("Error getting document:", error);
    //     });
    // }catch(error){
    //     alert("Error in showing from DB");
    //     console.log(error);
    // }
}
const SingleCrop = (props) => {
    const {id}=useParams()
    getCrop(id)
    const {loading}=useCropContext();
    return (
        <div>
            <h1>Single Product Page {id}</h1>
        </div>
    );
};

export default SingleCrop;
