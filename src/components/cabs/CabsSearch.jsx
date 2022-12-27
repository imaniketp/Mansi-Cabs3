import React from "react";
import { useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  Button,
  DropdownButton,
} from "react-bootstrap";
import {
  AiOutlineCheckCircle,
  AiFillStar,
  AiOutlineFieldTime
} from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CabsSearch.css";
import ModifyCabs from "./ModifyCabs";
import etios from '../../Assets/etios.png'

function CabsSearch() {
  //   const [active, setActive] = useState(false);
  //   const handleClick = () => {
  //   setActive(!active);
  // }

  const cabSearchShow = () => {
    document.getElementById('cabSearchLower').style.display='flex'
    document.getElementById('cabSerachdiscount').style.display='none'
    document.getElementById('cabSerachdiscountamt').style.display='none'
    document.getElementById('cabSearchviewbtn').style.display='none'
  }
  const cabSearchHide = () => {
    document.getElementById('cabSearchLower').style.display='none'
    document.getElementById('cabSerachdiscount').style.display='flex'
    document.getElementById('cabSerachdiscountamt').style.display='block'
    document.getElementById('cabSearchviewbtn').style.display='block'
  }


  return (
    <>
      <ModifyCabs />
      <Container fluid="md" className="serachCabContainer">
        <div className="cabSearchLeft">
          <div className="searchcableft1">
            <h5>Why Booking Cabs With Us?</h5>
            <p>
              <AiOutlineCheckCircle className="filtercheckicon" />
              Your doorstep pickup & drop to destination
            </p>
            <p>
              <AiOutlineCheckCircle className="filtercheckicon" />
              No extra charges than what's mentioned
            </p>
            <p>
              <AiOutlineCheckCircle className="filtercheckicon" />
              Experienced drivers with safe & comfertable cabs
            </p>
          </div>

          <div className="searchcableft2">

            <div className="searchcableft2div1">
              <h5>Filter</h5>
              <p>Clear all</p>
            </div>
              <hr/>
            <div>
              <div className="searchcableft2div2">
                <h6>Car Model</h6>
                <p>Reset</p>
              </div>
              <div>
                <div className="cabsearchfiltercheck">
                  <input type='checkbox' name="etios" />
                  <label htmlFor="etios">Etios or similar</label>
                </div>
                  <div className="cabsearchfiltercheck">
                    <input type='checkbox' name="enova" />
                  <label htmlFor="enova">Innova or similar</label>
                  </div>
                  <div className="cabsearchfiltercheck">
                    <input type='checkbox' name="eauto" />
                  <label htmlFor="eauto">E-Auto</label>
                  </div>
                  
              </div>
            </div>

            <div>
              <div className="searchcableft2div2">
                <h6>Passenger Capacity</h6>
                <p>Reset</p>
              </div>
              <div>
                <div className="cabsearchfiltercheck">
                  <input type='checkbox' name="4p" />
                  <label htmlFor="4p">4 Passenger seat</label>
                </div>
                  <div className="cabsearchfiltercheck">
                    <input type='checkbox' name="7p" />
                  <label htmlFor="7p">7 Passenger seat</label>
                  </div>
                  
              </div>
            </div>

          </div>
        </div>

        <div className="cabSearchRight">

          <div className="cabSearchMain">
              <div className="cabSearchUpper">
                <div className="cabSearchUpperLeft">
                  <img src={etios} alt="" />
                  <div className="cabSearchUpperLeftdiv">
                    <h4>SEDAN</h4>
                    <p>Dzire, Etios</p>
                    <div className="ac">
                      <p><IoMdCheckmarkCircleOutline />AC</p>
                      <p><MdAirlineSeatReclineExtra />Passenger 4</p>
                    </div>
                    <div>
                      <AiFillStar className="star1"/>
                      <AiFillStar className="star1"/>
                      <AiFillStar className="star1"/>
                      <AiFillStar className="star1"/>
                      <AiFillStar className="star2"/>
                    </div>
                  </div>
                </div>
                <div className="cabSearchUpperright">
                  <Button className="cabSearchbookbtn">Book Now</Button>
                  <div className="cabSerachdiscount" id="cabSerachdiscount"><p>₹2631</p><span>15% off</span></div>
                  <h4 id="cabSerachdiscountamt">₹2269</h4>
                  <Button className="cabSearchviewbtn" id="cabSearchviewbtn" onClick={cabSearchShow}>View More</Button>
                </div>
              </div>
              <div className="cabSearchLower" id="cabSearchLower">
                <div className="cabSearchLowerleft">
                  <h5>Spacious Car</h5>
                  <div className="cabSearchLowerleftdiv">
                    <div>
                      <p><RiRoadMapLine /> Extra Km fare</p>
                      <p><FaGasPump /> Fuel Type</p>
                      <p><AiOutlineFieldTime /> Cancellation</p>
                    </div>
                    <div>
                      <p>₹15.0/km after 167 kms</p>
                      <p>CNG/Diesel</p>
                      <p>Free within 30 mins of booking</p>
                    </div>
                  </div>
                </div>
              <div className="cabSearchLowerright">
                  <div className="cabSerachdiscount"><p>₹2631</p><span>15% off</span></div>
                  <h4>₹2269</h4>
                  <Button className="cabSearchviewbtn" onClick={cabSearchHide}>Hide</Button>
                </div>
              </div>
          </div>

        </div>
      </Container>
    </>
  );
}

