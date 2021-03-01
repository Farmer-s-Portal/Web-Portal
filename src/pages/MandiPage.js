import React from "react";
import {
  Card,
  Button,
  ListGroup,
  ListGroupItem,
  FormGroup,
  Form,
} from "react-bootstrap";
import {
  faMapMarkerAlt,
  faStore,
  faStar,
  faRupeeSign,
  faSeedling,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import { useProductsContext } from "../contexts/product_context";
import { Loading } from "../components";

const MandiPage = () => {
  const {
    area,
    setarea,
    mandis,
    locations,
    commodities,
    scommodity,
    setCommodity,
    loading,
  } = useProductsContext();

  if (loading) return <Loading />;

  return (
    <Wrapper className="position-relative">
      <FormGroup
        style={{ marginBottom: "20px" }}
        className="shadow p-2 position-sticky filter-form"
      >
        <Form.Label id="area" className="m-2 p-2">
          <b>State</b>
        </Form.Label>
        <Form.Control
          as="select"
          name="area"
          className="m-2"
          value={area}
          onChange={setarea}
        >
          <option value="all">Nearby</option>
          {locations.map((loc) => {
            return <option value={loc}>{loc}</option>;
          })}
        </Form.Control>
        <Form.Label id="comm" className="m-2 p-2">
          <b>Commodity</b>
        </Form.Label>
        <Form.Control
          as="select"
          name="comm"
          className="m-2"
          value={scommodity}
          onChange={setCommodity}
        >
          <option value="all">All</option>
          {commodities.map((comm) => {
            return <option value={comm}>{comm}</option>;
          })}
        </Form.Control>
      </FormGroup>
      <section className="container">
        <div className="row">
          {mandis.map((mandi, index) => {
            const {
              commodity,
              location,
              shops,
              rating,
              reviews,
              modalPrice,
              marketCenter,
            } = mandi;
            if (
              (marketCenter.split(",").pop() == area || area == "all") &&
              (commodity == scommodity || scommodity == "all")
            )
              return (
                <div
                  style={{ marginBottom: "20px" }}
                  className="col-lg-4 col-md-6 col-sm-12"
                >
                  <Card className="back-shadow ">
                    <div className="rating position-absolute p-2">
                      <FontAwesomeIcon
                        icon={faStar}
                        className="mr-1"
                        style={{ color: "goldenrod" }}
                      ></FontAwesomeIcon>
                      {Math.ceil(Math.random() * 20 + 25) / 10}
                    </div>
                    <Card.Img
                      variant="top"
                      src="https://aniportalimages.s3.amazonaws.com/media/details/EVsOuIGU0AAWoqq_6kP82gF.jpg"
                    />
                    <Card.Body>
                      <Card.Title>
                        {marketCenter.split(",")[0]} Mandi
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroupItem>
                        <FontAwesomeIcon
                          icon={faMapMarkerAlt}
                          className="mr-3 text-danger"
                        ></FontAwesomeIcon>
                        {marketCenter}
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          icon={faSeedling}
                          className="mr-3 text-success"
                        ></FontAwesomeIcon>
                        {commodity}
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          icon={faStore}
                          className="mr-3 text-info"
                        ></FontAwesomeIcon>
                        There are {Math.ceil(Math.random() * 20 + 30)} shops
                      </ListGroupItem>
                      <ListGroupItem>
                        <FontAwesomeIcon
                          icon={faRupeeSign}
                          className="mr-3"
                          style={{ color: "goldenrod" }}
                        ></FontAwesomeIcon>
                        {modalPrice} (Modal)
                      </ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                      <Button variant="outline-success" block>
                        Enter {marketCenter.split(",")[0].toUpperCase()} Mandi
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            return (
              <div className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 m-4">
                <Card style={{ width: "18rem" }} className="shadow-sm">
                  <div className="rating position-absolute p-2">
                    <FontAwesomeIcon
                      icon={faStar}
                      className="mr-1"
                      style={{ color: "goldenrod" }}
                    ></FontAwesomeIcon>
                    {Math.ceil(Math.random() * 20 + 25) / 10}
                  </div>
                  <Card.Img
                    variant="top"
                    src="https://aniportalimages.s3.amazonaws.com/media/details/EVsOuIGU0AAWoqq_6kP82gF.jpg"
                  />
                  <Card.Body>
                    <Card.Title>{marketCenter.split(",")[0]} Mandi</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        className="mr-3 text-danger"
                      ></FontAwesomeIcon>
                      {marketCenter}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon
                        icon={faSeedling}
                        className="mr-3 text-success"
                      ></FontAwesomeIcon>
                      {commodity}
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon
                        icon={faStore}
                        className="mr-3 text-info"
                      ></FontAwesomeIcon>
                      There are {Math.ceil(Math.random() * 20 + 30)} shops
                    </ListGroupItem>
                    <ListGroupItem>
                      <FontAwesomeIcon
                        icon={faRupeeSign}
                        className="mr-3"
                        style={{ color: "goldenrod" }}
                      ></FontAwesomeIcon>
                      {modalPrice} (Modal)
                    </ListGroupItem>
                  </ListGroup>
                  <Card.Body>
                    <Button variant="outline-success" block>
                      Enter {marketCenter.split(",")[0].toUpperCase()} Mandi
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .filter-form {
    width: 620px;
    margin: auto;
    display: flex;
    background-color: White;
    top: 80px;
    z-index: 2;
  }
  .rating {
    right: 10px;
    top: 10px;
    border-radius: 10px;
    background-color: lightgrey;
    font-weight: 600;
  }
`;

export default MandiPage;
