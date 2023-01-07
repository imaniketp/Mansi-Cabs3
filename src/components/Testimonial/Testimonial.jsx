import './Testimonial.css'
import React from "react";
import Slider from "react-slick";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";
import { Container } from 'react-bootstrap';

export default function Carousal2(){
  const testslider = useRef(null);
  
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
    };
    return (
    <div className='maintestContainer'>
      <div  className="testSliderContainer">
        <div className="testSliderTitle">
          <h1>What Our Clients Say</h1>
        </div>

      <div className="outertestSlider">
        <div className="maintestslider">
          <Slider {...settings} ref={testslider}>
            
            <div className="testslides">
              <div className="innertestslide1">
                <p>"Excellent Service From Booking Through To Pick Up And Drop Of To Therport Internet Booking Was Easy."</p>
              </div>
              <div className="innertestslide2">
                {/* <div>
                    <FaUserCircle className='testuserprofile'/>
                </div> */}
                <div>
                  <h4>Chetan Milmile</h4>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="testslides">
              <div className="innertestslide1">
                <p>"My Driver Was Waiting At Arrivals For Me With A Clear Sign He Was Very Polite And Friendly And Drove Me With No Delay."</p>
              </div>
              <div className="innertestslide2">
                {/* <div>
                    <FaUserCircle className='testuserprofile'/>
                </div> */}
                <div>
                  <h4>King Khan</h4>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            
            <div className="testslides">
              <div className="innertestslide1">
                <p>"Excellent Service From Booking Through To Pick Up And Drop Of To Therport Internet Booking Was Easy."</p>
              </div>
              <div className="innertestslide2">
                {/* <div>
                    <FaUserCircle className='testuserprofile'/>
                </div> */}
                <div>
                  <h4>Chetan Milmile</h4>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="testslides">
              <div className="innertestslide1">
                <p>"My Driver Was Waiting At Arrivals For Me With A Clear Sign He Was Very Polite And Friendly And Drove Me With No Delay."</p>
              </div>
              <div className="innertestslide2">
                {/* <div>
                    <FaUserCircle className='testuserprofile'/>
                </div> */}
                <div>
                  <h4>King Khan</h4>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>


          </Slider>
        </div>
        <div className="testsliderControls">
          <div className="testcontrolbtns" onClick={()=> testslider?.current?.slickPrev()}><TfiAngleLeft className='testsiderbtn'/></div>
          <div className="testcontrolbtns" onClick={()=> testslider?.current?.slickNext()}><TfiAngleRight className='testsiderbtn'/></div>
        </div>
      </div>
    </div>
    </div>
    );
  }
  