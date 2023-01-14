import React from 'react'
import Banner from '../components/Banner/Banner'
import Banner2 from '../components/Banner2/Banner2'
import Services2 from '../components/Services2/Services2'
import Testimonial from '../components/Testimonial/Testimonial'
import Why from '../components/why/Why'
import Places from '../components/places/Places'
import PlacesSlider from '../components/places/PlacesSlider'
import Offers from '../components/offers/Offers'
import MainServices from '../components/mainServices/MainServices'
import { Container } from 'react-bootstrap'


function Home() {
  return (
    <>
    <Banner/>
    <Container fluid='md' className='homeContainer'>
        <Offers />
        <MainServices />
        <Services2 />
        <Banner2/>
        <Testimonial />
        <Why />
        <PlacesSlider />
        <Places />
    </Container>
    </>
  )
}

export default Home