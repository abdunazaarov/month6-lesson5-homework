import React, { useState } from "react";
import useFetch from "../../hook/useFetch";
import Product from "./Product";
import Skeleton from "../skeleton/Skeleton";
import "./ProductList.scss";

function ProductList() {
  const [category, setCategory] = useState("all");
  const [limit, setLimit] = useState(6);

  const { data, loading, error } = useFetch("https://dummyjson.com/products");

  if (error) return <p>Error: {error}</p>;


  const filteredProducts = data && data.products
    ? data.products.filter((product) =>
        category === "all" ? true : product.category === category
      )
    : [];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleSeeMore = () => {
    setLimit((prevLimit) => prevLimit + 6);
  };

  return (
    <div className="product-list">
      <div className="filter">
        <label htmlFor="category">Category:</label>
        <select id="category" onChange={handleCategoryChange}>
          <option value="all">All</option>
          <option value="beauty">Beauty</option>
          <option value="groceries">Groceries</option>
          <option value="fragrances">Fragrances</option>
        </select>
      </div>

      <div className="products">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <Skeleton key={index} />)
          : filteredProducts.slice(0, limit).map((product) => (
              <Product key={product.id} product={product} />
            ))}
      </div>

      {limit < filteredProducts.length && (
        <button onClick={handleSeeMore} className="see-more">
          See More
        </button>
      )}
    </div>
  );
}

export default ProductList;
