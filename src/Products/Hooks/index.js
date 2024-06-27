// import React, { useState, useEffect } from 'react';
// import { getProducts } from './api';
// import './index.css';

// function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (error) {
//         console.error('Error fetching products:', error);
//         setError('Failed to fetch products');
//       }
//     };

//     fetchProducts();
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (

//           <li key={product.id}>{product.title} image={}</li>
//         //   <li key={product}>{product.image}</li>

//         ))}
//         {/* <button>Nike running Shoes</button> */}
//       </ul>
//     </div>
//   );
// }

// export default ProductList;

import React, { useState, useEffect } from "react";
import { getProducts } from "./api";
import "./index.css";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError("Failed to fetch products");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="container">
      <h1 className="title">Product</h1>
      <div className="grid">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.title} className="image" />
            <h2 className="productTitle">{product.title}</h2>
            <p className="price">${product.price.toFixed(2)}</p>
            <p className="category">{product.category}</p>
            <button className="button">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
