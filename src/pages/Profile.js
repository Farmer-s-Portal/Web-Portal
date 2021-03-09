import React, {useRef,useState} from "react";
import { Col, Form, Row } from "react-bootstrap";
import { useUserContext } from "../contexts/user_context";
import {Button} from 'react-bootstrap'
function ProfilePage(){
    const {currentUser}=useUserContext();
    return (
        <div className='container'>
            <div className='pro-back' style={{textAlign:'left',width:'80%',margin:'20px auto',padding:'20px'}}>
            <h1 style={{color:'#5c342f'}}>Account Profile</h1>
            <hr></hr>
            <Form>
            <Form.Group as={Row}>
            <Form.Label column sm="2"  style={{color:'#5c342f'}}>
                Name
            </Form.Label>
            <Col sm="10">
            <Form.Control
            style={{color:'black'}}
            type="text"
            defaultValue={currentUser.name}
            disabled
            />
            </Col>
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2" style={{color:'#5c342f'}}>
                P.No.
            </Form.Label>
            <Col sm="10">
            <Form.Control
            type="text"
            style={{color:'black'}}
            defaultValue={currentUser.phone}
            disabled
            />
            </Col>
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2" style={{color:'#5c342f'}}>
                Address
            </Form.Label>
            <Col sm="10">
            <Form.Control
            as="textarea"
            rows={3}
            style={{color:'black'}}
            defaultValue={currentUser.address}
            disabled
            />
            </Col>
            </Form.Group>

            <Form.Group as={Row}>
            <Form.Label column sm="2" style={{color:'#5c342f'}}>
                User Type
            </Form.Label>
            <Col sm="10">
            <Form.Control
            type="text"
            style={{color:'black'}}
            defaultValue={currentUser.type}
            disabled
            />
            </Col>
            </Form.Group>
            </Form>
            <br></br>
            <Button  variant='outline-success'>Update</Button>
            <hr></hr>
            <h3 style={{color:'#5c342f'}}>Recent posts</h3>
            </div>
        </div>
    );
}

export default ProfilePage;