import React from "react";
import "./Offers.css";
import Slider from "react-slick";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function Offers() {
  const offerslider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
    slidesToShow: 3,
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

        }
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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
    <div  className="offerSliderContainer">
        
        
      <div className="outerofferSlider">

        <div className="offersliderControls">
          
      {/* <div className="offercontrolbtn1" onClick={()=> offerslider?.current?.slickPrev()}><TfiAngleLeft className='offersiderbtn'/></div> */}

        <div className="mainofferslider">
          <Slider {...settings} ref={offerslider}>
            
            <div className="offerslides">
              <div className="innerofferslide11">
                <img src="offer3img.jpg" alt="" />
              </div>
              <div className="innerofferslide12">
                <h6>Introducing Double Guarantee on Outstation</h6>
                <div className="offercardfooter1">
                  <Link to='/offers'>
                   <button className="offercardfooter1button">More</button>
                  </Link>
                </div>
              </div>
            </div>
            
            
            <div className="offerslides">
              <div className="innerofferslide21">
                <h6>#DealsOnWheels: BookOutStation Cabs</h6>
                <hr/>
                <p>And save up to 10%* on ypur next road trip!</p>
              </div>
              <div className="innerofferslide22">
                <div><p>Valid till: 31st Dec, 2022</p></div>
                <div className="offercardfooter2">
                <Link to='/offers'>
                   <button className="offercardfooter2button">View Details</button>
                  </Link>
                  <p>T&C's Apply</p>
                </div>
              </div>
            </div>
            
            <div className="offerslides">
              <div className="innerofferslide31">
                <h6>#OfferOnRental: Get flat 12% Cashback</h6>
                <hr/>
                <p>Make your trip and get a good flat cashbacks</p>
              </div>
              <div className="innerofferslide32">
                <div><p>Valid till: 31st Dec, 2022</p></div>
                <div className="offercardfooter3">
                <Link to='/offers'>
                   <button className="offercardfooter3button">View Details</button>
                  </Link>
                  <p>T&C's Apply</p>
                </div>
              </div>
            </div>
            
            
            <div className="offerslides">
              <div className="innerofferslide11">
                <img src="offer3img.jpg" alt="" />
              </div>
              <div className="innerofferslide12">
                <h6>Introducing Double Guarantee on Outstation</h6>
                <div className="offercardfooter1">
                  <Link to='/offers'>
                   <button className="offercardfooter1button">More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="offerslides">
              <div className="innerofferslide11">
                <img src="offer3img.jpg" alt="" />
              </div>
              <div className="innerofferslide12">
                <h6>Introducing Double Guarantee on Outstation</h6>
                <div className="offercardfooter1">
                  <Link to='/offers'>
                   <button className="offercardfooter1button">More</button>
                  </Link>
                </div>
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
  