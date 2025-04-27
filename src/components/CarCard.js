import React from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../style/Card.css";

function CarCard({ car }) {

  const navigate = useNavigate();

  
  function truncateText(text, maxLength = 120) {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  }

  const handleClick = () => {
    navigate('/cardetails', { state: { car } });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 500 }}
    >
      <Card
        className="bg-dark text-white car_card"
        style={{ height: "30rem", cursor: "pointer" }}
        onClick={handleClick}
      >
        <div className="p-1">
          <Card.Img
            variant="top"
            src={car.imageUrl || "/path/to/default-image.jpg"}
            alt={car.carName || "Car Image"}
            style={{ height: "200px", objectFit: "cover", width: "100%" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{car.carName || "Unnamed Car"}</Card.Title>
          <Card.Text>
            {truncateText(car.description)}
          </Card.Text>
          <Card.Text className=" fw-bold">
            $ { car.carPrice?.toLocaleString() || "Price Unavailable"}
          </Card.Text>
          <div className="mt-3">
            <a href="/contact" className="btn btn_cyan m-1">
              Book Now
            </a>
            <a href="/contact" className="btn btn_white m-1">
              Add to Cart
            </a>
          </div>
        </Card.Body>
      </Card>
    </motion.div>
  );
}

export default CarCard;
