import React from "react";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { MdAirlineSeatReclineExtra, MdLuggage } from "react-icons/md";
import { Link } from "react-router-dom";
import "./CabsSearch.css";
import ModifyCabs from "./ModifyCabs";
import {FcClearFilters} from "react-icons/fc";
import exkm from '../../Assets/exkm.jpeg'
import fueltype from '../../Assets/fueltype.jpeg'
import cancelimg from '../../Assets/cancelimg.jpeg'
import etios from '../../Assets/etios.png'


const searchCab = [
  {
    carType: "SEDAN",
    carImg: `${etios}`,
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SEDAN",
    carImg: `${etios}`,
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SEDAN",
    carImg: `${etios}`,
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SEDAN",
    carImg: `${etios}`,
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SEDAN",
    carImg: `${etios}`,
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  {
    carType: "SEDAN",
    carImg: `${etios}`,
    carName: "Indica, Swift, Alto",
    passno: "4",
    disprice: "4000",
    save: "900",
    price: "3100",
  },
  
];

function CabsSearch() {

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
                title="Car Type"
                menuVariant="light"
                className="filterDropMain"
              >
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="4p" />
                  <label htmlFor="4p">Sedan</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">Hatchback</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">SUV</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">Traveller</label>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            <Nav>
              <NavDropdown
                id="nav-dropdown-dark-example"
                title="Passenger"
                menuVariant="light"
                className="filterDropMain"
              >
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">4 Seater</label>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.1">
                  <input type="checkbox" name="7p" />
                  <label htmlFor="7p">7 Seater</label>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </div>

          {searchCab.map((item, index) => (
          <Link to="/transfer-details">
            <div key={index} className="search1row">
              <div className="search1row1">
                <div className="search1ndcol">
                  <div>
                    <p>{item.carType}</p>
                    <h5>{item.carName}</h5>
                    <div className="ac">
                      <p>
                        <IoMdCheckmarkCircleOutline className="acicons"/> AC
                      </p>
                      <p>
                        <MdLuggage className="acicons"/> Luggage
                      </p>
                      <p>
                        <MdAirlineSeatReclineExtra className="acicons"/> Passenger {item.passno}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="search2ndcol">
                  <div className="seperate">
                    <p className="cabs-etios2-spec2">
                      <span>
                        <img src={exkm} alt="" />
                      </span>
                      Extra Km fare
                    </p>
                    <p className="cabs-etios2-spec3">₹15.0/km after 167 kms</p>
                  </div>
                  <div className="seperate">
                    <p className="cabs-etios2-spec2">
                    <span>
                        <img src={fueltype} alt="" />
                        </span>
                        Fuel Type
                    </p>
                    <p className="cabs-etios2-spec3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CNG/Diesel</p>
                  </div>
                  <div className="seperate">
                    <p className="cabs-etios2-spec2">
                    <span>
                        <img src={cancelimg} alt="" />
                        </span>
                        Cancellation
                    </p>
                    <p className="cabs-etios2-spec3">&nbsp;&nbsp;Free within 30 mins</p>
                  </div>
                  <div className="cabSearchBox">
                      <p>Double Guarantee Confirmed cab arrival or 2X refund Double Guarantee Confirmed cab arrival or 2X refund</p>
                  </div>
                  
                </div>
              </div>

              <div className="search4rtcol">
                <div className="cabSearchRating">
                  <p className="cabRating">4.5</p>&nbsp;/&nbsp;<p className="totalRating">5</p>
                </div>
                <img src={item.carImg} alt="" />

                <div className="search4rtcolinner">
                  <h6>
                    ₹<del>{item.disprice}</del>
                    <p>10%Off</p>
                  </h6>

                  <h4>₹{item.price}</h4>
                </div>
                  <button>Book Now</button>
              </div>
            </div>
                </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default CabsSearch;