import React from "react";
import {Card, Col, Container, Row } from "react-bootstrap";

function Review() {
  return (
    <Container>
      <Row>
        <h1 className="text-center my-5">Customer Reviews</h1>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Jhon Wick</Card.Title>
              <Card.Text>
              Smooth drive, premium feel — totally worth it!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Jhon Wick</Card.Title>
              <Card.Text>
              Smooth drive, premium feel — totally worth it!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Jhon Wick</Card.Title>
              <Card.Text>
              Smooth drive, premium feel — totally worth it!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Jhon Wick</Card.Title>
              <Card.Text>
              Smooth drive, premium feel — totally worth it!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Review;
