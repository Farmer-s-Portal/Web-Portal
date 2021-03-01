import React from "react";
import { useProductsContext } from "../contexts/product_context";
import Hero from "../components/Hero";
import { Col, Row, Carousel } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faStore,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
const HomePage = () => {
  const { area, setarea, mandis } = useProductsContext();

  const Warpper = styled.p`
    padding-top: 30px;
    font-size: large;
    .row > div {
      width: 50%;
      padding: 50px;
      margin: 30px;
      background-color: white;
    }
    ol {
      padding: 0px 0 0 10px;
      margin: 20px;
    }
    .row {
      margin: 0px;
    }
    .col > h3 {
      /* color: #28a745; */
      color: white;
      background-color: #5c342f;
      padding: 15px;
      border-radius: 30px;
      /* text-decoration: underline; */
    }
    .back-shadow {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `;
  return (
    <Warpper>
      <Row>
        <Col className="text-center back-shadow">
          <h3>Updates</h3>
        </Col>
        <Col md={6} xs={11} className="back-shadow">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/07/08/846102-farmers-istock.jpg"
                alt="First slide"
                style={{ height: "300px" }}
              />
              {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.downtoearth.org.in/library/large/2019-08-01/0.58526200_1564660055_gettyimages-1160203931.jpg"
                alt="Second slide"
                style={{ height: "300px" }}
              />

              {/* <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://thumbs.dreamstime.com/b/happy-indian-farmer-talking-phone-wheat-field-174020008.jpg"
                alt="Third slide"
                style={{ height: "300px" }}
              />

              {/* <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
          <br></br>
          Farmers' Portal is a non-profitable system which helps the farmer in
          carrying out his day-to-day activities online. As now-a-days
          everything is shifting on online platform which is making our life
          easier. There is still a sector lagging in the field of
          technicalization i.e., agriculture sector. As in India, according to
          Statista, 2020, 42% of population depends upon agriculture for their
          capital income and farmers often have great difficulties while selling
          and finding best price for their crops. As in current Mandi system,
          farmers have to wait in long queues in early mornings for selling
          their crops at a mediocre rate.<br></br>
          This portal provides following features for the farmers:
          <ol>
            <li>
              Online live prices of commodities in all mandis across the whole
              country.
            </li>
            <li>
              Book slot for auctions in a particular Mandi for their particular
              crop.
            </li>
            <li>
              Traders(Aadhtis) can manage their whole business of carrying out
              auctions online.
            </li>
            <li>An option to sell in open market i.e. private sector.</li>
            <li>Indulge in contract with private comapinies. (Coming Soon)</li>
          </ol>
          <b>Note:</b> Farmer and Trader(Aadhtis) must register in their
          respective categories.
          <h3 style={{ color: "#28a745" }}>
            <br></br>Steps for registration:
          </h3>
          <ol>
            <li>
              Go to the registration page <a href="/signup">here.</a>
            </li>
            <li>
              Fill all required details and make sure your entered mobile number
              is linked to your Aadhar Card.
            </li>
            <li>Choose your category i.e. farmer or trader.</li>
            <li>Confirm your registration by the otp sent to your mobile.</li>
          </ol>
        </Col>
        <Col className="text-center back-shadow">
          <h3>Important Links</h3>
        </Col>
      </Row>
    </Warpper>
  );
};

export default HomePage;
