import React from "react";
import {Card,Button, ListGroup, ListGroupItem, FormGroup, Form} from "react-bootstrap"
import {useProductsContext} from '../contexts/product_context'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStore,
  faStar
} from "@fortawesome/free-solid-svg-icons";


function MandiPage() {
    const {area,setarea,mandis} = useProductsContext();
    console.log("mandis",mandis)
  return (
    <div>
       <FormGroup style={{width:"320px", margin:"auto"}}>
        <Form.Control as="select" name="area" value={area} onChange={setarea}>
        <option value='all'>Select the mandi which best suits you</option>
        <option value='South West Delhi'>South West Delhi</option>
        <option value='Rewari,Haryana'>Rewari,Haryana</option>  
        </Form.Control>
      </FormGroup>
      <section className='container'>
      <div className='row'>
        {mandis.map((mandi,index)=>{
          const {commodity,location,shops,rating,area,reviews}=mandi;
            return (
              <div className='col-lg-3 col-md-4 col-sm-6 col-xsm-12 m-4'>
              <Card style={{ width: '18rem' }} className="shadow-sm">
                <div className="rating position-absolute p-2" style={{right:"10px", top:"10px", borderRadius:"10px", backgroundColor:"lightgrey", fontWeight:"600"}}>
                <FontAwesomeIcon icon={faStar} className="mr-1" style={{color:"goldenrod"}}></FontAwesomeIcon>
                  {rating}
                </div>
                <Card.Img variant="top" src="https://aniportalimages.s3.amazonaws.com/media/details/EVsOuIGU0AAWoqq_6kP82gF.jpg" />
                <Card.Body>
                  <Card.Title>{commodity.toUpperCase()}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                      <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-4"></FontAwesomeIcon>
                      {location}
                  </ListGroupItem>
                  <ListGroupItem><FontAwesomeIcon icon={faStore} className="mr-3"></FontAwesomeIcon>There are {shops} shops</ListGroupItem>
                </ListGroup>
                <Card.Body>
                <Button variant="outline-success" block>Enter {commodity.toUpperCase()}</Button>
                </Card.Body>
              </Card>
              </div>
            )
        })}
        </div>
      </section>
    </div>
  );
}

export default MandiPage;
