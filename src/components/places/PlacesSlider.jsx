import React from "react";
import Slider from "react-slick";
import "./PlacesSlider.css";
import nashikimgs from '../../Assets/city/nashik1.jpg'
import mumbaiimgs from '../../Assets/city/mumbai1.jpg'
import puneimgs from '../../Assets/city/pune1.jpg'


const nashik = [
  {
    placeImg: `${nashikimgs}`,
  },
  {
    placeImg: `${nashikimgs}`,
  },
  {
    placeImg: `${nashikimgs}`,
  },
  {
    placeImg: `${nashikimgs}`,
  },
];

const mumbai = [
  {
    placeImg: `${mumbaiimgs}`,
  },
  {
    placeImg: `${mumbaiimgs}`,
  },
  {
    placeImg: `${mumbaiimgs}`,
  },
  {
    placeImg: `${mumbaiimgs}`,
  },
];


const pune = [
  {
    placeImg: `${puneimgs}`,
  },
  {
    placeImg: `${puneimgs}`,
  },
  {
    placeImg: `${puneimgs}`,
  },
  {
    placeImg: `${puneimgs}`,
  },
];

function PlacesSlider() {
  const settings1 = {
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const settings = {
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 10000,
    responsive: [
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
    ]   
  };

  return (
    <div className="placeSliderContainer">
      <div className="placeSliderTitle">
        <h1>Top Tourist Place To Visit In Maharashtra</h1>
      </div>
      <div className="outerplaceSlider">
        <div className="mainplaceslider">
          <Slider {...settings}>
            <div>
              <Slider {...settings1}>
                {nashik.map((item, index) => (
                  <div key={index}>
                    <div className="slides">
                      <div className="innerslide">
                        <img src={item.placeImg} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <h4>Nashik</h4>
            </div>
            <div>
              <Slider {...settings1}>
                {mumbai.map((item, index) => (
                  <div key={index}>
                    <div className="slides">
                      <div className="innerslide">
                        <img src={item.placeImg} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <h4>Mumbai</h4>
            </div>
            <div>
              <Slider {...settings1}>
                {pune.map((item, index) => (
                  <div key={index}>
                    <div className="slides">
                      <div className="innerslide">
                        <img src={item.placeImg} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <h4>Pune</h4>
            </div>
            <div>
              <Slider {...settings1}>
                {nashik.map((item, index) => (
                  <div key={index}>
                    <div className="slides">
                      <div className="innerslide">
                        <img src={item.placeImg} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <h4>Nashik</h4>
            </div>
            <div>
              <Slider {...settings1}>
                {mumbai.map((item, index) => (
                  <div key={index}>
                    <div className="slides">
                      <div className="innerslide">
                        <img src={item.placeImg} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <h4>Mumbai</h4>
            </div>
            <div>
              <Slider {...settings1}>
                {pune.map((item, index) => (
                  <div key={index}>
                    <div className="slides">
                      <div className="innerslide">
                        <img src={item.placeImg} alt="" />
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              <h4>Pune</h4>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default PlacesSlider;
