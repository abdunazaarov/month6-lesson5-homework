import React from 'react';
import './Product.scss';

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} className="product-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">{product.price}$</p>
      <p className="product-description">There are many things are needed to start the Fast Food Business.</p>
      <div className='product__btn'>
        <button>+</button>
        <div className="product-rating">⭐⭐⭐⭐⭐ {product.rating}</div>
      </div>
    </div>
  );
}

export default Product;
