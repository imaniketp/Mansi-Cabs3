import React from 'react'
import './Why.css'
// import {Col, Container, Row} from 'react-bootstrap'
// import trustbg from '../../Assets/trust-removebg-preview.png'
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";
import Slider from "react-slick";
import trust from "../../Assets/trust-removebg-preview.png";
import t4x7 from "../../Assets/24 x 7.png";
import lowestp from "../../Assets/money-removebg-preview.png";
import expdriver from "../../Assets/exp_driver-removebg-preview.png";

function Why() {
    const whyslider = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
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
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    // <Container fluid className='whyContainer'>
    //     <h1>WHY CHOOSE US</h1>
    //     <p>We Aim To Provide Best Car Rental & Cab Booking Services In India</p>
        
    //     <Row className='whyRow'>
    //         <Col className='whyCol' md={3}>
    //             <div>
    //                 <img src={trustbg} className='whyimg1'  alt=''/>
    //             </div>
    //             <div>
    //                 <h5>Trusted Advisor</h5>
    //                 <p>We Trust You For Your Safety</p>
    //             </div>
    //         </Col>

    //         <Col className='whyCol' md={3}>
    //             <div>
    //                 <img src='money-removebg-preview.png' className='whyimg2'  alt=''/>
    //             </div>
    //             <div>
    //                 <h5>Lowest Prices</h5>
    //                 <p>No Extra-Charges As Mentioned In The Pricing</p>
    //             </div>
    //         </Col>

    //         <Col className='whyCol' md={3}>
    //             <div>
    //                 <img src='24 x 7.png' className='whyimg3'  alt=''/>
    //             </div>
    //             <div>
    //                 <h5>24X7</h5>
    //                 <p>Always Available For Your Needs</p>
    //             </div>
    //         </Col>

    //         <Col className='whyCol' md={3}>
    //             <div>
    //                 <img src='exp_driver-removebg-preview.png' className='whyimg4'  alt=''/>
    //             </div>
    //             <div>
    //                 <h5>Experienced Drivers</h5>
    //                 <p>For Your Safety Drivers With 10 Years Experience</p>
    //             </div>
    //         </Col>


    //     </Row>


    // </Container>

    <div  className="whySliderContainer">
        <div className="whySliderTitle">
          <h1>WHY CHOOSE US</h1>
        </div>
        
      <div className="outerwhySlider">

        <div className="whysliderControls">
      {/* <div className="whycontrolbtn1" onClick={()=> whyslider?.current?.slickPrev()}><TfiAngleLeft className='whysiderbtn'/></div> */}

        <div className="mainwhyslider">
          <Slider {...settings} ref={whyslider}>
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg1" src={trust} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg2" src={lowestp} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg3" src={t4x7} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
            
            <div className="whyslides">
                <div className="innerwhyslide">
                    <img className="whyimg4" src={expdriver} alt="" />
                    <h6>Trusted Advisor</h6>
                    <p>We Trust You For Your Safety</p>
                </div>
            </div>            
                        
                      

          </Slider>
        </div>
          {/* <div className="whycontrolbtn2" onClick={()=> whyslider?.current?.slickNext()}><TfiAngleRight className='whysiderbtn'/></div> */}
        </div>
      </div>
    </div>
  )
}

export default Why

