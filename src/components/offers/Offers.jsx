import React from "react";
import "./Offers.css";
import Slider from "react-slick";
import { TfiAngleLeft, TfiAngleRight } from "react-icons/tfi";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Offers() {
  const offerslider = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseonhover: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          speed: 2000,
    autoplaySpeed: 2000,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="p-0 offer__slider-section">
      <div className="offerSliderTitle">
        <h1>Our Offers</h1>
      </div>
      {/* <div className="offerImg">
          <img src="offersbg.png" alt="" />
        </div> */}

      <div className="offers">
        <div className="offerSliderContainer">
          <div className="outerofferSlider">
            <div className="offersliderControls">
              {/* <div className="offercontrolbtn1" onClick={()=> offerslider?.current?.slickPrev()}><TfiAngleLeft className='offersiderbtn'/></div> */}

              <div className="mainofferslider">
                <Slider {...settings} ref={offerslider}>
                
                  <div className="offercard">
                    <div className="offerimg">
                      <img src="offer1img.png" alt="" />
                      <h5>One Way Offer</h5>
                    </div>
                    <div className="offercontent">
                      <h3>One Way Offer</h3>
                      <p>Diwali Bumper Offer get 20% off</p>
                      <button>Coupen Code: MAN121</button>
                      <a href="/offers">View More</a>
                    </div>
                  </div>
                
                  <div className="offercard">
                    <div className="offerimg">
                      <img src="offer1img.png" alt="" />
                      <h5>One Way Offer</h5>
                    </div>
                    <div className="offercontent">
                      <h3>One Way Offer</h3>
                      <p>Diwali Bumper Offer get 20% off</p>
                      <button>Coupen Code: MAN121</button>
                      <a href="/offers">View More</a>
                    </div>
                  </div>
                
                  <div className="offercard">
                    <div className="offerimg">
                      <img src="offer1img.png" alt="" />
                      <h5>One Way Offer</h5>
                    </div>
                    <div className="offercontent">
                      <h3>One Way Offer</h3>
                      <p>Diwali Bumper Offer get 20% off</p>
                      <button>Coupen Code: MAN121</button>
                      <a href="/offers">View More</a>
                    </div>
                  </div>

                  <div className="offercard">
                    <div className="offerimg">
                      <img src="offer1img.png" alt="" />
                      <h5>One Way Offer</h5>
                    </div>
                    <div className="offercontent">
                      <h3>One Way Offer</h3>
                      <p>Diwali Bumper Offer get 20% off</p>
                      <button>Coupen Code: MAN121</button>
                      <a href="/offers">View More</a>
                    </div>
                  </div>

                  <div className="offercard">
                    <div className="offerimg">
                      <img src="offer1img.png" alt="" />
                      <h5>One Way Offer</h5>
                    </div>
                    <div className="offercontent">
                      <h3>One Way Offer</h3>
                      <p>Diwali Bumper Offer get 20% off</p>
                      <button>Coupen Code: MAN121</button>
                      <a href="/offers">View More</a>
                    </div>
                  </div>

                  <div className="offercard">
                    <div className="offerimg">
                      <img src="offer1img.png" alt="" />
                      <h5>One Way Offer</h5>
                    </div>
                    <div className="offercontent">
                      <h3>One Way Offer</h3>
                      <p>Diwali Bumper Offer get 20% off</p>
                      <button>Coupen Code: MAN121</button>
                      <a href="/offers">View More</a>
                    </div>
                  </div>


                </Slider>
              </div>
              {/* <img src="offerstamp.png" className="offerstamp" alt="" /> */}
              {/* <div className="offercontrolbtn2" onClick={()=> offerslider?.current?.slickNext()}><TfiAngleRight className='offersiderbtn'/></div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers;
