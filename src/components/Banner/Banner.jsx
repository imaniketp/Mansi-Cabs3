import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import Select from "react-select";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { GiCircle, GiCommercialAirplane, GiRoad } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiTrip } from "react-icons/bi";
import { BsCircleFill } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import DatePicker from "react-datepicker";

const options = [
  { value: "mumbai", label: "Mumbai" },
  { value: "nashik", label: "Nashik" },
  { value: "pune", label: "Pune" },
];
const addCity = [
  { value: "mumbai", label: "Mumbai" },
  { value: "nashik", label: "Nashik" },
  { value: "pune", label: "Pune" },
  { value: "Amravati", label: "Amravati" },
  { value: "Aurangabad", label: "Aurangabad" },
  { value: "Kokan", label: "Kokan" },
  { value: "Shirdi", label: "Shirdi" },
  { value: "Nagpur", label: "Nagpur" },
  { value: "Surat", label: "Surat" },
  { value: "Indore", label: "Indore" },
  { value: "Ujjain", label: "Ujjain" },
];
const time = [
  { value: "12:00pm", label: "12:00PM" },
  { value: "01:00pm", label: "01:00PM" },
  { value: "02:00pm", label: "02:00PM" },
];
const airportOptions = [
  { value: "fromAirport", label: "From Airport" },
  { value: "toAirport", label: "To Airport" },
];
const airports = [
  {
    value: "mumbaiairport",
    label: "Chhatrapati Shivaji International Airport, Mumbai",
  },
  { value: "puneairport", label: "Pune International Airport, Pune" },
  {
    value: "nagpurairport",
    label: "Dr Babasaheb Ambedkar International Airport, Nagpur",
  },
  {
    value: "nandedairport",
    label: " Shri Guru Gobind Singh Ji Airport, Nanded",
  },
  { value: "akolaairport", label: "Akola Airport" },
  { value: "aurangabadairport", label: "Aurangabad Airport" },
  { value: "shirdiairport", label: "Shirdi Airport" },
  { value: "kolhapurairport", label: "Kolhapur Airport, Kolhapur" },
];
const packages = [
  { value: "none", label: "None" },
  { value: "1hr10km", label: "1 Hr 10km" },
  { value: "2hr20km", label: "2 Hr 20km" },
  { value: "3hr30km", label: "2 Hr 30km" },
  { value: "4hr40km", label: "2 Hr 40km" },
  { value: "5hr50km", label: "2 Hr 50km" },
];

