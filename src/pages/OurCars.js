import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";
import slide01 from "../assets/our-cars/slide/slide01.jpg";
import slide02 from "../assets/our-cars/slide/slide02.jpg";
import slide03 from "../assets/our-cars/slide/slide03.jpg";
import supra from "../assets/our-cars/card-images/supra.jpeg";
import bmw from "../assets/our-cars/card-images/bmw.jpg";
import ferrari from "../assets/our-cars/card-images/ferrari.jpg";
import lambo from "../assets/our-cars/card-images/lambo.jpg";
import benz from "../assets/our-cars/card-images/benz.jpg";
import mclaren from "../assets/our-cars/card-images/mclaren.jpg";
import porsche from "../assets/our-cars/card-images/porsche.jpg";
import audi from "../assets/our-cars/card-images/audi.jpeg";
import alfa from "../assets/our-cars/card-images/alfa.jpg";


function OurCars() {
  return (
    <>
      <Container>
        <h2 className="text-center my-3 fw-bold">Our Cars</h2>
        <p className="text-center">
          Explore our wide range of cars available for sales
        </p>
        <Carousel fade>
          <Carousel.Item interval={5000}>
            <img
              src={slide01}
              alt="First slide"
              className="d-block img-fluid"
            />
            <Carousel.Caption>
              <h3>Audi</h3>
              <p>Progress through Technology</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src={slide02}
              alt="Second slide"
              className="d-block img-fluid"
            />
            <Carousel.Caption>
              <h3>Chevrolet</h3>
              <p>Together Let's Drive</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={5000}>
            <img
              src={slide03}
              alt="Thrid slide"
              className="d-block img-fluid"
            />
            <Carousel.Caption>
              <h3>McLaren</h3>
              <p>Fearlessly Forward</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <section>
        <Container className="my-md-4 my-2">
          <Row>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={supra} />
                <Card.Body>
                  <Card.Title>Supra</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={lambo} />
                <Card.Body>
                  <Card.Title>Lamborghini</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={bmw} />
                <Card.Body>
                  <Card.Title>BMW</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={ferrari} />
                <Card.Body>
                  <Card.Title>Ferrari</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={mclaren} />
                <Card.Body>
                  <Card.Title>McLaren</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={benz} />
                <Card.Body>
                  <Card.Title>Benz</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={audi} />
                <Card.Body>
                  <Card.Title>Audi</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={porsche} />
                <Card.Body>
                  <Card.Title>Porsche</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                  Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={4} className="my-2">
              <Card className="bg-dark text-white">
                <Card.Img variant="top" src={alfa} />
                <Card.Body>
                  <Card.Title>Alfa Romeo</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <a href="/contact" className="btn btn_cyan m-2">
                    Book Now </a>
                    <a href="/contact" className="btn btn_white m-2">
                    Cart </a>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurCars;
