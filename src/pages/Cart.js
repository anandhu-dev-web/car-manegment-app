import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, clearCart } from "../redux/cartSlice";
import { Container, Row } from "react-bootstrap";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // Calculate the total cost
  const totalCost = cartItems.reduce((total, item) => total + (item.carPrice || 0), 0);

  return (
    <Container>
      <Row>
        <div style={{ padding: "30px" }}>
          <h1>Your Cart 🛒</h1>

          {cartItems.length === 0 ? (
            <p>No items in your cart. Start shopping! 🛍️</p>
          ) : (
            <>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                      }}
                    >
                      Product Name
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                      }}
                    >
                      Price
                    </th>
                    <th
                      style={{
                        borderBottom: "1px solid #ddd",
                        padding: "10px",
                      }}
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item) => (
                    <tr key={item.id}>
                      <td style={{ padding: "10px" }}>
                        {item.carName || "Unnamed Car"}
                      </td>
                      <td style={{ padding: "10px" }}>
                        ${item.carPrice?.toLocaleString() || "Price Unavailable"}
                      </td>
                      <td>
                        <button
                          className="btn btn-warning"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div style={{ marginTop: "20px" }}>
              <button className="btn btn-success me-2" onClick={() => alert("Booking confirmed!")}>
                  Book Now
                </button>
                <button className="btn btn-danger" onClick={handleClearCart}>
                  Clear Cart
                </button>
                
              </div>

              {/* Total Cost Section */}
              <div style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
                <p>Total Cost: ${totalCost.toLocaleString()}</p>
              </div>
            </>
          )}
        </div>
      </Row>
    </Container>
  );
};

export default Cart;
