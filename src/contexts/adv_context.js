import React ,{useContext} from 'react'
import {useUserContext} from "./user_context"
import firebase, { fire } from "../firebase";

const AdvContext = React.createContext();

export const AdvProvider=({children})=> {
   const {currentUser}=useUserContext(); 
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
    return (<AdvContext.Provider value={{createAdv}}>{children}</AdvContext.Provider>);
}

export const useAdvContext = () => {
    return useContext(AdvContext);
  };
  


