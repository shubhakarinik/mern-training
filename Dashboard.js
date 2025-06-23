// Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const handleAddToCart = (product) => {
    localStorage.setItem('cartItem', JSON.stringify(product));
    navigate('/cart');
  };

  return (
    <div className="dashboard">
      <h2>🛍️ Product Page</h2>
      <div className="product-list">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} className="product-image" />
            <h3>{product.title}</h3>
            <p>₹{product.price}</p>
            <p>{product.description.slice(0, 60)}...</p>
            <button onClick={() => handleAddToCart(product)} className="add-button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
