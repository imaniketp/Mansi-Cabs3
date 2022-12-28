import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Home from "./Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbars from "./components/Navbar/Navbars";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/blogs/Blogs";
import MainOfferPage from "./components/MainOfferPage/MainOfferPage";
import Payment from "./components/payment/Payment";
import FAQ from "./components/FAQ/FAQ";
import UpperNavbar from "./components/Navbar/UpperNavbar";
import ContactUs from "./components/contactUs/ContactUs";
import AboutUs from "./components/aboutUs/AboutUs";
import CabsSearch from "./components/cabs/CabsSearch";
import CabsPage from "./components/cabs/CabsPage";
import Transfer from "./components/cabs/Transfer";
import ScrollToTop from "./ScrollToTop";
import CabBooking from "./components/bookingPage/BookingPage";
import CancelBooking from "./components/cancelPage/CancelPage";
import MyProfile from "./myprofile/MyProfile";
import Aurangabad from "./components/blogs/city/Aurangabad";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop  />
      <UpperNavbar />
      <Navbars />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="myprofile" element={<MyProfile />} />
        <Route path="offers" element={<MainOfferPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutUs" element={<AboutUs />} />
        <Route path="cabsSearch" element={<CabsSearch />} />
        <Route path="cabsPage" element={<CabsPage />} />
        <Route path="transfer-details" element={<Transfer />} />
        <Route path="mybooking" element={<CabBooking />} />
        <Route path="cancelbooking" element={<CancelBooking />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="blogs/aurangabad" element={<Aurangabad />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
