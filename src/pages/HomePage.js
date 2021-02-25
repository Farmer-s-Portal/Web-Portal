import React from "react";
import {useProductsContext} from '../contexts/product_context'
import Hero from "../components/Hero"
import {Card,Button, ListGroup, ListGroupItem, FormGroup, Form} from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStore,
  faStar
} from "@fortawesome/free-solid-svg-icons";
const HomePage = () =>{
     const {area,setarea,mandis} = useProductsContext();

  return (
    <main>
      <h1>Landing page bna lo bsdvalo</h1>
      <Hero/>
     
    </main>
  )
}

export default HomePage;
