import React, { useContext, useEffect, useState } from 'react'
import firebase from "../firebase"
import { Link,useHistory} from "react-router-dom";


const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
    const [currentUser,setCurrentUser]= useState(null)
   
    // sign up function 
    const signup=async (number,name)=>{
        console.log("signing up",number)            
         window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
        {
            size:"invisible"         
        });
        console.log("signing up",window.recaptchaVerifier)
        await firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier)
        .then(function(e){
            console.log("inside then")
            let code = prompt("enter the otp")
            console.log("code",code)
            if(code==null)
            {
                return;
            }
            e.confirm(code)
            .then(function(result){
              setCurrentUser(result.user)
              
              console.log("user123",result.user)
              console.log("user123",currentUser)
             
             
            })
            .catch((err)=>{
               console.log("error",err) 
            })
        })
        .catch((err)=>{
            console.log("error",err) 
         })
 
    }
   
    const logout=async ()=>{

        await firebase.auth().signOut().then(() => {
            // Sign-out successful.
            console.log(currentUser)
            setCurrentUser(null);
            console.log("abc",currentUser)
          }).catch((error) => {
            // An error happened.
            console.log("error ",error)
          });
    }
    let value={
        signup,
        currentUser,
        logout
    }

   


    return (
        <UserContext.Provider value={value} >{children}</UserContext.Provider>
      )
    
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}