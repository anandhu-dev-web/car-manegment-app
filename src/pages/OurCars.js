import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import slide01 from "../assets/our-cars/slide/slide01.jpg";
import slide02 from "../assets/our-cars/slide/slide02.jpg";
import slide03 from "../assets/our-cars/slide/slide03.jpg";
import CarCard from "../components/CarCard";
import { useSelector } from "react-redux";

function OurCars() {
  const {products} = useSelector((state) => state.products);
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
          {products.map((car) => (
            <Col md={4} key={car.id} className="mb-4">
              <CarCard car={car} />
            </Col>
          ))}
          </Row>
        </Container>
      </section>
    </>
  );
}

export default OurCars;
