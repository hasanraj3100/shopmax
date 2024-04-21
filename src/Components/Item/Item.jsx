import React from "react";
import { Link } from "react-router-dom";

function Item({ product }) {
  return (
    <div className="col-lg-4 col-md-6 item-entry mb-4">
      <Link
        to={"/product/" + product.id}
        className="product-item md-height bg-gray d-block"
      >
        <img src={product.image} alt={product.name} class="img-fluid" />
      </Link>
      <h2 class="item-title">
        <Link to={"/product/" + product.id}>{product.name}</Link>
      </h2>
      <strong class="item-price">
        <del>${product.oldPrice}</del>${product.newPrice}
      </strong>
      <div class="star-rating">
        <span class="icon-star2 text-warning"></span>
        <span class="icon-star2 text-warning"></span>
        <span class="icon-star2 text-warning"></span>
        <span class="icon-star2 text-warning"></span>
        <span class="icon-star2 text-warning"></span>
      </div>
    </div>
  );
}

export default Item;