export default CabsSearch;
{
  /* <Container fluid className="cabs0">
      <Row className="maincabsrow">
        <Col md={3}>
          <Row className="cabs1">
            <h5>Why Booking Cabs With Us?</h5>
            <p>
              <span>
                <AiOutlineCheckCircle />
              </span>
              Your doorstep pickup & drop to destination
            </p>
            <p>
              <span>
                <AiOutlineCheckCircle />
              </span>
              No extra charges than what's mentioned
            </p>
            <p>
              <span>
                <AiOutlineCheckCircle />
              </span>
              Experienced drivers with safe & comfortable cabs
            </p>
          </Row>
          <div className="filterdropdown-1">

          <div className="filterdropdown-10">
            <DropdownButton
              align="end"
              title="Car Model"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item href="#/action-1"><input type="checkbox" />Etios or similar</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><input type="checkbox"/>Innova or similar</Dropdown.Item>
                <Dropdown.Item href="#/action-3"><input type="checkbox"/>E-Auto</Dropdown.Item>
            </DropdownButton>
          
             <DropdownButton
              align="end"
              title="Passenger capacity"
              id="dropdown-menu-align-end"
            >
              <Dropdown.Item href="#/action-1"><input type="checkbox" />4 Passanger seat</Dropdown.Item>
                <Dropdown.Item href="#/action-2"><input type="checkbox"/>7 Passanger seat</Dropdown.Item>
            </DropdownButton>
          </div>

         

           

          </div>
          <Row className="cabs2">
            <div className="cabs2-filter">
              <h5>Filter</h5>
              <p>Clear all</p>
            </div>
            <hr />
            <div className="cabs2-filter2">
              <div>
                <h6>Car Model</h6>
                <p>RESET</p>
              </div>
              <input type="checkbox" />
              <label>Etios or similar</label>
              <br />
              <input type="checkbox" />
              <label>Innova or similar</label>
              <br />
              <input type="checkbox" />
              <label>E-Auto</label>
            </div>
            <hr />
            <div div className="cabs2-filter3">
              <div>
                <h6>Passenger capacity</h6>
                <p>RESET</p>
              </div>
              <input type="checkbox" />
              <label>4 Passanger seat</label>
              <br />
              <input type="checkbox" />
              <label>7 Passanger seat</label>
            </div>
          </Row>
        </Col>
        <Col md={8}>
          <Row className="cabs-main1">
            
              <Row className="cabs-etios0">
                <Col md={4} className="cabs-etios1-img">
                  <img src="Etios-removebg-preview.png" alt="etios" />
                </Col>

                <Col md={4} className="cabs-etios-dzire">
                  <h2>SEDAN</h2>
                  <h4>Dzire,Etios</h4>
                  <h6>Or More</h6>
                </Col>

                <Col md={4} className="cabs-etios-service">
                  <h6>Services</h6>
                  <p><span><IoMdCheckmarkCircleOutline/></span>AC <span><MdAirlineSeatReclineExtra/> </span>Passangers 4</p>
                </Col>
              </Row>
          
              <div className="cabs-etios">
              <Row className="cabs-etios2">
                <Col>
                  <Row className="cabs-etios2-spec">
                    <h5>Spacious Car</h5>
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
                  </Row>
                </Col>
                <Col md={4} className="cabs-etios3">
                  <p>Free cancellation until 1 hour <br/>before pickup</p>
                  <div>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                  </div>
                  <h6>529 rating</h6>
                  <h5><del>₹2631</del><span>15% off</span></h5>
                  <h4>₹2269</h4>
                  <div>
                    <Link to='/transfer-details'>
                  <Button id="dropdown-basic-button" title="Select" className="cabs-etios3-drop">
                  Search
                  </Button>
                  </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>


          <Row className="cabs-main2">
          <Row className="cabs-etios0">
                <Col md={4} className="cabs-etios1-img">
                  <img src="innova2-removebg-preview.png" alt="etios" />
                </Col>

                <Col md={4} className="cabs-etios-dzire">
                  <h2>SUV</h2>
                  <h4>Innova, Ertiga</h4>
                  <h6>Or More</h6>
                </Col>

                <Col md={4} className="cabs-etios-service">
                  <h6>Services</h6>
                  <p><span><IoMdCheckmarkCircleOutline/></span>AC <span><MdAirlineSeatReclineExtra/> </span>Passangers 4</p>
                </Col>
              </Row>
          
              <div className="cabs-etios">
              <Row className="cabs-etios2">
                <Col>
                  <Row className="cabs-etios2-spec">
                    <h5>Spacious Car</h5>
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
                  </Row>
                </Col>
                <Col md={4} className="cabs-etios3">
                  <p>Free cancellation until 1 hour <br/>before pickup</p>
                  <div>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                    <AiFillStar onClick={handleClick} style={{ color: active ? "black" : "red" }}/>
                  </div>
                  <h6>529 rating</h6>
                  <h5><del>₹2631</del><span>15% off</span></h5>
                  <h4>₹2269</h4>
                  <div>
                    <Link to='/cabsPage'>
                  <Button  id="dropdown-basic-button" title="Select" className="cabs-etios3-drop">Search</Button>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Row>
          
        </Col>
      </Row>
    </Container> */
}
