import React from 'react';
import '../style/About.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import human from '../assets/about/human.jpeg';

function About() {
  return (
    <>
    <Container>
      <Row className='about_wrapper p-5 fw-bold'>
        <Col lg={6}>
          <div className='about_text my-md-5'>
            <h1 className='fw-bold'>About Us</h1>
            <p>We are a leading car dealership with a passion for providing the best vehicles to our customers.</p>
            <p>Our team is dedicated to helping you find the perfect car that fits your needs and budget.</p>
          </div>
          <div className='about_button my-md-3'>
            <a href="/contact" className='btn btn_cyan m-2'>Contact Us</a>
          </div>
        </Col>
        <Col lg={6} className='about_image my-md-5'>
        <Card className='bg-dark text-light'>
      <Card.Img variant="top" src={human} />
      <Card.Body>
        <Card.Title className='fw-bold'>Our Team</Card.Title>
        <Card.Text className='fst-italic'>
          We have a team of experienced professionals who are here to assist you with all your car needs.
        </Card.Text>        
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default About;