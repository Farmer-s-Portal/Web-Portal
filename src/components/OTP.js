import React from 'react'
import styled from 'styled-components'
import {Form, Card, Container} from 'react-bootstrap'
import { Link } from "react-router-dom";

const OTP=()=> {
    
    const handleSubmit=()=>{

    }
    return (
        <Wrapper>
        <Card className="text-center contain">
        <h2 className="text-center mb-4">Sign Up</h2>
         <Form className="text-center" >
            <label>OTP</label>
            <input className="w-100" type="number" name="otp" placeholder="enter OTP" />
            <button className=" btn" type="submit">Send OTP</button>
       </Form>   
     
    </Card>
  
   
    </Wrapper>
    )
}

const Wrapper = styled.section`
align-items:center;
text-align:center;
justify-content:center;
.contain{
   margin:auto;
   width:40%;
   display block;
   margin-top:100px;
   margin-bottom:100px;
   height:245px;
   align-items:center;
   border: 2px hsl(22deg 31% 52%) solid;
}
h2 {
    background: hsl(22deg 31% 52%);
    margin:5px:
    padding:10px;
}
input{
    border: 1px hsl(22deg 31% 52%) solid;
}
button{
    margin:10px;
    margin-top:10px;
    background: hsl(22deg 31% 52%);
    width:auto;
}

`
export default OTP
