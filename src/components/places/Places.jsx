import React from "react";
import { Container} from "react-bootstrap";
import "./Places.css";


function Places() {


  return (
    <>
    <h1 className="placesheading">Top Cities Where We Provide OutStation Cabs</h1>
    <Container fluid className="placesContainer">
      <Container className="palceshead">
        <div className="placeflex">
          <div className="place1">Cabs for Nashik :</div>

          <div className="placedata">
            <p>Nashik to Matehran &nbsp; | &nbsp; </p>
            <p>Nashik to Dhule &nbsp; | &nbsp; </p>
            <p>Nashik to Manmad &nbsp; | &nbsp; </p>
            <p>Nashik to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Nashik to Shirdi &nbsp; | &nbsp; </p>
            <p>Nashik to dubai &nbsp; | &nbsp; </p>
            <p>Nashik to dubai &nbsp; </p>
          </div>
        </div>
        <div className="placeflex">
          <div className="place1">Cabs for Pune :</div>

          <div className="placedata">
            <p>Pune to Matehran &nbsp; | &nbsp; </p>
            <p>Pune to Dhule &nbsp; | &nbsp; </p>
            <p>Pune to Manmad &nbsp; | &nbsp; </p>
            <p>Pune to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Pune to Shirdi &nbsp; | &nbsp; </p>
            <p>Pune to dubai &nbsp; | &nbsp; </p>
            <p>Pune to dubai &nbsp; | &nbsp; </p>
          </div>
        </div>
        <div className="placeflex">
          <div className="place1">Cabs for Mumbai :</div>

          <div className="placedata">
            <p>Mumbai to Matehran &nbsp; | &nbsp; </p>
            <p>Mumbai to Dhule &nbsp; | &nbsp; </p>
            <p>Mumbai to Manmad &nbsp; | &nbsp; </p>
            <p>Mumbai to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Mumbai to Shirdi &nbsp; | &nbsp; </p>
            <p>Mumbai to dubai &nbsp; | &nbsp; </p>
            <p>Mumbai to dubai &nbsp; | &nbsp; </p>
          </div>
        </div>
        <div className="placeflex">
          <div className="place1">Cabs for Nagpur :</div>

          <div className="placedata">
            <p>Nagpur to Matehran &nbsp; | &nbsp; </p>
            <p>Nagpur to Dhule &nbsp; | &nbsp; </p>
            <p>Nagpur to Manmad &nbsp; | &nbsp; </p>
            <p>Nagpur to Trimbakeshvar &nbsp; | &nbsp; </p>
            <p>Nagpur to Shirdi &nbsp; | &nbsp; </p>
            <p>Nagpur to dubai &nbsp; | &nbsp; </p>
            <p>Nagpur to dubai &nbsp; | &nbsp; </p>
          </div>
        </div>
       
      </Container>
    </Container>
    </>
  );
}

export default Places;