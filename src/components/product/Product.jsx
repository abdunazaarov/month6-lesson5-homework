import React from "react";
import "./Product.scss";

function Product({ product }) {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <div className="category__bottom">
        <button>+</button>
        <p className="price">${product.price}</p>
      </div>
    </div>
  );
}

export default Product;
