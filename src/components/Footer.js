import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <section className="footer mx-5">
      <Container className="text-uppercase fw-bold">
        <h6 className="fst-italic my-3">NEXT LEVEL CAR SHINE....</h6>
          <Row className="mx-md-4 mx-2">
            <Col md={3}>
            <h4 className="fw-semibold">Services</h4>
              <ul className="list-unstyled fw-lighter fst-italic">
                <li>Car Booking</li>
                <li>book a Test  Drive</li>
                <li>Car Dealers</li>
                <li>Car Modification</li>
                <li>Car Rental</li>
                </ul>
            </Col>
            <Col md={3}>
            <h4 className="fw-semibold">Shop</h4>
              <ul className="list-unstyled fw-lighter fst-italic">
                <li>Search Inventory</li>
                <li>View a Brochure</li>
                <li>Compare Competitors</li>
                </ul>
            </Col>
            <Col md={3}>
            <h4 className="fw-semibold">offers</h4>
              <ul className="list-unstyled fw-lighter fst-italic">
                <li>Deals & Offers</li>
                <li>Financing Options</li>
                <li>Estimate Payments</li>
                <li>Get Pre-Approved</li>
                <li>Estimate Credit Scores</li>
                </ul>
            </Col>
            <Col md={3}>
            <h4 className="fw-semibold">Connect us</h4>
              <ul className="list-unstyled fw-lighter fst-italic">
                <li>Instagram</li>
                <li>x</li>
                <li>facebook</li>
                <li>youtube</li>
                </ul>
            </Col>
          </Row>
          <hr/>
          <Row className="text-center my-3">
            <Col md={12}>
              <p className="text-secondary">© 2023 Next Level Car Shine. All rights reserved.</p>
            </Col>
          </Row>
      </Container>
    </section>
  );
}

export default Footer;
