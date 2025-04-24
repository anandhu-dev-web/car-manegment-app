import React from 'react';
import { Container } from 'react-bootstrap';
import '../style/Home.css';
import OurCars from './OurCars';
import About from './About';

function Home() {
  return (
    <>
    <Container>
        <div className='home_wrapper p-5'>
        <div className='home_text my-md-5'>
        <h1 className='fw-bold'>Welcome to Our Car <br/> Dealership</h1>
        <p>We offer a wide range of cars to suit your needs.</p>
        <p>Check out our latest arrivals!</p>
        </div>
        <div className='home_button my-md-3'>
        <a href="/ourcars" className='btn btn_cyan m-2'>View Our Cars</a>
        <a href="/contact" className='btn btn_white m-2'>Contact Us</a>
        </div>
        </div>
        <OurCars/>
        <About/>
    </Container>
    </>
  )
}

export default Home;