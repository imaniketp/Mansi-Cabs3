import { Container, Row, Col, Modal } from "react-bootstrap";
import { CiUser } from "react-icons/ci";
import { BiRightArrowAlt } from "react-icons/bi";
import React, { useState } from "react";
import "./BookingPage.css";

const CabBooking = () => {
  const [showBooking, setShowBooking] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const openBooking = () => {
    setShowBooking(!showBooking);
  };
  const showcancelmodal = () => setShowCancelModal(true);
  const hidecancelmodal = () => setShowCancelModal(false);
  return (
    <Container className="cabbooking">
      <Row className="cabbooking1">
        <Row className="cabbooking11">
          <Col className="cabbooking111">Current Bookings</Col>
          <Col className="cabbooking111"> Previously Cabs Booked</Col>
        </Row>

        <Row className="cabbooking12">
          <Col md={2} className="cabbooking121">
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
          <Col md={3} className="cabbooking126">
            <button className="cabbooking126button1" onClick={openBooking}>
              Click to View
            </button>
            <br />
            {!showBooking && (
              <button className="cabbooking126button2"  onClick={showcancelmodal}>Cancel booking</button>
            )}
          </Col>
        </Row>

        <Modal
                    show={showCancelModal}
                    onHide={hidecancelmodal}
                    size="md"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                  >
                    <Modal.Header  closeButton>
                      <h1 className="confirm-booking-title"> Cancel Booking</h1>
                    </Modal.Header>
                    <Modal.Body className="confirm-booking-modal-body">
                      <div className="confirmcancel-1">
                        
                          <textarea  placeholder="why are you cancel booking" />

                      <button>Cancel Booking</button>
                      </div>
                    </Modal.Body>
                  </Modal>



        {showBooking && (
          <Row className="cabbooking3">
            <Col md={4} className="cabbooking31">
              <CiUser className="cabbooking312" />
              <h2>Driver 2</h2>
              <p>+91 9130439630</p>
              <p>Vehicale No.MH 15 6450 </p>
            </Col>

            <Col md={8} className="cabbooking32">
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

                  <input type="text" placeholder="Mumbai" readOnly />
                </Col>
                <Col md={2}>
                  <BiRightArrowAlt className="cabbooking3222" />
                </Col>
                <Col md={5} className="cabbooking3223">
                  <h2>Drop Location</h2>
                  <input type="text" placeholder="Kedarnath" readOnly />
                </Col>
              </Row>
              <Row className="cabbooking323">
                <Col md={8} className="cabbooking3231">
                  <h2>Pickup Date & Time</h2>
                  <p>26 November 2022,Wednesday, 08:00AM</p>
                </Col>
                <Col md={4} className="cabbooking3232">
                  <button onClick={showcancelmodal}>Cancel booking</button>
                
                </Col>
              </Row>
            </Col>
          </Row>
        )}

        
      </Row>
    </Container>
  );
};

export default CabBooking;