import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  Form,
  Row,
  Container,
  Col,
  Button,
  InputGroup,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import {
  faMapMarkerAlt,
  faRupeeSign,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCropContext } from "../contexts/crop_context";

const AllCrops = () => {
  const { loading, allCrops } = useCropContext();

  React.useEffect(() => {
    console.log("use eff ran");
  }, [allCrops]);

  if (loading) return <h1>Loading...</h1>;

  console.log("all crops", allCrops);
  console.log("all crops len", allCrops.length);
  console.log("First Crop", allCrops[0]);

  return (
    <div className="row">
      {allCrops.map((crop) => {
        return (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 m-4">
            <Card style={{ width: "18rem" }} className="shadow">
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
                  {crop.price} (Modal)
                </ListGroupItem>
              </ListGroup>
              {/* <Card.Body>
                            <Button variant="outline-success" block>
                            Enter {marketCenter.split(",")[0].toUpperCase()} Mandi
                            </Button>
                        </Card.Body> */}
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default AllCrops;
