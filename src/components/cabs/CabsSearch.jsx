import React from "react";
import { useState } from "react";
import {
  Row,
  Col,
  Container,
  Dropdown,
  Button,
  DropdownButton,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import {
  AiOutlineCheckCircle,
  AiFillStar,
  AiOutlineFieldTime,
} from "react-icons/ai";
import { FaGasPump } from "react-icons/fa";
import { RiRoadMapLine } from "react-icons/ri";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra, MdLuggage } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CabsSearch.css";
import ModifyCabs from "./ModifyCabs";
import etios from "../../Assets/etios.png";
import {
  FcApproval,
  FcCancel,
  FcClearFilters,
  FcMoneyTransfer,
  FcPaid,
} from "react-icons/fc";

const searchCab = [
  {
    carType: "SEDAN",
    carImg: "etios.png",
    carName: "Indica, Swift, Alto Or Equivalent Diesel",
    passno: "4",
    disprice: "17000",
    save: "1",
    price: "16999",
  },
  {
    carType: "SUV",
    carImg: "innova.png",
    carName: "Ertiga, Innova, Fortuner Or Equivalent Diesel",
    passno: "7",
    disprice: "200",
    save: "50",
    price: "150",
  },
  {
    carType: "SEDAN",
    carImg: "etios.png",
    carName: "Indica, Swift, Alto Or Equivalent Diesel",
    passno: "4",
    disprice: "17000",
    save: "100%",
    price: "Free",
  },
  {
    carType: "SUV",
    carImg: "innova.png",
    carName: "Ertiga, Innova, Fortuner Or Equivalent Diesel",
    passno: "7",
    disprice: "22999",
    save: "-1",
    price: "23000",
  },
];

function CabsSearch() {
  const [showMore, setshowMore] = useState(false);
  //   const handleClick = () => {
  //   setActive(!active);
  // }

  const Showmoremansi = () => {
    setshowMore(!showMore);
  };
  const cabSearchShow = () => {
    document.getElementById("cabSearchLower").style.display = "flex";
    document.getElementById("cabSerachdiscount").style.display = "none";
    document.getElementById("cabSerachdiscountamt").style.display = "none";
    document.getElementById("cabSearchviewbtn").style.display = "none";
  };
  const cabSearchHide = () => {
    document.getElementById("cabSearchLower").style.display = "none";
    document.getElementById("cabSerachdiscount").style.display = "flex";
    document.getElementById("cabSerachdiscountamt").style.display = "block";
    document.getElementById("cabSearchviewbtn").style.display = "block";
  };

  return (
    <Container fluid className="searchmain">
      <div className="searchfilter">
        <div className="searchfilter1">
          <h3>
            Filter <FcClearFilters />
          </h3>
          <p>Clear all</p>
        </div>
        <hr />
        <div className="searchfilter2">
          <h6>Car Model</h6>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="4p" />
            <label htmlFor="4p">Sedan</label>
          </div>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="7p" />
            <label htmlFor="7p">Hatchback</label>
          </div>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="7p" />
            <label htmlFor="7p">SUV</label>
          </div>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="7p" />
            <label htmlFor="7p">Traveller</label>
          </div>
        </div>
        <div className="searchfilter2">
          <h6>Passenger Capacity</h6>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="4p" />
            <label htmlFor="4p">4 Passenger seat</label>
          </div>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="7p" />
            <label htmlFor="7p">7 Passenger seat</label>
          </div>
          <div className="cabsearchfiltercheck">
            <input type="checkbox" name="7p" />
            <label htmlFor="7p">12 Passenger seat</label>
          </div>
        </div>
      </div>

      <div>
        <div className="filterDropdown">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Car Model"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">
                <input type="checkbox" name="4p" />
                <label htmlFor="4p">Sedan</label>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <input type="checkbox" name="7p" />
                <label htmlFor="7p">Hatchback</label>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <input type="checkbox" name="7p" />
                <label htmlFor="7p">SUV</label>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <input type="checkbox" name="7p" />
                <label htmlFor="7p">Traveller</label>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Passenger Capacity"
              menuVariant="light"
            >
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <input type="checkbox" name="7p" />
                <label htmlFor="7p">4 Passenger seat</label>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">
                {" "}
                <input type="checkbox" name="7p" />
                <label htmlFor="7p">4 Passenger seat</label>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </div>

        {searchCab.map((item, index) => (
          <div key={index} className="search1row">
            <div className="search1row1">
              <div className="search1ndcol">
                <img src={item.carImg} alt="" />
                <p>{item.carType}</p>
              </div>
              <div md={4} className="search2ndcol">
                <h5>{item.carName}</h5>
                <div className="ac">
                  <p>
                    <IoMdCheckmarkCircleOutline /> AC
                  </p>
                  <p>
                    <MdLuggage /> Luggage Bags
                  </p>
                  <p>
                    <MdAirlineSeatReclineExtra /> Passenger {item.passno}
                  </p>
                </div>
                <h6>Best Priced Car With Best Promise</h6>
                <li>Free cancellation within 0.1 sec</li>
                <li>24/7 customer helpline</li>
                <p className="cabsearchmore" onClick={Showmoremansi}>
                  More
                </p>
              </div>
            </div>
            {showMore && (
              <div className="search3rdcol">
                <div>
                  <h6>
                    <FcApproval /> Inclusions
                  </h6>
                  <p>Extra fare ₹13.00/km</p>
                  <p>Driver Allowance</p>
                </div>
                <div>
                  <h6>
                    <FcCancel /> Exclusions
                  </h6>
                  <p>Parking Charges</p>
                  <p>Pay 25% Advance</p>
                  <p>Toll Charges</p>
                </div>
              </div>
            )}

            <div className="search7rdcol">
              <div>
                <h6>
                  <FcApproval /> Inclusions
                </h6>
                <p>Extra fare ₹13.00/km</p>
                <p>Driver Allowance</p>
              </div>
              <div>
                <h6>
                  <FcCancel /> Exclusions
                </h6>
                <p>Parking Charges</p>
                <p>Pay 25% Advance</p>
                <p>Toll Charges</p>
              </div>
            </div>

            <div className="search4rtcol">
              <div className="search4rtcolinner">
                <h6>
                  <del>₹ {item.disprice}</del>
                  <br />
                  <p>
                    <FcMoneyTransfer /> Save ₹{item.save}
                  </p>
                </h6>
                <h4>₹ {item.price}</h4>
              </div>

              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </Container>

  );
}

export default CabsSearch;
