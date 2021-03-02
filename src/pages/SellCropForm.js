import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Form, Row, Container, Col, Button, InputGroup } from "react-bootstrap";
import { useProductsContext } from "../contexts/product_context";
import { useUserContext } from "../contexts/user_context";
import {useCropContext} from '../contexts/crop_context';
import {
  faRupeeSign
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SellCropForm() {
  const [validated, setValidated] = useState(false);
  const {currentUser} = useUserContext();
  const {createCrop, allCrops} = useCropContext();
  const history = useHistory();
  const handleSubmit = async (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    }
    else{
      const data = new FormData(event.target);
      let values = Object.fromEntries(data.entries());
      values.userId = currentUser.uid;
      try {
        await createCrop(values);
        alert("Crop Posted");
        history.push('/all-crops');
      } catch (error) {
        alert("Error in Posting Crop");
        console.log("Error", error);
      }
    }
  };
  const {commodities} = useProductsContext();
  const Warpper = styled.p`
  text-align: center;
    form{
      width: 50%;
      margin: auto;
      background-color: white;
      text-align: left;
      padding: 2rem;
      border-radius:10px;
    }
  `;
  return (
    <Warpper>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className="shadow">
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label id="comm" className="">
              Commodity
            </Form.Label>
            <Form.Control
              as="select"
              name="comm"
              className=""
              required
            >
              {commodities.map((comm) => {
                return <option value={comm}>{comm}</option>;
              })}
            </Form.Control>
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Expected Quantity (in Tonnes)</Form.Label>
              <Form.Control
                required
                name="quantity"
                type="number"
                defaultValue="100"
              />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomPrice">
            <Form.Label>Expected Price</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faRupeeSign} style={{ color: "goldenrod" }}></FontAwesomeIcon></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                name="price"
                aria-describedby="inputGroupPrepend"
                defaultValue="10,000"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required name="city"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required name="state"/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Eg: 110043" name="zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Row>
          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                defaultValue={currentUser.phone.split('+91').pop()}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a number
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Col>
            <Form.Label>Email (optional)</Form.Label>
            <Form.Control type="text"></Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={currentUser.name}
              disabled
            />
          </Col>
          <Col>
            <Form.Label>Aadhar Number</Form.Label>
            <Form.Control
              value={currentUser.aadharNumber}
              disabled
            />
          </Col>
        </Row>
        <br></br>
        <Form.Group>
          <Form.Check
            required
            label="Agree to all terms and conditions"
            feedback="You must agree before submitting."
          />
        </Form.Group>
        <div className="text-center">
          <Button type="submit" variant="success">Publish Crop</Button>
        </div>
      </Form>
    </Warpper>
  );
}

export default SellCropForm;
