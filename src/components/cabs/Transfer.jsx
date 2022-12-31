import React from "react";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  NavDropdown,
  Form,
  Modal,
  Button,
} from "react-bootstrap";
import {
  AiOutlineCheckCircle,
  AiFillCheckCircle,
  AiFillStar,
} from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { FaSuitcase } from "react-icons/fa";
import { BiRightArrowAlt } from "react-icons/bi";
import { FaGasPump } from "react-icons/fa";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import { BiRupee } from "react-icons/bi";
import { ImCross } from "react-icons/im";
import { AiOutlineDown } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import "./Transfer.css";

function Transfer() {
  const [showpay, setShowpay] = useState(false);
  const [show, setshow] = useState(false);
  const [showCabDetails, setShowCabDetails] = useState(false);
  const [showView, setShowView] = useState(false);

  const handleShowview = () => {
    setShowView(!showView)
  };

  const cabDetails = () => {
    setShowCabDetails(!showCabDetails)
  };

  const handleClosepay = () => setShowpay(false);
  const handleShowpay = () => setShowpay(true);
  return (
    <Container fluid className="transfer0">
      <Container fluid='md'>
      <Row>
        <Col md={8}>
          {/* <Row className="transfer-details-title1">
              <h2>Transfer Details</h2>
            </Row> */}
          <Row className="transfer-sel1">
            <Row className="transfer-details">
              <Col className="transfer-details-img" md={3}>
                <img src="innova.png" alt="innova" />
              </Col>
              <Col md={9}>
                <Row className="transfer-details3">
                  <Col>
                    <h3>Indica, Swift, Alto, Ford Figo or equivalent CNG</h3>
                    <div className="transferAc">
                        <div>
                          <MdAirlineSeatReclineExtra />
                        7 seats 
                        </div>
                        <div>
                          <FaSuitcase />
                        2 luggage 
                        </div>
                        <div>
                          <IoMdCheckmarkCircleOutline />
                        AC
                        </div>
                    </div>
                    <div>
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star" />
                      <AiFillStar className="star1" />
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="transfer-spacious">
              <Row className="transfer-details4">
                <Col md={3}>
                  <Row>
                    <p>
                      <HiLocationMarker className="locationpick" /> Pickup
                      Location
                    </p>
                  </Row>
                  <Row>
                    <input type="text" placeholder="Nashik" readOnly/>
                  </Row>
                </Col>
                <Col md={1} className="transfer-details4-arow">
                  <BiRightArrowAlt />
                </Col>
                <Col md={3}>
                  <Row>
                    <p>
                      <HiLocationMarker className="locationdrop" /> Drop
                      Location
                    </p>
                  </Row>
                  <Row>
                    <input type="text" placeholder="Mumbai" readOnly/>
                  </Row>
                </Col>

                <Col md={5}>
                  <Row>
                    <p>Pickup Date & Time</p>
                  </Row>
                  <Row>
                    <span>26 Nov 2022, 08:00 AM</span>
                  </Row>
                </Col>
              </Row>

              <Row className="transferSpec">
                <h5> Spacious Car</h5>
                <Col>
                  <Row>
                    <Col md={3} className="transferSpeccol1">
                      <p>
                        <span>
                          <AiFillCheckCircle />
                        </span>
                        Extra Km fare
                      </p>
                    </Col>
                    <Col md={8} className="transferSpeccol1">
                      <p>₹15.0/km after 167 kms</p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} className="transferSpeccol1">
                      <p>
                        <span>
                          <AiFillCheckCircle />
                        </span>
                        Fuel Type
                      </p>
                    </Col>
                    <Col md={8} className="transferSpeccol1">
                      <p>
                        <FaGasPump /> CNG/Diesel
                      </p>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={3} className="transferSpeccol1">
                      <p>
                        <span>
                          <AiFillCheckCircle />
                        </span>
                        Cancellation
                      </p>
                    </Col>
                    <Col md={8} className="transferSpeccol1">
                      <p>Free within 30 mins of booking</p>
                    </Col>
                  </Row>
                  <Col className="transfer-viewd">
                    <button onClick={handleShowview}>
                      VIEW DETAILS
                      <span>
                        <AiOutlineDown />
                      </span>
                    </button>
                  </Col>
                  { showView &&
                  <div>
                  <div className="transfer-inclusion0" id="transfer-block">
                    <div className="transfer-inclusion">
                      <h5>
                        <FcCheckmark className="transfer-inclusion-mark" />
                        Inclusions
                        <span>(Included In The Price) </span>
                      </h5>
                      <div className="inclusion-data">
                          <li>Toll Charges</li>
                          <li>Driver Allowance</li>
                          <li>State Tax</li>
                      </div>
                    </div>

                    <div className="transfer-exclusion">
                      <h5>
                        <RxCross2 className="transfer-exclusion-mark"/>
                        Exclusions <span>(Extra Charges)</span>
                      </h5>
                      <div className="exclusion-data">
                          <li>Waiting Charges (After 45 mins, ₹ 100.0/hr)</li>
                          <li>Fare beyond 166 Kms (₹ 20/Km)</li>
                      </div>
                    </div>
                  </div>
                  </div>
                }
                </Col>
              </Row>
            </Row>
          </Row>

          <Row className="transfer-cancellation-title0">
            <div className="transfer-cancellation-title">
              <p>Driver and Cab Details</p>
              <AiOutlineDown
                className="transfer-cancellation-title-icon"
                onClick={cabDetails}
              />
            </div>
            { showCabDetails &&
                <div className="cabDetailsinner">
                    <div className="cabDetailsinnerTitle">
                      <h5>Cab driver details will be shared up to 30 mins prior to departure.</h5>
                    </div>
                    <div className="cabDetailsinnerdiv">
                      <img src="innovainte1.jpg" alt="" />
                      <img src="innovainte2.jpg" alt="" />
                      <img src="innovainte3.jpg" alt="" />
                    </div>
                </div>
            }
          </Row>

          <Row className="transfer-travellar-title">
            <h3>Travellar Details</h3>
          </Row>
          <Row className="transfer-travellar">
            <Row className="transfer-travellar-pick">
              <label htmlFor="pick">Exact Pickup Address</label>
              <input
                type="text"
                name="pick"
                placeholder="Enter exact Pick-up address/Location"
              />
            </Row>
            <Row className="transfer-travellar-drop">
              <label htmlFor="pick">Exact Drop Address</label>
              <input
                type="text"
                name="pick"
                placeholder="Enter exact Drop-up address/Location"
              />
            </Row>
            <Row>
              <Col>
                <Row className="transfer-travellar-name">
                  <label htmlFor="pick">Full Name</label>
                  <input type="text" name="pick" />
                </Row>
                <Row className="transfer-travellar-email">
                  <label htmlFor="pick">Email</label>
                  <input type="email" name="pick" />
                </Row>
              </Col>

              <Col>
                <Row className="transfer-travellar-gender">
                  <label htmlFor="pick">Gender</label>
                  <div>
                    <span>
                      <input type="radio" name="pick" value="male" />
                      Male
                    </span>
                    <span>
                      <input type="radio" name="pick" value="female" />
                      Female
                    </span>
                  </div>
                </Row>
                <Row className="transfer-travellar-mob">
                  <label htmlFor="pick">Mobile no.</label>
                  <input type="tel" name="pick" placeholder="+91" />
                </Row>
              </Col>
            </Row>
            <Row className="transfer-travellar-terms">
              <div>
                <input name="terms" type="checkbox" />
                <label htmlFor="terms">
                  I understand and agree to the rules of this fare and the <span>Terms & Conditon</span>
                </label>
              </div>
            </Row>
          </Row>
        </Col>

        <Col md={4} className="transfermain">
          <Row className="transfer5">
            <h3>
              <span>
                <BiRupee />
              </span>
              Pricing Details
            </h3>
          </Row>

          <Row className="transfer2">
            <Row className="transfer-price">
              <Col md={8}>
                <p>Base Fare</p>
              </Col>
              <Col md={4}>
                <p>₹ 1967</p>
              </Col>
            </Row>
            <Row className="transfer-price">
              <Col md={8}>
                <p>Driver Allowance</p>
              </Col>
              <Col md={4}>
                <p>₹ 360</p>
              </Col>
            </Row>

            <Row className="transfer-price">
              <Col md={8}>
                <p>Tax</p>
              </Col>
              <Col md={4}>
                <p>₹ 116</p>
              </Col>
            </Row>
            <hr />
            <Row className="transfer-price">
              <Col md={8}>
                <p>Total</p>
              </Col>
              <Col md={4}>
                <p>₹ 7603/-</p>
              </Col>
            </Row>
          </Row>

          <Row className="transfer5">
            <h3>
              <span>
                <BiRupee />
              </span>
              Pay Now
            </h3>
          </Row>
          <Row className="transfer2">
            <Row className="transfer-price">
              <Col md={8}>
                <p>
                  <input type="radio" />
                  Pay Full Amount
                </p>
              </Col>
              <Col md={4}>
                <p>₹ 2269</p>
              </Col>
            </Row>

            <Row className="transfer-price">
              <Col md={8}>
                <p>
                  <input type="radio" />
                  Pay rest to driver
                </p>
              </Col>
              <Col md={4}>
                <p>₹ 547</p>
              </Col>
            </Row>

            <Row className="transfer-price">
              <button onClick={handleShowpay}>Continue to Pay</button>
              <Modal
                show={showpay}
                onHide={handleClosepay}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
              >
                <Modal.Header closeButton>
                  <h1 className="confirm-booking-title"> Confirm Booking</h1>
                </Modal.Header>
                <Modal.Body className="confirm-booking-modal-body">
                  <div className="confirm-booking-body1">
                    <div>
                      <p>Pickup Location</p>
                      <input type="text" placeholder="Nashik" readOnly/>
                    </div>

                    <div className="confirm-booking-arrow">
                      <BiRightArrowAlt />
                    </div>

                    <div>
                      <p>Drop Location</p>
                      <input type="text" placeholder="Mumbai" readOnly/>
                    </div>
                  </div>

                  <div className="confirm-booking-body2">
                    <p>Pickup Date & Time :</p>
                    <span>26 November 2022.Wednesday, 08:00 AM</span>
                  </div>

                  <div className="confirm-booking-body3">
                    <p>Apply code</p>
                    <input type="text" />
                  </div>
                  <button>Proceed to Pay</button>
                </Modal.Body>
              </Modal>
            </Row>
          </Row>
        </Col>
      </Row>
      </Container>
    </Container>
  );
}

export default Transfer;
