import React, {useRef,useState} from "react";
import { Form } from "react-bootstrap";
import { useUserContext } from "../contexts/user_context";
import {Button} from 'react-bootstrap'
function ProfilePage(){
    const {currentUser}=useUserContext();
    return (
        <div className='container'>
            <div className='pro-back' style={{textAlign:'left',width:'80%',margin:'20px auto',padding:'20px'}}>
            <h1 style={{color:'#5c342f'}}>Account Profile</h1>
            <hr></hr>
            <Form.Group>
            <Form.Label style={{color:'#5c342f'}}>
                Name
            </Form.Label>
            <Form.Control
            style={{color:'black'}}
            type="text"
            defaultValue={currentUser.name}
            disabled
            />
            </Form.Group>

            <Form.Group>
            <Form.Label style={{color:'#5c342f'}}>
                Phone Number
            </Form.Label>
            <Form.Control
            type="text"
            style={{color:'black'}}
            defaultValue={currentUser.phone}
            disabled
            />
            </Form.Group>

            <Form.Group>
            <Form.Label style={{color:'#5c342f'}}>
                Address
            </Form.Label>
            <Form.Control
            type="text"
            style={{color:'black'}}
            defaultValue={currentUser.address}
            disabled
            />
            </Form.Group>

            <Form.Group>
            <Form.Label style={{color:'#5c342f'}}>
                User Type
            </Form.Label>
            <Form.Control
            type="text"
            style={{color:'black'}}
            defaultValue={currentUser.type}
            disabled
            />
            </Form.Group>
            <br></br>
            <Button  variant='outline-success'>Update</Button>
            <hr></hr>
            <h3 style={{color:'#5c342f'}}>Recent posts</h3>
            </div>
        </div>
    );
}

export default ProfilePage;