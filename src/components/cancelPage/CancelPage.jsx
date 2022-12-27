import React, { useState } from "react";
import { Container, Row, Col,Badge } from "react-bootstrap";
import {  CiUser } from "react-icons/ci";
import { BiRightArrowAlt} from 'react-icons/bi';
import "./CancelPage.css";
const CancelBooking = () => {
  const [Cancelvalue, setCancelvalue] = useState(0);

  
    
  

  

  return (
    <Container>
      <Row className="cabbooking110">Cancelled Bookings</Row>
      <Row className="cabbooking12">
        <div className="ribbon ribbon-top-left">
          <span>Cancelled</span>
        </div>
        <Col md={3} className="cabbooking121">
          <img src="innova2-removebg-preview.png" alt="innova" />
        </Col>
        <Col md={2} className="cabbooking122">
          <h2>Innova</h2>
          <br />
          <p>7 seats | 2 luggage | AC</p>
        </Col>
        <Col md={1} className="cabbooking123">
          <h3>From</h3>
          <br />
          <h4>Mumbai</h4>
        </Col>
        <Col md={1} className="cabbooking124">
          <h3>To</h3>
          <br />
          <h4>Nashik</h4>
        </Col>
        <Col md={3} className="cabbooking125">
          <h3>Pickup Date & Time</h3>
          <br />
          <h4>26 November 2022, 08:00AM</h4>
        </Col>
        <Col md={2} className="cabbooking126">
          <button className="cabbooking126cancel" onClick={()=> setCancelvalue(1)}>
            Click to View
          </button>
        </Col>
      </Row>

      {Cancelvalue == 1 && (
        <Row className="cabbooking3">
          <Col md={4} className="cabbooking31">
            <CiUser className="cabbooking312" />
            <h2>Driver 2</h2>
            <p>+91 9130439630</p>
            <p>Vehicale No.MH 15 6450</p>
          </Col>

          <Col md={8} className="cabbooking32">
            <Row md={4} className="cabbooking3232">
              <button>Cancel booking</button>
            </Row>
            <Row className="cabbooking321">
              <Col md={4} className="cabbooking3211">
                <img src="innova2-removebg-preview.png" alt="innova" />
              </Col>
              <Col md={8} className="cabbooking3212">
                <h2>Innova or Equivalent</h2>
                <br />
                <p>7 seats | 2 luggage | AC</p>
              </Col>
            </Row>
            <Row className="cabbooking322">
              <Col md={5} className="cabbooking3221">
                <h2>Pickup Location</h2>

                <input type="text" />
              </Col>
              <Col md={2}>
                <BiRightArrowAlt className="cabbooking3222" />
              </Col>
              <Col md={5} className="cabbooking3223">
                <h2>Drop Location</h2>
                <input type="text" />
              </Col>
            </Row>
            <Row className="cabbooking323">
              <Col md={8} className="cabbooking3231">
                <h2>Pickup Date & Time</h2>
                <p>26 November 2022,Wednesday, 08:00AM</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )}


<Row className="cabbooking12">
        <div class="ribbon ribbon-top-left">
          <span>Cancelled</span>
        </div>
        <Col md={3} className="cabbooking121">
          <img src="innova2-removebg-preview.png" alt="innova" />
        </Col>
        <Col md={2} className="cabbooking122">
          <h2>Innova</h2>
          <br />
          <p>7 seats | 2 luggage | AC</p>
        </Col>
        <Col md={1} className="cabbooking123">
          <h3>From</h3>
          <br />
          <h4>Mumbai</h4>
        </Col>
        <Col md={1} className="cabbooking124">
          <h3>To</h3>
          <br />
          <h4>Nashik</h4>
        </Col>
        <Col md={3} className="cabbooking125">
          <h3>Pickup Date & Time</h3>
          <br />
          <h4>26 November 2022, 08:00AM</h4>
        </Col>
        <Col md={2} className="cabbooking126">
          <button className="cabbooking126cancel" onClick={()=> setCancelvalue(2)}>
            Click to View
          </button>
        </Col>
      </Row>

      {Cancelvalue == 2 && (
        <Row className="cabbooking3">
          <Col md={4} className="cabbooking31">
            <CiUser className="cabbooking312" />
            <h2>Driver 2</h2>
            <p>+91 9130439630</p>
            <p>Vehicale No.MH 15 6450</p>
          </Col>

          <Col md={8} className="cabbooking32">
            <Row md={4} className="cabbooking3232">
              <button>Cancel booking</button>
            </Row>
            <Row className="cabbooking321">
              <Col md={4} className="cabbooking3211">
                <img src="innova2-removebg-preview.png" alt="innova" />
              </Col>
              <Col md={8} className="cabbooking3212">
                <h2>Innova or Equivalent</h2>
                <br />
                <p>7 seats | 2 luggage | AC</p>
              </Col>
            </Row>
            <Row className="cabbooking322">
              <Col md={5} className="cabbooking3221">
                <h2>Pickup Location</h2>

                <input type="text" />
              </Col>
              <Col md={2}>
                <BiRightArrowAlt className="cabbooking3222" />
              </Col>
              <Col md={5} className="cabbooking3223">
                <h2>Drop Location</h2>
                <input type="text" />
              </Col>
            </Row>
            <Row className="cabbooking323">
              <Col md={8} className="cabbooking3231">
                <h2>Pickup Date & Time</h2>
                <p>26 November 2022,Wednesday, 08:00AM</p>
              </Col>
            </Row>
          </Col>
        </Row>
      )}
     
    </Container>
  );
};

export default CancelBooking;