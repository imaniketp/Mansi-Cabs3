import React,{useState} from 'react'
import './ModifyCabs.css' 
import Select from "react-select";
import DatePicker from "react-datepicker";



const tripType = [
    {id: 1, value: "oneway", label: "One Way" },
    {id: 2, value: "roundtrip", label: "Round Trip" },
    {id: 3, value: "rental", label: "Rental" },
    {id: 4, value: "airport", label: "Airport" },
  ];
const airportType = [
    {id: 1, value: "airportpickup", label: "Airport Pickup" },
    {id: 2, value: "airportdrop", label: "Airport Drop" },
    {id: 3, value: "airportreturn", label: "Airport Return" },
  ];
const options = [
    { value: "selectCity", label: "Select City" },
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
  const airports = [
    { value: "mumbaiairport", label: "Chhatrapati Shivaji International Airport, Mumbai" },
    { value: "puneairport", label: "Pune International Airport, Pune" },
    { value: "nagpurairport", label: "Dr Babasaheb Ambedkar International Airport, Nagpur" },
    { value: "nandedairport", label: " Shri Guru Gobind Singh Ji Airport, Nanded" },
    { value: "akolaairport", label: "Akola Airport"},
    { value: "aurangabadairport", label: "Aurangabad Airport"},
    { value: "shirdiairport", label: "Shirdi Airport"},
    { value: "kolhapurairport", label: "Kolhapur Airport, Kolhapur"},
  ];
  const packages = [
    { value: "1hr10km", label: "1 Hr 10km" },
  { value: "2hr20km", label: "2 Hr 20km" },
  { value: "3hr30km", label: "2 Hr 30km" },
  { value: "4hr40km", label: "2 Hr 40km" },
  { value: "5hr50km", label: "2 Hr 50km" },
  ];

function ModifyCabs() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedAddCity, setSelectedAddCity] = useState(null);
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedAirportList, setSelectedAirportList] = useState(null);
  const [selectedTripType, setSelectedTripType] = useState(tripType[0]);
  const [selectedAirportType, setSelectedAirportType] = useState(airportType[0]);
  

const [startDate, setStartDate] = useState(new Date())

  return (
    <>
    {/* <div className="cabserchtop">
    <Container className="cabsbannermain">

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

          {value === 1 && (
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
          {value === 2 && (
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

          {value === 3 && (
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

          {value === 4 && (
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
        </Container>
            <button className="modifybtn">Modify Details</button>
        
    </div> */}
    <div className='cabSearch2'>
            <div className='cabSearch2Inner'>
              <div className="radioInputCol2">
                <label htmlFor="">Trip Type</label>
                <Select
                  defaultValue={selectedTripType}
                  onChange={setSelectedTripType}
                  options={tripType}
                />
              </div>
              {
                selectedTripType.id === 1 &&
                <>
                    <div className="radioInputCol2">
                      <label htmlFor="">From</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select City"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label htmlFor="">To</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select City"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label>Date & Time</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </div>
                </>
              }
              {
                selectedTripType.id === 2 &&
                <>
                    <div  className="radioInputCol2">
                      <label htmlFor="">From</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select City"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label htmlFor="">To</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select City"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label htmlFor="">Add City</label>
                      <Select
                        defaultValue={selectedAddCity}
                        onChange={setSelectedAddCity}
                        options={addCity}
                        placeholder="Select City"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label>Date & Time</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label>Return</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </div>
                </>
              }
              {
                selectedTripType.id === 3 &&
                <>
                    <div  className="radioInputCol2">
                      <label htmlFor="">From</label>
                      <Select
                        defaultValue={selectedOption}
                        onChange={setSelectedOption}
                        options={options}
                        placeholder="Select City"
                      />
                    </div>

                    <div  className="radioInputCol2">
                      <label htmlFor="">Select Package</label>
                      <Select
                        defaultValue={selectedPackage}
                        onChange={setSelectedPackage}
                        options={packages}
                        placeholder="Select Package"
                      />
                    </div>

                    <div className="radioInputCol2">
                      <label>Date & Time</label>
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        showTimeSelect
                        dateFormat="MMMM d, yyyy h:mm aa"
                      />
                    </div>
                </>
              }
              {
                selectedTripType.id === 4 &&
                 selectedAirportType.id === 1 &&
                <>
                    <div className="radioInputCol2">
                      <label htmlFor="">Airport Type</label>
                      <Select
                        defaultValue={selectedAirportType}
                        onChange={setSelectedAirportType}
                        options={airportType}
                      />
                    </div>
                    <div className="radioInputCol2">
                        <label htmlFor="">Select Airport</label>
                        <Select
                          defaultValue={selectedAirportList}
                          onChange={setSelectedAirportList}
                          options={airports}
                          placeholder="Select Airport"
                        />
                    </div>
                    <div className="radioInputCol2">
                        <label htmlFor="">City</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          placeholder="Select City"
                        />
                    </div>
                    <div className="radioInputCol2">
                        <label>Date & Time</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                </>
              }
              {
                selectedTripType.id === 4 &&
                 selectedAirportType.id === 2 &&
                <>
                    <div className="radioInputCol2">
                      <label htmlFor="">Airport Type</label>
                      <Select
                        defaultValue={selectedAirportType}
                        onChange={setSelectedAirportType}
                        options={airportType}
                      />
                    </div>
                    <div className="radioInputCol2">
                        <label htmlFor="">City</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          placeholder="Select City"
                        />
                    </div>
                    <div className="radioInputCol2">
                        <label htmlFor="">Select Airport</label>
                        <Select
                          defaultValue={selectedAirportList}
                          onChange={setSelectedAirportList}
                          options={airports}
                          placeholder="Select Airport"
                        />
                    </div>
                    <div className="radioInputCol2">
                        <label>Date & Time</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                </>
              }
              {
                selectedTripType.id === 4 &&
                 selectedAirportType.id === 3 &&
                <>
                    <div className="radioInputCol2">
                      <label htmlFor="">Airport Type</label>
                      <Select
                        defaultValue={selectedAirportType}
                        onChange={setSelectedAirportType}
                        options={airportType}
                      />
                    </div>
                    <div className="radioInputCol2">
                        <label htmlFor="">City</label>
                        <Select
                          defaultValue={selectedOption}
                          onChange={setSelectedOption}
                          options={options}
                          placeholder="Select City"
                        />
                    </div>
                    <div className="radioInputCol2">
                        <label htmlFor="">Select Airport</label>
                        <Select
                          defaultValue={selectedAirportList}
                          onChange={setSelectedAirportList}
                          options={airports}
                          placeholder="Select Airport"
                        />
                    </div>
                    <div className="radioInputCol2">
                        <label>Date & Time</label>
                        <DatePicker
                          selected={startDate}
                          onChange={(date) => setStartDate(date)}
                          showTimeSelect
                          dateFormat="MMMM d, yyyy h:mm aa"
                        />
                    </div>
                </>
              }
            </div>
              <button className='cabSearch2btn'>Modify</button>
    </div>
    
    </>
  )
}

export default ModifyCabs