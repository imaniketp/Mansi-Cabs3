import React, { useState } from "react";
import Slider from "react-slick";
import "./PlacesSlider.css";
import {TfiAngleLeft, TfiAngleRight} from 'react-icons/tfi'
import { useRef } from "react";


const places =[
  {
    placeImg: "./city/nashik.jpg",
    placeName: "Nashik"
  },
  {
    placeImg: "./city/mumbai.jpg",
    placeName: "Mumbai"
  },
  {
    placeImg: "./city/pune.jpg",
    placeName: "Pune"
  },
  {
    placeImg: "./city/shirdi.jpg",
    placeName: "Shirdi"
  },
  {
    placeImg: "./city/nagpur.jpg",
    placeName: "Nagpur"
  },
  {
    placeImg: "./city/lonavla.jpg",
    placeName: "Lonavla"
  },
]

function PlacesSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  const slider = useRef(null);
  const settings = {
    dots: false,
      infinite: true,
      lazyLoad: true,
      centerMode: true,
      slidesToShow: 5,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      beforeChange: (current, next) => setActiveIndex(next),
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
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
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
  };

  return (
    <div  className="placeSliderContainer">
        <div className="placeSliderTitle">
          <h1>Top Tourist Place To Visit In Maharashtra</h1>
        </div>
      <div className="outerplaceSlider">

        <div className="sliderControls">

          {/* <div className="controlbtns" onClick={()=> slider?.current?.slickPrev()}><TfiAngleLeft className='placesiderbtn'/><p>Previous</p></div> */}
        <div className="mainplaceslider">
          <Slider {...settings} ref={slider}>

            { places.map((item, index) => (
              <div key={index} className={index == activeIndex ? "placeslide activePlaceSlide" : "placeslide"}>
                <div className="slides">
                  <div className="innerslide">
                  <img src={item.placeImg} alt="" />
                    <h5>{item.placeName}</h5>
                  </div>
                </div>
              </div>

            // <div className="slides">
            //   <div className="innerslide">
            //     <img src="./city/mumbai.jpg" alt="" />
            //     <h5>Mumbai</h5>
            //   </div>
            // </div>

            // <div className="slides">
            //   <div className="innerslide">
            //     <img src="./city/pune.jpg" alt="" />
            //     <h5>Pune</h5>
            //   </div>
            // </div>

            // <div className="slides">
            //   <div className="innerslide">
            //     <img src="./city/shirdi.jpg" alt="" />
            //     <h5>Shirdi</h5>
            //   </div>
            // </div>

            // <div className="slides">
            //   <div className="innerslide">
            //     <img src="./city/nagpur.jpg" alt="" />
            //     <h5>Nagpur</h5>
            //   </div>
            // </div>

            // <div className="slides">
            //   <div className="innerslide">
            //     <img src="./city/lonavla.jpg" alt="" />
            //     <h5>Lonavla</h5>
            //   </div>
            // </div>
          ))}
          </Slider>
        </div>
          {/* <div className="controlbtns" onClick={()=> slider?.current?.slickNext()}><TfiAngleRight className='placesiderbtn'/><p>Next</p></div> */}
        </div>
      </div>
        </div>
  );
}

export default PlacesSlider;
