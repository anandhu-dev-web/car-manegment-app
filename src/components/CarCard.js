import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function CarCard({car}) {
  function truncateText(text, maxLength) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }
  
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <Card className="bg-dark text-white">
        <Card.Img variant="top" src= {car.imageUrl}/>
        <Card.Body>
          <Card.Title>{car.carName}</Card.Title>
          <Card.Text>
          {truncateText(car.description, 80)}
          </Card.Text>
          <Link to="/contact" className="btn btn_cyan m-2">
            Book Now
          </Link>
          <Link to="/contact" className="btn btn_white m-2">
            Cart
          </Link>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CarCard;

