import React, { useState } from 'react';

function App() {
  // Define initial state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showCart, setShowCart] = useState(false);

  // Sample product data
  const products = [
    { id: 1, name: 'Smartphone', price: 699, description: 'Latest model with high-end features' },
    { id: 2, name: 'Laptop', price: 999, description: 'High performance laptop for work and play' },
    { id: 3, name: 'Headphones', price: 199, description: 'Noise-cancelling over-ear headphones' },
  ];

  // Function to handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to toggle cart view
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="App">
      <h1>ShopEase</h1>

      {/* Conditional Rendering for Cart */}
      <button onClick={toggleCart}>{showCart ? 'Hide Cart' : 'View Cart'}</button>
      {showCart && <div>Your cart is currently empty.</div>}

      {/* Conditional Rendering for Products */}
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} onClick={() => handleProductClick(product)}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>

      {/* Conditional Rendering for Product Details */}
      {selectedProduct ? (
        <div>
          <h3>Product Details</h3>
          <p>Name: {selectedProduct.name}</p>
          <p>Price: ${selectedProduct.price}</p>
          <p>Description: {selectedProduct.description}</p>
          <button onClick={() => setSelectedProduct(null)}>Back to Products</button>
        </div>
      ) : (
        <p>Select a product to view details.</p>
      )}
    </div>
  );
}

export default App;

