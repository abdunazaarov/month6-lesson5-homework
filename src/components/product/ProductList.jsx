import React, { useEffect, useState } from 'react';
import Product from './Product';
import './ProductList.scss';

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products.slice(0, 9))) 
      .catch(error => console.error("Error fetching products:", error));
  }, []);

  return (
    <div className="product-list">
      <h1>Food Full of Treaty Love</h1>
      <p>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers.</p>
      <div className="product-list-grid container">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <button className="learn-more">Learn More</button>
    </div>
  );
}

export default ProductList;
