import React, { useState } from "react";
import "./ModifyCabs.css";
import Select from "react-select";
import DatePicker from "react-datepicker";
import { MdOutlineModeEdit } from "react-icons/md";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate} from "react-router-dom";
import { BiArrowBack} from "react-icons/bi";

const tripType = [
  { id: 1, value: "oneway", label: "One Way" },
  { id: 2, value: "roundtrip", label: "Round Trip" },
  { id: 3, value: "rental", label: "Rental" },
  { id: 4, value: "airport", label: "Airport" },
];
const airportType = [
  { id: 1, value: "airportpickup", label: "Airport Pickup" },
  { id: 2, value: "airportdrop", label: "Airport Drop" },
  { id: 3, value: "airportreturn", label: "Airport Return" },
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
  const [selectedAirportType, setSelectedAirportType] = useState(
    airportType[0]
  );

  const [startDate, setStartDate] = useState(new Date());

  const [showModify, setShowModify] = useState(false);

  const handleClose = () => setShowModify(false);
  const handleShow = () => setShowModify(true);

  let navigate = useNavigate();

  return (
    <>
      <div className="cabSearch2">
        <div className="cabSearch2Inner">
          <div className="radioInputCol2">
            <label htmlFor="">Trip Type</label>
            <Select
              defaultValue={selectedTripType}
              onChange={setSelectedTripType}
              options={tripType}
            />
          </div>
          {selectedTripType.id === 1 && (
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
          )}
          {selectedTripType.id === 2 && (
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
          )}
          {selectedTripType.id === 3 && (
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
          )}
          {selectedTripType.id === 4 && selectedAirportType.id === 1 && (
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
          )}
          {selectedTripType.id === 4 && selectedAirportType.id === 2 && (
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
          )}
          {selectedTripType.id === 4 && selectedAirportType.id === 3 && (
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
          )}
          <button className="cabSearch2btn">Modify</button>
        </div>

        <div className="cabSearch2Inner2">
          <BiArrowBack className="backbtn" onClick={() => navigate(-1)} />
          <div className="cabSearch2Inner2Places">
            <p>Mumbai</p>To<p>Nashik</p>
          </div>

          <div className="cabSearch2Inner2date">
            <div className="radioInputCol3">
              <label>Date & Time</label>
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                showTimeSelect
                dateFormat="MMMM d, yyyy h:mm aa"
              />
            </div>
            <p className="cabSearch2Inner2btn" onClick={handleShow}>
              <MdOutlineModeEdit />
              Edit
            </p>
          </div>
        </div>

        <Modal show={showModify} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modify Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className="radioInputCol4">
                <label htmlFor="">From</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </div>

              <div className="radioInputCol4">
                <label htmlFor="">To</label>
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="Select City"
                />
              </div>

              <div className="radioInputCol4">
                <label>Date & Time</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  showTimeSelect
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="radioInputCol4btn" onClick={handleClose}>
              Modify
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default ModifyCabs;
