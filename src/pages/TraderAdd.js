import React from "react";
import {useHistory} from "react-router-dom";
import styled from "styled-components";
import { Form,Col,Button,InputGroup } from "react-bootstrap";

import {faRupeeSign} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useProductsContext} from '../contexts/product_context'
import { useAdvContext } from "../contexts/adv_context";
import { useUserContext } from "../contexts/user_context";
function TraderAdd() {
  const history=useHistory();
  const {createAdv} = useAdvContext();
  const {currentUser} = useUserContext();
  const {commodities} = useProductsContext();
  const handleSubmit= async (e)=>{
    const form = e.currentTarget;
    e.preventDefault();

    const data = new FormData(e.target);
    let values = Object.fromEntries(data.entries());

    try {
      await createAdv(values);
      history.push('/');
    } catch (error) {
      alert("Error in Posting Crop");
      console.log("Error", error);
    }
  }
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
      <Form className='shadow' onSubmit={handleSubmit} >
        <Form.Row>
          <Form.Group as={Col} md='4'>
            <Form.Label id='comm' className="">
              Commodity
            </Form.Label>
            <Form.Control 
              as='Select'
              name='comm'
              className=''
              required
              >
                 {commodities.map((comm, index)=>{
                  return <option value={comm} key={index}>{comm}</option>
                })
              }
              </Form.Control>
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4">
              <Form.Label>Quantity (in Tonnes)</Form.Label>
              <Form.Control
                required
                name="quantity"
                type="number"
                defaultValue="100"
              />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='4'>
             <Form.Label>Price Range</Form.Label>
             <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend"><FontAwesomeIcon icon={faRupeeSign} style={{ color: "goldenrod" }}></FontAwesomeIcon></InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="Range"
                name="price"
                aria-describedby="inputGroupPrepend"
                min={1000}
                max={5000}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md='3'>
            <Form.Label>Quality (in Grades)</Form.Label>
            <Form.Control
              as="select"
              name='quality'
              required
              className=''
            >
              <option value='A'>A-Grade</option>
              <option value='B'>B-Grade</option>
              <option value='C'>C-Grade</option>
              <option value='D'>D-Grade</option>
              <option value='E'>E-Grade</option>
            </Form.Control>
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md='4'>
              <Form.Label>Required Before</Form.Label>
              <Form.Control type='date' required/>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required name="city" required/>
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required name="state" required/>
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
        <Form.Row>
          <Col>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              value={currentUser.name}
              required
              disabled
            />
          </Col>
           <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Phone Number</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Prepend>
                <InputGroup.Text id="inputGroupPrepend">+91</InputGroup.Text>
              </InputGroup.Prepend>
              <Form.Control
                type="text"
                aria-describedby="inputGroupPrepend"
                value={currentUser.phone.split('+91').pop()}
                name="number"
                disabled
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a number
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
           <Col>
            <Form.Label>Email (optional)</Form.Label>
            <Form.Control type="text" name="email"></Form.Control>
          </Col>
        </Form.Row>
        <br></br>
        <Form.Group>
          <Form.Check
            required
            label="Agree to all TnC"
            feedback='You must be agree to all terms and conditions before submitting' />
        </Form.Group>
        <div className="text-center">
          <Button type='submit' variant='success'>Publish Advertisement</Button>
        </div>
      </Form>
    </Warpper>
  )
}

export default TraderAdd;
