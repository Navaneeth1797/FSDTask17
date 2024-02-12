import { useContext } from "react"; // Importing the useContext hook from React
import React from "react";
import { userContext } from "../utils/cartPageContextComponent"; // Importing the userContext from the cartPageContextComponent file

function cartPage() {
  // Accessing the context using useContext hook
  let { products, setProducts } = useContext(userContext);
  // Function to update quantity
  let updateQuantity = (id, quantity) => {
    // Ensure quantity doesn't go below 0 or above 15
    quantity = Math.max(0, quantity);
    quantity = Math.min(15, quantity);
    // Update products state with the updated quantity
    let updatedCart = products.map((product) => {
      if (product.id === id) {
        return { ...product, quantity };
      }
      return product;
    });
    setProducts(updatedCart);
  };
  // Function to calculate total quantity
  let getTotalQuantity = () => {
    return products.reduce(
      (total, product) => total + (product.quantity || 0),
      0
    );
  };
  // Function to calculate total amount
  let getTotalAmount = () => {
    return products.reduce(
      (total, product) => total + product.price * (product.quantity || 0),
      0
    );
  };
  // JSX rendering
  return (
    <div className="container">
      <br />
      <div className="row">
        {products.map((product) => (
          <div
            className="col-md-4 mb-3"
            key={product.id}
            style={{ marginBottom: "90px" }}
          >
            <div
              className="card-container"
              style={{
                display: "flex",
                borderRadius: "28px",
                overflow: "hidden",
              }}
            >
              <div
                className="card-image"
                style={{
                  width: "300px",
                  height: "100%",
                  objectFit: "fill",
                  borderTopLeftRadius: "8px",
                  borderBottomLeftRadius: "8px",
                }}
              >
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="img-fluid"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div
                className="card-content"
                style={{ flex: 1, padding: "20px" }}
              >
                <h3
                  className="card-title"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#333333",
                    marginBottom: "10px",
                  }}
                >
                  {product.title}
                </h3>
                <p
                  className="card-description"
                  style={{
                    fontSize: "1rem",
                    marginBottom: "10px",
                    color: "#555555",
                  }}
                >
                  {product.description}
                </p>
                <p
                  className="card-price"
                  style={{ fontSize: "1rem", color: "green" }}
                >
                  Price: ${product.price}
                </p>
                <p>Quantity:</p>
                <input
                  type="number"
                  value={product.quantity || 0}
                  onChange={(e) =>
                    updateQuantity(product.id, parseInt(e.target.value))
                  }
                  className="card-quantity-input"
                  style={{
                    width: "70px",
                    marginTop: "10px",
                    padding: "5px",
                    border: "1px solid #cccccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                />

                <p className="mb-0 " style={{ color: "red" }}>
                  Max quantity is 15
                </p>

                <br />
                <p
                  className="card-total"
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    color: "#000000",
                    marginTop: "10px",
                  }}
                >
                  Total: ${(product.price * (product.quantity || 0)).toFixed(2)}
                </p>
                <button
                  className="card-button"
                  style={{
                    marginTop: "15px",
                    backgroundColor: "#007bff",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "4px",
                    padding: "10px 20px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    transition: "background-color 0.3s",
                  }}
                >
                  Proceed to pay
                </button>
              </div>
            </div>
            <div>
              <strong>Total Quantity:</strong> {getTotalQuantity()} <br />
              <strong>Total Amount:</strong> ${getTotalAmount().toFixed(2)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default cartPage;
