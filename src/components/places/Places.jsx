import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Places.css";
import { NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Places() {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);

  return (
    <Container fluid className="placesContainer">
      <h2>Top Cities Where We Provide OutStation Cabs</h2>
      <Container>
        <Row className="placesRow">
          <Col md={3} className="mainPlace" onMouseLeave={()=>setShow1(false)}>
          <NavDropdown title="Cabs From Nashik" id="basic-nav-dropdown"
          show={show1}
          onMouseEnter={()=>setShow1(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow2(false)}>
          <NavDropdown title="Cabs From Mumbai" id="basic-nav-dropdown"
          show={show2}
          onMouseEnter={()=>setShow2(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow3(false)}>
          <NavDropdown title="Cabs From Pune" id="basic-nav-dropdown"
          show={show3}
          onMouseEnter={()=>setShow3(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow4(false)}>
          <NavDropdown title="Cabs From Nagpur" id="basic-nav-dropdown"
          show={show4}
          onMouseEnter={()=>setShow4(true)}
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
          <Col md={3} className="mainPlace"  onMouseLeave={()=>setShow5(false)}>
          <NavDropdown title="Cabs From SambhajiNagar" id="basic-nav-dropdown"
          show={show5}
          onMouseEnter={()=>setShow5(true)} 
          >
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Matehran</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Dhule</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Manmad</Link></NavDropdown.Item>
                    <NavDropdown.Item ><Link to="/CabsSearch">Nashik to Trimbakeshvar</Link></NavDropdown.Item>
                </NavDropdown>
          </Col>
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