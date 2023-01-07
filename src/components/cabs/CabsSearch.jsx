import React from "react";
import { useState } from "react";
import {Container,Nav,NavDropdown,} from "react-bootstrap";
import {AiFillStar} from "react-icons/ai";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra, MdLuggage } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CabsSearch.css";
import ModifyCabs from "./ModifyCabs";
import {FcApproval,FcCancel,FcClearFilters,FcMoneyTransfer,} from "react-icons/fc";

const searchCab = [
  {
    carType: "SEDAN",
    carImg: "etios.png",
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SUV",
    carImg: "etios.png",
    carName: "Ertiga, Innova, Fortuner",
    passno: "7",
    disprice: "10000",
    save: "1500",
    price: "8500",
  },
  {
    carType: "SEDAN",
    carImg: "etios.png",
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "6000",
    save: "1001",
    price: "4999",
  },
  {
    carType: "SUV",
    carImg: "etios.png",
    carName: "Ertiga, Innova, Fortuner",
    passno: "7",
    disprice: "5000",
    save: "501",
    price: "4499",
  },
  {
    carType: "SUV",
    carImg: "etios.png",
    carName: "Ertiga, Innova, Fortuner",
    passno: "7",
    disprice: "5000",
    save: "501",
    price: "4499",
  },
  {
    carType: "SUV",
    carImg: "innova.png",
    carName: "Ertiga, Innova, Fortuner",
    passno: "7",
    disprice: "5000",
    save: "501",
    price: "4499",
  },
];

function CabsSearch() {
  const [showMore, setshowMore] = useState(false);

  const Showmoremansi = () => {
    setshowMore(!showMore);
  };

  return (
    <>
    <ModifyCabs />
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
                <p>{item.carType}</p>
                <div>
                  <AiFillStar className="star"/>
                  <AiFillStar className="star"/>
                  <AiFillStar className="star"/>
                  <AiFillStar className="star"/>
                  <AiFillStar className="star1"/>
                </div>
                <img src={item.carImg} alt="" />
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
                <li>Free cancellation within 30 mins</li>
                <li>24/7 customer helpline</li>
                <p className="cabsearchmore" onClick={Showmoremansi}>
                  More
                </p>
              </div>
            </div>
            {showMore && (
              <div className="search3rdcol">
                <div>
                <h6>Best Priced Car With Best Promise</h6>
                <li>Free cancellation within 0.1 sec</li>
                <li>24/7 customer helpline</li>
                </div>
              </div>
            )}

            <div className="search4rtcol">
              <div className="search4rtcolinner">
                <h6>
                  ₹<del> {item.disprice}</del>
                  <br />
                  <p>
                    <FcMoneyTransfer /> Save ₹{item.save}
                  </p>
                </h6>
                <h4>₹ {item.price}</h4>
              </div>
              <Link to='/transfer-details'><button>Book Now</button></Link>
            </div>
          </div>
        ))}
      </div>
    </Container>
    </>
  );
}

export default CabsSearch;
