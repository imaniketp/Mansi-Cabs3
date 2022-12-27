import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Places.css";

function Places() {
  // const settings = {
  //   className: "center",
  //   infinite: true,
  //   centerPadding: "30px",
  //   slidesToShow: 5,
  //   swipeToSlide: true,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 4,
  //         swipeToSlide: true,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         swipeToSlide: true,
  //         initialSlide: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         swipeToSlide: true,
  //       }
  //     }
  //   ]
  // }

  return (
    <Container fluid className="placesContainer">
      <Container>
        <Row>
          <Col md={3} className="placesCol">
            <ul className="placesul">
              <h5>CABS FROM NASHIK</h5>
              <li>Nashik to Matheran Cabs</li>
              <li>Nashik to Dhule Cabs</li>
              <li>Nashik to Manmad Cabs</li>
              <li>Nashik to Trimbakeshwar Cabs</li>
              <li>Nashik to Kalyan</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className="placesul">
              <h5>CABS FROM LONAVALA</h5>
              <li>Lonavala to Hyderabad Cabs</li>
              <li>Lonavala to Lavasa Cabs</li>
              <li>Lonavala to Khopoli Cabs</li>
              <li>Lonavala to Mahabaleshwar Cabs</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className="placesul">
              <h5>CABS FROM SHIRDI</h5>
              <li> Surat to Daman Cabs</li>
              <li> Surat to Badlapur Cabs</li>
              <li> Surat to Kodinar Cabs</li>
              <li> Surat to Vansda Cabs</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className="placesul">
              <h5>CABS FROM SURAT</h5>
              <li> Surat to Daman Cabs</li>
              <li> Surat to Badlapur Cabs</li>
              <li> Surat to Kodinar Cabs</li>
              <li> Surat to Vansda Cabs</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <Container className="airportData">
        <h5>POPULAR AIRPORTS CABS</h5>
        <Row>
          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Mumbai Airport Taxi</li>
              <li>Ahemdabad Airport Taxi</li>
              <li>Amritsar Airport Taxi</li>
              <li>Bangalore Airport Taxi</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Kolkata Airport Taxi</li>
              <li>Cochin Airport Taxi</li>
              <li>Delhi Airport Taxi</li>
              <li>Hyderabad Airport Taxi</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Chandigarh Airport Taxi</li>
              <li>Chennai Airport Taxi</li>
              <li>Jaipur Airport Taxi</li>
              <li>Varanasi Airport Taxi</li>
            </ul>
          </Col>

          <Col md={3} className="placesCol">
            <ul className='placesul'>
              <li>Udaipur Airport Taxi</li>
              <li>Vishakhapatnam Airport Taxi</li>
              <li>Pune Airport Taxi</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Places;
