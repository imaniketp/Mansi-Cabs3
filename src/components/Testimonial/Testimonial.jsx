import './Testimonial.css'
import React from "react";
import Slider from "react-slick";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import {FaUserCircle} from 'react-icons/fa'
import { useRef } from "react";

export default function Carousal2(){
  const testslider = useRef(null);
  
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div  className="testSliderContainer">
      <div className="outertestSlider">
        <div className="testSliderTitle">
          <h1>What Our Clients Say</h1>
        </div>

        <div className="testsliderControls">

          <div className="testcontrolbtns" onClick={()=> testslider?.current?.slickPrev()}><TfiAngleLeft className='testsiderbtn'/><p>Previous</p></div>
        <div className="maintestslider">
          <Slider {...settings} ref={testslider}>
            
            <div className="testslides">
              <div className="innertestslide1">
                <p>"Excellent Service From Booking Through To Pick Up And Drop Of To The Airport Internet Booking Was Easy Questions We're Answered By Email Promptly."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <FaUserCircle className='testuserprofile'/>
                </div>
                <div>
                  <p>Chetan Milmile</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="testslides">
              <div className="innertestslide1">
                <p>"My Driver Was Waiting At Arrivals For Me With A Clear Sign He Was Very Polite And Friendly And Drove Me With No Delay."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <FaUserCircle className='testuserprofile'/>
                </div>
                <div>
                  <p>King Khan</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            
            <div className="testslides">
              <div className="innertestslide1">
                <p>"Excellent Service From Booking Through To Pick Up And Drop Of To The Airport Internet Booking Was Easy Questions We're Answered By Email Promptly."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <FaUserCircle className='testuserprofile'/>
                </div>
                <div>
                  <p>Chetan Milmile</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>

            <div className="testslides">
              <div className="innertestslide1">
                <p>"My Driver Was Waiting At Arrivals For Me With A Clear Sign He Was Very Polite And Friendly And Drove Me With No Delay."</p>
              </div>
              <div className="innertestslide2">
                <div>
                    <FaUserCircle className='testuserprofile'/>
                </div>
                <div>
                  <p>King Khan</p>
                  <p>Nashik Maharashtra</p>
                </div>
              </div>
            </div>


          </Slider>
        </div>
          <div className="testcontrolbtns" onClick={()=> testslider?.current?.slickNext()}><TfiAngleRight className='testsiderbtn'/><p>Next</p></div>
        </div>
      </div>
    </div>
    );
  }
  