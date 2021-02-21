import React ,{useRef ,useState } from 'react'
import styled from 'styled-components'
import {Form, Card, Container, Col, Button, InputGroup} from 'react-bootstrap'
import { Link,useHistory} from "react-router-dom";
import { useUserContext } from "../contexts/user_context";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { } from 'react-bootstrap';

const Signup=()=> {
    const numberRef=useRef();
    const nameRef=useRef();
    const history=useHistory();
    const [loading, setLoading] = useState(false)
    const {signup,currentUser}=useUserContext();


 
    const handleSubmit= async (e)=>{
        e.preventDefault()
       try {
        console.log("trying")
        setLoading(true);
        console.log("trying",numberRef.current.value)
        const num="+91"+numberRef.current.value
        const name=nameRef.current.value
        await  signup(num,name)
        history.push('/');
        console.log("user",currentUser)
           
                 

       } catch (error) {
            console.log("err",error)
       }
    }

    return (
        <Wrapper>
            <hr></hr>
        <h2>Sign Up</h2>
         {/* <Form className="text-center" onSubmit={handleSubmit}>
            <label>Phone</label>
            <input className="w-100" type="text" name="phone" ref={numberRef} placeholder="enter phone number" />
            <label>Name</label>
            <input className="w-100" type="text" name="name" ref={nameRef} placeholder="enter name" />
            <button className=" btn" disabled={loading} id='recaptcha-container' type="submit">Send OTP</button>
       </Form>    */}
       <hr></hr>
     <Form onSubmit={handleSubmit}>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control name="name" ref={nameRef} type="text" placeholder="FName" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Second Name</Form.Label>
            <Form.Control name="name" ref={nameRef} type="text" placeholder="LName" />
            </Form.Group>
        </Form.Row>
        <Form.Group controlId="formGridPassword">
            <Form.Label>Phone number</Form.Label>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>+91</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="phone" ref={numberRef} type="number" placeholder="Phone Number" />
            </InputGroup>
            <Form.Text id="passwordHelpBlock" muted>
            Phone number should be linked to your aadhar number.
            </Form.Text>
        </Form.Group>
        <Form.Group controlId="formGridAddress1">
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control type="number" placeholder="1234 XXXX 6789" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 1</Form.Label>
            <Form.Control  placeholder="House/Apartment Number, Village/Town" />
        </Form.Group>
        <Form.Group controlId="formGridAddress2">
            <Form.Label>Address 2</Form.Label>
            <Form.Control placeholder="Society/Locality/Police Station" />
        </Form.Group>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label type="text">City</Form.Label>
            <Form.Control placeholder="Eg: New Delhi"/>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
                <option>Choose...</option>
                <option>Delhi</option>
                <option>Haryana</option>
                <option>Uttar Pardesh</option>
                <option>Madhya Pardesh</option>
            </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="number" placeholder="Eg: 110043"/>
            </Form.Group>
        </Form.Row>

        <Form.Group id="formGridCheckbox">
            <Form.Check type="checkbox" label="I agree to all the ploicies, terms and conditions." required/>
        </Form.Group>

        <Button variant="success" type="submit">
            Register
        </Button>
        </Form>
    </Wrapper>
    )
}

const Wrapper = styled.section`
/* align-items:center; */
/* text-align:center; */
/* justify-content:center; */
/* background-color: lightslategrey; */
hr,h2{
    /* margin: 0; */
}
form{
    width: 30%;
    margin: auto;
}
input{
    /* margin-bottom: 20px; */
}
input:focus,select:focus{
    border-color: greenyellow;
    box-shadow: 0 0 0 0.2rem #dbf3dc;
}
label{
    font-weight: 500;
    padding-left: 5px;
    color: #5c342f;
}
.form-group{
    text-align: left;
}
/* .contain{
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
} */

`
export default Signup
