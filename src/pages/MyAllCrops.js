import React from "react";
import Loading from "../components/Loading";
import {
  Button,
  Dropdown,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import {
  faMapMarkerAlt,
  faEllipsisV,
  faRupeeSign,
  faUser,
  faCalendarAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useCropContext } from "../contexts/crop_context";

const MyAllCrops = () => {
  const { loading, allCrops } = useCropContext();

  // React.useEffect(() => {
  //   console.log("use eff ran");
  // }, [allCrops]);

  if (loading) return <Loading></Loading>;

  console.log("all crops", allCrops);
  console.log("all crops len", allCrops.length);
  console.log("First Crop", allCrops[0]);

  return (
    <div className="row m-0">
      {allCrops.map((crop) => {
        return (
          <Card className="shadow col-lg-2 col-md-3 col-sm-5 m-4 p-0">
            <Dropdown>
              <Dropdown.Toggle className="position-absolute " style={{top:"10px", right:"10px"}} variant="light" id="dropdown-basic">
              </Dropdown.Toggle>
              <Dropdown.Menu className="border-0" style={{padding:"5px 0 5px 0", borderRadius:"0", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <Dropdown.Item href="#/action-1" className="p-2">Delete</Dropdown.Item>
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
  );
};

export default MyAllCrops;