import React, { useContext, useEffect, useState } from 'react'
import firebase from "../firebase"


const UserContext = React.createContext()

export const UserProvider = ({ children }) => {

    const signup=(number)=>{

        console.log("signing up",number)
        setTimeout(function() {
            
                window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container",
                {
                   size:"invisible"
                    // other options
                });
          
        console.log("signing up",window.recaptchaVerifier)
        firebase.auth().signInWithPhoneNumber(number,window.recaptchaVerifier)
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
                console.log("user",result.user)
            })
            .catch((err)=>{
               console.log("error",err) 
            })
        })
        .catch((err)=>{
            console.log("error",err) 
         })
     console.log("error")
        },2000)
    }
    let value={
        signup,
        val:"1234"
    }
    return (
        <UserContext.Provider value={value} >{children}</UserContext.Provider>
      )
    
}



// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}