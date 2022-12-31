import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Places.css";
import { NavDropdown } from 'react-bootstrap';

function Places() {
  const [show, setShow] = useState(false);
const showDropdown = (e)=>{
    setShow(!show);
}
const hideDropdown = e => {
    setShow(false);
}
  return (
    <Container fluid className="placesContainer">
      <h2>Top Cities Where We Provide OutStation Cabs</h2>
      <Container>
        <Row className="placesRow">
          <Col md={3} className="mainPlace">
          <NavDropdown title="Cabs From Nashik" id="basic-nav-dropdown" alignRight
          show={show}
          onMouseEnter={showDropdown} 
          onMouseLeave={hideDropdown}>
                    <NavDropdown.Item href="#action/3.1">Nashik to Matehran</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Nashik to Dhule</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Nashik to Manmad</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Nashik to Trimbakeshvar</NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace">Cabs From Mumbai</Col>
          <Col md={3} className="mainPlace">Cabs From Pune</Col>
          <Col md={3} className="mainPlace">Cabs From Nagpur</Col>
          <Col md={3} className="mainPlace">Cabs From SambhajiNagar</Col>
        </Row>
      </Container>

    </Container>
  );
}

export default Places;
{/* <Container className="airportData">
        <h5>POPULAR AIRPORTS CABS</h5>
        <Row>
          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Mumbai Airport Taxi</li>
              <li>Ahemdabad Airport Taxi</li>
              <li>Amritsar Airport Taxi</li>
              <li>Bangalore Airport Taxi</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Kolkata Airport Taxi</li>
              <li>Cochin Airport Taxi</li>
              <li>Delhi Airport Taxi</li>
              <li>Hyderabad Airport Taxi</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Chandigarh Airport Taxi</li>
              <li>Chennai Airport Taxi</li>
              <li>Jaipur Airport Taxi</li>
              <li>Varanasi Airport Taxi</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Udaipur Airport Taxi</li>
              <li>Vishakhapatnam Airport Taxi</li>
              <li>Pune Airport Taxi</li>
            </ul>
          </Col>
        </Row>
      </Container> */}