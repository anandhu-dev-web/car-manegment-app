import React from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation
import { Container, Row, Col } from 'react-bootstrap';

function CarDetails() {
  const location = useLocation();  // Use useLocation to get state
  const { car } = location.state || {};  // Extract car from state

  if (!car) {
    return (
      <Container className="my-5">
        <h2 className="text-center text-danger">Car not found</h2>
      </Container>
    );
  }

  return (
    <Container className="my-5">
        <h1 className="text-center mb-4 fw-bold">Car Details</h1>
      <Row className='p-2'>
        <Col md={7}>
          {car.imageUrl ? (
            <img src={car.imageUrl} alt={car.carName} className="img-fluid" />
          ) : (
            <div>No Image Available</div>
          )}
        </Col>
        <Col md={5} className='p-2 justify-content-between'>
        <div>
          <h3 className="fw-bold">{car.carName}</h3>

        </div>
          <div className='py-lg-5 py-3'>
          <h5 className='fst-italic'>{car.description}</h5>
          <h2 className="fw-bold my-3">Price:  $  {car.carPrice}</h2>
          </div>
          <div >
            <a href="/contact" className="btn btn_cyan m-2 w-100">Book Now</a>
            <a href="/" className="btn btn_white m-2 w-100">Add to Cart</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CarDetails;
