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
import './Transfer.css'

function Transfer() {
    const [showpay, setShowpay] = useState(false);
  const [show, setshow] = useState(false);

  const handleShowview = () => {
    if (show == false) {
      setshow(true);
    } else if (show == true) {
      setshow(false);
    }
    if (show == true) {
      document.getElementById("transfer-block").style.display = "block";
    } else {
      document.getElementById("transfer-block").style.display = "none";
    }
  }

    const showCancellation = () => {
      if (show == false) {
        setshow(true);
      } else if (show == true) {
        setshow(false);
      }
      if (show == true) {
        document.getElementById("cancellation-policy").style.display = "flex";
      } else {
        document.getElementById("cancellation-policy").style.display = "none";
      }
    };
  
    const handleClosepay = () => setShowpay(false);
    const handleShowpay = () => setShowpay(true);
  return (
    <Container fluid className="transfer0">
      <Row>
        <Col md={8}>
        <Row className="transfer-details-title1">
              <h2>Transfer Details</h2>
            </Row>
          <Row className="transfer-sel1">
            <Row className="transfer-details">
              <Col className="transfer-details-img" md={3}>
                <img src="innova2-removebg-preview.png" alt="innova" />
              </Col>
              <Col md={9}>
                <Row className="transfer-details3">
                  <Col md={3}>
                    <h3>Innova or Similar</h3>
                  </Col>
                  <Col md={6}>
                    <p>
                      <span>
                        <MdAirlineSeatReclineExtra />
                      </span>
                      7 seats |
                      <span>
                        <FaSuitcase />
                      </span>
                      2 luggage |
                      <span>
                        <IoMdCheckmarkCircleOutline />
                      </span>
                      AC
                    </p>
                  </Col>
                </Row>
                <Row className="transfer-details4">
                  <Col md={3}>
                    <Row>
                      <p>Pickup Location</p>
                    </Row>
                    <Row>
                      <input type="text" />
                    </Row>
                  </Col>
                  <Col md={1} className="transfer-details4-arow">
                    <BiRightArrowAlt />
                  </Col>
                  <Col md={3}>
                    <Row>
                      <p>Drop Location</p>
                    </Row>
                    <Row>
                      <input type="text" />
                    </Row>
                  </Col>

                  <Col md={5}>
                    <Row>
                      <p>Pickup Date & Time</p>
                    </Row>
                    <Row>
                      <span>26 November 2022.Wednesday, 08:00 AM</span>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="transfer-spacious">
              <Row className="cabs-etios2-spec">
                <h5>Spacious Car</h5>
                <Col>
                  <Row>
                    <Col md={4} className="cabs-etios2-spec2">
                      <p>
                        <span>
                          <AiFillCheckCircle />
                        </span>
                        Extra Km fare
                      </p>
                    </Col>
                    <Col md={8} className="cabs-etios2-spec3">
                      <p>₹15.0/km after 167 kms</p>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4} className="cabs-etios2-spec2">
                      <p>
                        <span>
                          <AiFillCheckCircle />
                        </span>
                        Fuel Type
                      </p>
                    </Col>
                    <Col md={8} className="cabs-etios2-spec3">
                      <p>
                        <FaGasPump /> CNG/Diesel
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={4} className="cabs-etios2-spec2">
                      <p>
                        <span>
                          <AiFillCheckCircle />
                        </span>
                        Cancellation
                      </p>
                    </Col>
                    <Col md={8} className="cabs-etios2-spec3">
                      <p>Free within 30 mins of booking</p>
                    </Col>
                  </Row>
                </Col>
                <Col className="transfer-viewd">
                  <button onClick={handleShowview}>
                    VIEW DETAILS
                    <span>
                      <AiOutlineDown />
                    </span>
                  </button>
                </Col>
              </Row>
            </Row>
          </Row>

          <Row className="transfer-inclusion0" id="transfer-block">
            <Row className="transfer-inclusion">
              <h1>
                <FcCheckmark className=" transfer-inclusion-check" /> Inclusions{" "}
                <span>(Included In The Price) </span>
              </h1>
              <Col md={4}>
                <li>
                  Night charges<span> (10 PM to 6 PM)</span>
                </li>
              </Col>
              <Col>
                <li>State Tax</li>
              </Col>
              <Col>
                <li>Toll Charges</li>
              </Col>
              <Col>
                <li>166 Kms</li>
              </Col>
              <Col>
                <li>Driver Allowance</li>
              </Col>
            </Row>

            <Row className="transfer-exclusion">
              <h1>
                <RxCross2
                  style={{ color: "red", fontSize: "150%", marginRight: "2%" }}
                />
                Exclusions <span>(Extra Charges)</span>
              </h1>
              <Col md={3} className="transfer-exclusion-col">
                <li>
                  Waiting Charges <br />
                  After 45 mins,₹ <br />
                  100.0/hr
                </li>
              </Col>

              <Col md={3}>
                <li>
                  Fare beyond 166 Kms
                  <br /> ₹ 20/Km
                </li>
              </Col>
            </Row>
          </Row>

          <Row className="transfer-cancellation-title0">
            <div className="transfer-cancellation-title">
              <p>Cancellation Policy</p>
              <AiOutlineDown
                className="transfer-cancellation-title-icon"
                onClick={showCancellation}
                />
            </div>
          </Row>
            <Row className="transfer-cancellation" id="cancellation-policy">
              <Col md={4} className="transfer-cancel-rs">
                <div>
                  <BiRupee className="transfer-cancel-rs-ico" />
                </div>
                <div>
                  <h3>After Booking Confirmed</h3>
                  <p>Free Cancellation</p>
                </div>
              </Col>
              <Col md={1}>
                <BiRightArrowAlt className="transer-cancellation-arrow" />
              </Col>
              <Col md={4} className="transfer-cancel-cross">
                <div>
                  <ImCross className="transfer-cancel-cross-ico" />
                </div>
                <div>
                  <h3>After 10 Dec 7:15 pm</h3>
                  <p>No refund</p>
                </div>
              </Col>
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
                <Form.Check type="checkbox" />
                <p>
                  I understand and agree to the rules of this fare and the{" "}
                  <span>Terms & Conditon</span>
                </p>
              </div>
            </Row>
          </Row>
        </Col>

        <Col md={4}>
        <Row className="transfer5">
            <h3>
              <span><BiRupee/></span>Pricing Details
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
            <hr />
            <Row className="transfer-price">
              <Col md={8}>
                <p>Driver Allowance</p>
              </Col>
              <Col md={4}>
                <p>₹ 360</p>
              </Col>
            </Row>
            <hr />
            <Row className="transfer-price">
              <Col md={8}>
                <p>Tax</p>
              </Col>
              <Col md={4}>
                <p>₹ 116</p>
              </Col>
            </Row>
            <hr />
          </Row>

          <Row className="transfer5">
            <h3>
              <span><BiRupee/></span>Pay Now
            </h3>
            </Row>
            <Row className="transfer2">
            <Row className="transfer-price">
              <Col md={8}>
                <p>
                  {" "}
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
                      <input type="text" />
                    </div>

                    <div className="confirm-booking-arrow">
                      <BiRightArrowAlt />
                    </div>

                    <div>
                      <p>Drop Location</p>
                      <input type="text" />
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
  )
}

export default Transfer