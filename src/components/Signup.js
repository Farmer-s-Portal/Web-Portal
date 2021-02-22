import React, { useRef, useState } from "react";
import styled from "styled-components";
import {
  Form,
  Row,
  Container,
  Col,
  Button,
  InputGroup,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useUserContext } from "../contexts/user_context";

const Signup = () => {
  const numberRef = useRef();
  const nameRef = useRef();
  const lnameRef = useRef();
  const anumRef = useRef();
  const add1Ref = useRef();
  const add2Ref = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const zipRef = useRef();
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const {signup, currentUser,isFarmer } = useUserContext();

  var type=isFarmer ? 'Farmer' :"Trader";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      var formVals={
        number: "+91" + numberRef.current.value,
        name:    nameRef.current.value+" "+
                 lnameRef.current.value,
        address: add1Ref.current.value+ " "+
                 add2Ref.current.value+ " "+
                 cityRef.current.value+ " "+
                 zipRef.current.value,
        aadhar: anumRef.current.value,
        type: stateRef.current.value
      }
    
      await signup(formVals);
      // await updateDb(num,name);
      history.push("/");
      console.log("user", currentUser);
    } catch (error) {
      console.log("err", error);
    }
  };

  return (
    <Wrapper>
      <hr></hr>
      <Container>
        <h2>Sign Up</h2>
      </Container>
      {/* <Form className="text-center" onSubmit={handleSubmit}>
            <label>Phone</label>
            <input className="w-100" type="text" name="phone" ref={numberRef} placeholder="enter phone number" />
            <label>Name</label>
            <input className="w-100" type="text" name="name" ref={nameRef} placeholder="enter name" />
            <button className=" btn" disabled={loading} id='recaptcha-container' type="submit">Send OTP</button>
       </Form>    */}
      <hr></hr>
      <Container>
        <Row>
          <Col sm={1} md={2}></Col>
          <Col sm={12} md={8}>
            <Row>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col xs={12} sm={6}>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control
                        name="name"
                        ref={nameRef}
                        type="text"
                        placeholder="FName"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group controlId="formGridEmail">
                      <Form.Label>Second Name</Form.Label>
                      <Form.Control
                        name="name"
                        ref={lnameRef}
                        type="text"
                        placeholder="LName"
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="formGridPassword">
                      <Form.Label>Phone number</Form.Label>
                      <InputGroup>
                        <InputGroup.Prepend>
                          <InputGroup.Text>+91</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                          name="phone"
                          ref={numberRef}
                          placeholder="Phone Number"
                        />
                      </InputGroup>
                      <Form.Text id="passwordHelpBlock" muted>
                        Phone number should be linked to your aadhar number.
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12}>
                    <Form.Group controlId="formGridAddress1">
                      <Form.Label>Aadhar Number</Form.Label>
                      <Form.Control
                        placeholder="1234 XXXX 6789"
                        ref={anumRef}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Address Line 1</Form.Label>
                      <Form.Control  ref={add1Ref} placeholder="House/Apartment Number, Village/Town" />
                    </Form.Group>
                  </Col>
                  <Col xs={12}>
                    <Form.Group controlId="formGridAddress2">
                      <Form.Label>Address Line 2</Form.Label>
                      <Form.Control ref={add2Ref} placeholder="Society/Locality/Police Station" />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={4}>
                    <Form.Group controlId="formGridCity">
                      <Form.Label type="text">City</Form.Label>
                      <Form.Control ref={cityRef} placeholder="Eg: New Delhi" />
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Form.Group controlId="formGridState">
                      <Form.Label>Type</Form.Label>
                      <Form.Control ref={stateRef} value={type} as="select" defaultValue="Choose...">
                        <option>Farmer</option>
                        <option>Trader</option>
                      
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col xs={12} sm={4}>
                    <Form.Group controlId="formGridZip">
                      <Form.Label>Zip</Form.Label>
                      <Form.Control ref={zipRef} type="number" placeholder="Eg: 110043" />
                    </Form.Group>
                  </Col>
                  
                </Row>
                <Row>
                  <Col xs={12}>
                    <Form.Group id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I agree to all the policies, terms and conditions."
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Button variant="success" id='recaptcha-container' disabled={loading} type="submit">
                  Register
                </Button>
              </Form>
            </Row>
          </Col>
          <Col sm={1} md={2}></Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* align-items:center; */
  /* text-align:center; */
  /* justify-content:center; */
  /* background-color: lightslategrey; */
  hr,
  h2 {
    /* margin: 0; */
  }
  form {
    margin: auto;
  }
  input {
    /* margin-bottom: 20px; */
  }
  input:focus,
  select:focus {
    border-color: greenyellow;
    box-shadow: 0 0 0 0.2rem #dbf3dc;
  }
  label {
    font-weight: 500;
    padding-left: 5px;
    color: #5c342f;
  }
  .form-group {
    text-align: left;
  }
`;
export default Signup;
