import React, {useRef,useState} from "react";
import { Col, Form, Row,Dropdown,Card,ListGroupItem,ListGroup, } from "react-bootstrap";
import { useUserContext } from "../contexts/user_context";
import {Button} from 'react-bootstrap'
import Loading from "../components/Loading";
import "./css/profile.css"
import "./scripts/profile.js"
import {
    faMapMarkerAlt,
    faEllipsisV,
    faRupeeSign,
    faUser,
    faCalendarAlt
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useCropContext } from "../contexts/crop_context"

function ProfilePage(){
    const {currentUser,isFarmer}=useUserContext();
    const {loading, getMyAllCrops,allCrops ,deleteCrop}=useCropContext();
    var type = isFarmer ? "Farmer" : "Trader";
    const deleteClick = async (e) =>{
        let crop = e.target.parentNode.parentNode.parentNode;
        try{
          await deleteCrop(crop.id);
          crop.remove();
        }
        catch(error)
        {
          alert("Error");
          console.log(error);
        }
      }
      if (loading) return <Loading></Loading>;
    return (
        <div className='container'>
          <iframe src="https://dag123.youcanbook.me/?noframe=true&skipHeaderFooter=true" id="ycbmiframedag123" frameBorder="0" allowtransparency="true"></iframe>
            <div className='pro-back shadow' style={{textAlign:'left',width:'80%',margin:'20px auto',padding:'20px'}}>
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
            <Button href="/profile/update" variant='outline-success'>Update</Button>
            <hr></hr>
            <h3 style={{color:'#5c342f'}}>Recent posts</h3>
            <div className="row m-0">
      {allCrops.map((crop) => {
        console.log(crop);
        return (
          <Card className="shadow col-lg-5  col-sm-12" style={{margin:'20px 20px 20px 0'}} id={crop.id}>
            <Dropdown>
              <Dropdown.Toggle className="position-absolute " style={{top:"10px", right:"10px"}} variant="light" id="dropdown-basic">
              </Dropdown.Toggle>
              <Dropdown.Menu className="border-0 p-0" style={{borderRadius:"0", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                {/* <Dropdown.Item className="p-2">Delete</Dropdown.Item> */}
                <Button variant="light" className="p-2" onClick={deleteClick}>Delete</Button>
              </Dropdown.Menu>
            </Dropdown>
            <Card.Body>
              <Card.Title>{crop.comm}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <FontAwesomeIcon
                  icon={faUser}
                  className="mr-3 text-primary"
                ></FontAwesomeIcon>
                {crop.user.name}
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mr-3 text-danger"
                ></FontAwesomeIcon>
                {crop.city + ", " + crop.state}
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon
                  icon={faRupeeSign}
                  className="mr-3"
                  style={{ color: "goldenrod" }}
                ></FontAwesomeIcon>
                {crop.price}
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon
                  icon={faCalendarAlt}
                  className="mr-3 text-info"
                ></FontAwesomeIcon>
                {crop.date ? crop.date+" (Expected)": "Aready Harvested!"}
              </ListGroupItem>
            </ListGroup>
          </Card>
        );
      })}
    </div>
            </div>
        </div>
    );
}

export default ProfilePage;