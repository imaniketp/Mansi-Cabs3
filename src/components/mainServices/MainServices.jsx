import React from "react";
import Slider from "react-slick";
import "./MainServices.css";
import airport from "../../Assets/airport.jpg";
import round from "../../Assets/round.jpg";
import rental from "../../Assets/rental.jpg";
import caronroad from "../../Assets/car-backss.png";
import car from "../../Assets/car.png";
import chauffeur from "../../Assets/chauffeur.png";
import shield from "../../Assets/shield.png";
import busstop from "../../Assets/bus-stop.png";
import hatchback from "../../Assets/hatchback.png";
import hand from "../../Assets/hand.png";
import india from "../../Assets/india.png";
import highwayy from "../../Assets/highwayy.png";
import turn from "../../Assets/turn.png";
import route from "../../Assets/route.png";
import booking from "../../Assets/booking.png";
import clock from "../../Assets/clock.png";
import carinsur from "../../Assets/car-insurance.png";
import rating from "../../Assets/ratings.png";
import { Link } from "react-router-dom";

function MainServices() {

  const settings = {
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    
  };
  return (
    <div className="serviceSliderContainer">
      <div className="serviceSliderTitle">
        <h1>Our Services</h1>
      </div>

      <div className="outerServiceSlider">
        <div className="servicesliderControls">
          <div className="mainServiceslider">
            <Slider {...settings}>
              <div className="serviceslides">
                <div className="innerServiceSlider1">
                  <h2>ROUNDTRIP CABS</h2>
                  <div className="servicesmallimages">
                    <img src={car} alt="" />
                  </div>
                </div>
                <div className="innerServiceSlider2">
                  <div className="innerServiceSlider2Col1" md={6}>
                    <img src={round} alt="" />
                  </div>
                  <div className="innerServiceSlider2Col2" md={6}>
                    <p>
                      Our Premium Round Trip Services Will Pamper You With An
                      Absolutely
                      <span>
                        Comfortable Drive From Your Doorstep & Back. Our
                        Chauffeurs Are Not Only Courteous But Are Also Expert
                        Travel Companions That Will Make Your Road Travel
                        Memorable. Affordable Luxury, As We'd Like To Call it.
                      </span>
                    </p>

                    <div className="pranay">
                      <div className="servicecol2outerDiv">
                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={chauffeur} alt="" />
                          </div>
                          <p>Expert Chauffeus</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={shield} alt="" />
                          </div>
                          <p>Safety Certified</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={busstop} alt="" />
                          </div>
                          <p>Multiple Stops</p>
                        </div>

                        <Link to="/roundtrip">
                          <p className="servicemore">more.</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="serviceslides">
                <div className="innerServiceSlider1">
                  <h2>ONEWAY DROPS</h2>
                  <div className="servicesmallimages">
                    <img src={highwayy} alt="" />
                  </div>
                </div>
                <div className="innerServiceSlider2">
                  <div className="innerServiceSlider2Col1" md={6}>
                    <img src={caronroad} alt="" />
                  </div>
                  <div className="innerServiceSlider2Col2" md={6}>
                    <p>
                      Our Premium Round Trip Services Will Pamper You With An
                      Absolutely
                      <span>
                        Comfortable Drive From Your Doorstep & Back. Our
                        Chauffeurs Are Not Only Courteous But Are Also Expert
                        Travel Companions That Will Make Your Road Travel
                        Memorable. Affordable Luxury, As We'd Like To Call it.
                      </span>
                    </p>

                    <div className="pranay">
                      <div className="servicecol2outerDiv">
                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={hatchback} alt="" />
                          </div>
                          <p>Expert Chauffeus</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={hand} alt="" />
                          </div>
                          <p>Safety Certified</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={india} alt="" />
                          </div>
                          <p>Multiple Stops</p>
                        </div>
                      <Link to="/oneway">
                        <p className="servicemore">more.</p>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="serviceslides">
                <div className="innerServiceSlider1">
                  <h2>LOCAL RENTAL</h2>
                  <div className="servicesmallimages">
                    <img src={turn} alt="" />
                  </div>
                </div>
                <div className="innerServiceSlider2">
                  <div className="innerServiceSlider2Col1" md={6}>
                    <img src={rental} alt="" />
                  </div>
                  <div className="innerServiceSlider2Col2" md={6}>
                    <p>
                      Our Premium Round Trip Services Will Pamper You With An
                      Absolutely
                      <span>
                        Comfortable Drive From Your Doorstep & Back. Our
                        Chauffeurs Are Not Only Courteous But Are Also Expert
                        Travel Companions That Will Make Your Road Travel
                        Memorable. Affordable Luxury, As We'd Like To Call it.
                      </span>
                    </p>
                    <div className="pranay">
                      <div className="servicecol2outerDiv">
                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={booking} alt="" />
                          </div>
                          <p>Expert Chauffeus</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={clock} alt="" />
                          </div>
                          <p>Safety Certified</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={busstop} alt="" />
                          </div>
                          <p>Multiple Stops</p>
                        </div>
                      <Link to="/localrental">
                        <p className="servicemore">more.</p>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="serviceslides">
                <div className="innerServiceSlider1">
                  <h2>AIRPORT</h2>
                  <div className="servicesmallimages">
                    <img src={route} alt="" />
                  </div>
                </div>
                <div className="innerServiceSlider2">
                  <div className="innerServiceSlider2Col1" md={6}>
                    <img src={airport} alt="" />
                  </div>
                  <div className="innerServiceSlider2Col2" md={6}>
                    <p>
                      Our Premium Round Trip Services Will Pamper You With An
                      Absolutely
                      <span>
                        Comfortable Drive From Your Doorstep & Back. Our
                        Chauffeurs Are Not Only Courteous But Are Also Expert
                        Travel Companions That Will Make Your Road Travel
                        Memorable. Affordable Luxury, As We'd Like To Call it.
                      </span>
                    </p>
                    <div className="pranay">
                      <div className="servicecol2outerDiv">
                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={rating} alt="" />
                          </div>
                          <p>Expert Chauffeus</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={hand} alt="" />
                          </div>
                          <p>Safety Certified</p>
                        </div>

                        <div className="servicecol2innerdiv">
                          <div className="servicecol2imgdiv">
                            <img src={carinsur} alt="" />
                          </div>
                          <p>Multiple Stops</p>
                        </div>
                      <Link to="/airport">
                        <p className="servicemore">more.</p>
                      </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainServices;