function Banner() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddCity, setSelectedAddCity] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAirport, setSelectedAirport] = useState(null);
  const [selectedAirportList, setSelectedAirportList] = useState(null);

  const [value, setValue] = useState(1);

  const [onewayActive, setonewayActive] = useState(true);
  const [roundActive, setroundActive] = useState(false);
  const [rentalActive, setrentalActive] = useState(false);
  const [airportActive, setairportActive] = useState(false);

  const [airportValue, setairportValue] = useState(1);
  const [airportPickUp, setairportPickUp] = useState(true);
  const [airportDrop, setairportDrop] = useState(false);
  const [airportReturn, setairportReturn] = useState(false);

  const oneWayTrip = () => {
    setonewayActive(true);
    setroundActive(false);
    setrentalActive(false);
    setairportActive(false);
    setValue(1);
  };

  const roundTrip = () => {
    setValue(2);
    setroundActive(true);
    setonewayActive(false);
    setrentalActive(false);
    setairportActive(false);
  };

  const rental = () => {
    setValue(3);
    setrentalActive(true);
    setonewayActive(false);
    setroundActive(false);
    setairportActive(false);
  };

  const airport = () => {
    setValue(4);
    setairportActive(true);
    setonewayActive(false);
    setroundActive(false);
    setrentalActive(false);
  };

  const oneWayTrip1 = () => {
    setonewayActive(true);
    setroundActive(false);
    setrentalActive(false);
    setairportActive(false);
    setValue(1);
  };

  const roundTrip1 = () => {
    setValue(2);
    setroundActive(true);
    setonewayActive(false);
    setrentalActive(false);
    setairportActive(false);
  };

  const rental1 = () => {
    setValue(3);
    setrentalActive(true);
    setonewayActive(false);
    setroundActive(false);
    setairportActive(false);
  };

  const airport1 = () => {
    setValue(4);
    setairportActive(true);
    setonewayActive(false);
    setroundActive(false);
    setrentalActive(false);
  };
  const airportpickup = () => {
    setairportValue(1);
    setairportPickUp(true);
    setairportDrop(false);
    setairportReturn(false);
  };
  const airportdrop = () => {
    setairportValue(2);
    setairportDrop(true);
    setairportPickUp(false);
    setairportReturn(false);
  };
  const airportreturn = () => {
    setairportValue(3);
    setairportDrop(false);
    setairportPickUp(false);
    setairportReturn(true);
  };

  const dates = new Date();
  const [startDate, setStartDate] = useState(new Date())
  

  return (
    <section className="p-0 hero__slider-section" id="chilla">
      {/* <div className="banner1Img">
        <img src="main bg.jpg" alt="" />
      </div> */}

      <div className="hero__form">
        <Container className="bannermain">
          {/* <Row className="radiobtn" >
            <Col className="mainradiobtn">
              <div onClick={oneWayTrip}>
                <GiCircle 
                style={{
                  color: onewayActive ? "#7142f8" : "black",
                  border: onewayActive ? "3px solid" : "1px",
                  borderRadius: onewayActive ? "50%" : "0"
                }}
                />
                <p
                style={{
                  fontWeight: onewayActive ? "bolder" : "normal"
                }}
                >One Way Trip</p>
              </div>
            </Col>

            <Col className="mainradiobtn">
              <div onClick={roundTrip}>
                <GiCircle 
                style={{
                  color: roundActive ? "#7142f8" : "black",
                  border: roundActive ? "3px solid" : "1px",
                  borderRadius: roundActive ? "50%" : "0"
                }} />
                <p
                style={{
                  fontWeight: roundActive ? "bolder" : "normal"
                }}>Round Trip</p>
              </div>
            </Col>

            <Col className="mainradiobtn">
              <div onClick={rental}>
                <GiCircle 
                style={{
                  color: rentalActive ? "#7142f8" : "black",
                  border: rentalActive ? "3px solid" : "1px",
                  borderRadius: rentalActive ? "50%" : "0"
                }} />
                <p
                style={{
                  fontWeight: rentalActive ? "bolder" : "normal"
                }}>Rental</p>
              </div>
            </Col>

            <Col className="mainradiobtn">
              <div onClick={airport}>
                <GiCircle  
                style={{
                  color: airportActive ? "#7142f8" : "black",
                  border: airportActive ? "3px solid" : "1px",
                  borderRadius: airportActive ? "50%" : "0"
                }}/>
                <p
                style={{
                  fontWeight: airportActive ? "bolder" : "normal"
                }}>Airport</p>
              </div>
            </Col>
          </Row> */}

          <div className="radiobtn">
            <div className="radiobtninner">
              <div
                className="mainradiobtn1"
                onClick={oneWayTrip}
                style={{
                  color: onewayActive ? "white" : "black",
                  backgroundColor: onewayActive ? "#7142f8" : "white",
                }}
              >
                <GiRoad /> One Way
              </div>
              <div
                className="mainradiobtn1"
                onClick={roundTrip}
                style={{
                  color: roundActive ? "white" : "black",
                  backgroundColor: roundActive ? "#7142f8" : "white",
                }}
              >
                <BiTrip /> Round Trip
              </div>
              <div
                className="mainradiobtn1"
                onClick={rental}
                style={{
                  color: rentalActive ? "white" : "black",
                  backgroundColor: rentalActive ? "#7142f8" : "white",
                }}
              >
                <HiOutlineBuildingOffice2 /> Rental
              </div>
              <div
                className="mainradiobtn1"
                onClick={airport}
                style={{
                  color: airportActive ? "white" : "black",
                  backgroundColor: airportActive ? "#7142f8" : "white",
                }}
              >
                <GiCommercialAirplane /> Airport
              </div>
            </div>
          </div>

          <Row className="radiobtn2">
            <Col md={6} className="mainradiobtn">
              <Col className="mainradiobtn2" md={3}>
                <button
                  className={`bannerControlBtn${
                    onewayActive ? "Active" : "Inactive"
                  }`}
                  onClick={oneWayTrip1}
                ><GiRoad /> One Way
                </button>
              </Col>
              <Col className="mainradiobtn2" md={3}>
                <button
                  className={`bannerControlBtn${
                    roundActive ? "Active" : "Inactive"
                  }`}
                  onClick={roundTrip1}
                >
                  <BiTrip /> Round Trip
                </button>
              </Col>
            </Col>

            <Col md={6} className="mainradiobtn">
              <Col className="mainradiobtn2" md={3}>
                <button
                  className={`bannerControlBtn${
                    rentalActive ? "Active" : "Inactive"
                  }`}
                  onClick={rental1}
                >
                  <HiOutlineBuildingOffice2 /> Rental
                </button>
              </Col>
              <Col className="mainradiobtn2" md={3}>
                <button
                  className={`bannerControlBtn${
                    airportActive ? "Active" : "Inactive"
                  }`}
                  onClick={airport1}
                >
                  <GiCommercialAirplane /> Airport
                </button>
              </Col>
            </Col>
          </Row>

          {value == 1 && (
            <Row className="radioInput">
              <Col md={3} className="radioInputCol">
                <label htmlFor="">From</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </Col>
              <Col md={1} className="radioInputCol">
                <div className="radioInputArrow">
                  <CgArrowsExchangeAlt />
                </div>
              </Col>
              <Col md={4} className="radioInputCol">
                <label htmlFor="">To</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Col>
            </Row>
          )}
          {value == 2 && (
            <>
              <Row className="radioInput">
                <Col md={2} className="radioInputCol">
                  <label htmlFor="">From</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Select City"
                  />
                </Col>
                <Col md={1} className="radioInputCol">
                  <div className="radioInputArrow">
                    <CgArrowsExchangeAlt />
                  </div>
                </Col>
                <Col md={2} className="radioInputCol">
                  <label htmlFor="">To</label>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                    placeholder="Select City"
                  />
                </Col>
                <Col md={2} className="radioInputCol">
                  <label htmlFor="">Add City</label>
                  <Select
                    defaultValue={selectedAddCity}
                    onChange={setSelectedAddCity}
                    options={addCity}
                    placeholder="Select City"
                  />
                </Col>
                <Col md={5}>
                  <Row>
                <Col md={6} className="radioInputCol">
                  <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                </Col>
                <Col md={6} className="radioInputCol">
                  <label>Return Date</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
                </Col>
                </Row>
                </Col>
              </Row>
  
            </>
          )}

          {value == 3 && (
            <Row className="radioInput">
              <Col md={4} className="radioInputCol">
                <label htmlFor="">From</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label htmlFor="">Select Package</label>
                <Select
                  defaultValue={selectedPackage}
                  onChange={setSelectedPackage}
                  options={packages}
                  placeholder="Select Package"
                />
              </Col>

              <Col md={4} className="radioInputCol">
                <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Col>
            </Row>
          )}

          {value == 4 && (
            <div className="airportOptions">
              <div onClick={airportpickup}>
                <BsCircleFill
                  className={`airportpickup${
                    airportPickUp ? "Active" : "Inactive"
                  }`}
                />
                Airport Pickup
              </div>
              <div onClick={airportdrop}>
                <BsCircleFill
                  className={`airportdrop${
                    airportDrop ? "Active" : "Inactive"
                  }`}
                />
                Airport Drop
              </div>
              <div onClick={airportreturn}>
                <BsCircleFill
                  className={`airportreturn${
                    airportReturn ? "Active" : "Inactive"
                  }`}
                />
                Airport Return
              </div>
            </div>
          )}
          {value === 4 && airportValue === 1 && (
            <Row className="radioInput">
              {/* <Col md={2} className="radioInputCol">
                    <label htmlFor="">Trip</label>
                    <Select
                      defaultValue={selectedAirport}
                      onChange={setSelectedAirport}
                      options={airportOptions}
                      placeholder="Select Trip"
                    />
                  </Col> */}
              <Col md={4} className="radioInputCol">
                <label htmlFor="">Select Airport</label>
                <Select
                  defaultValue={selectedAirportList}
                  onChange={setSelectedAirportList}
                  options={airports}
                  placeholder="Select Airport"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label htmlFor="">City</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Col>
            </Row>
          )}

          {value === 4 && airportValue === 2 && (
            <Row className="radioInput">
              <Col md={4} className="radioInputCol">
                <label htmlFor="">City</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label htmlFor="">Select Airport</label>
                <Select
                  defaultValue={selectedAirportList}
                  onChange={setSelectedAirportList}
                  options={airports}
                  placeholder="Select Airport"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Col>
            </Row>
          )}

          {value === 4 && airportValue === 3 && (
            <Row className="radioInput">
              {/* <Col md={2} className="radioInputCol">
                    <label htmlFor="">Trip</label>
                    <Select
                      defaultValue={selectedAirport}
                      onChange={setSelectedAirport}
                      options={airportOptions}
                      placeholder="Select Trip"
                    />
                  </Col> */}
              <Col md={4} className="radioInputCol">
                <label htmlFor="">Select Airport</label>
                <Select
                  defaultValue={selectedAirportList}
                  onChange={setSelectedAirportList}
                  options={airports}
                  placeholder="Select Airport"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label htmlFor="">City</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </Col>
              <Col md={4} className="radioInputCol">
                <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </Col>
            </Row>
          )}

          <div className="searchbtndiv">
            <Link to="/cabsSearch" className="searchbtn">
              SEARCH CABS
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Banner;
