import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <Container fluid className="footerContainer">
      <Row className="footerRow">
        
          <Col md={2} >
            <img className="footer1img" src="last.png" alt="" />
          </Col>

          <Col md={3} className="main-page">
            <h4>Main Pages</h4>
            <div>
              <Link to=''>Home</Link>
              <Link to='/cabssearch'>Cabs</Link>
              <Link to='/blogs'>Blogs</Link>
              <Link to='/faq'>FAQs</Link>
            </div>
          </Col>
        

                  <Col md={3} className="useful-links">
                    <h4>Useful Links</h4>
                    <div>
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/contactus">Contact Us</Link>
                        <Link to="/tnc">Terms & Condition</Link>
                        <Link to="/privacy-policy">Privacy Policy</Link>
                        <Link to="/cancelation-policy">Cancellation Policy</Link>
                        <Link to="/return-refund">Return and refund policy</Link>
                    </div>
                  </Col>

                  {/* <Col md={2} className="service-hrs">
                    <h4>Service Hours</h4>
                    <div className="innerService">
                        <p>Monday :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24hrs</p>
                        <p>Tuesday :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24hrs</p>
                        <p>Wednesday : 24hrs</p>
                        <p>Thursday :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24hrs</p>
                        <p>Friday :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24hrs</p>
                        <p>Saturday :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24hrs</p>
                        <p>sunday :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 24hrs</p>
                    </div>
                  </Col> */}

        <Col md={3} className='footerCol3'>
          <div>
            <img className="footer2img" src="footer2.png" alt="" />
          </div>

          <Row className="footerSocialIcons">
          
          <Col>
            <div className="footerinnerplaystore">
              <img className="footerplaystoreimg" src="playstore.jpg" alt="" />
            </div>
          </Col>
            <Col>
            <FaFacebookF className='footerfb'/>
            </Col>
            <Col>
            <FaTwitter className='footertwitter'/>
            </Col>
            <Col>
            <FaInstagram className='footerinsta'/>
            </Col>
            <Col>
            <TiSocialLinkedin className='footerlinked'/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
