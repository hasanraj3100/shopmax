import React, { useState } from "react";
import { Link } from "react-router-dom";
import all_products from "../Components/Assests/product_data";

function Cart({ list }) {
  let products = all_products.filter((p) => list.find((n) => p.id === n));

  function removeProduct(i) {
    products = products.filter((p) => p.id !== i);
  }

  return (
    <>
      <Table list={products} remove={removeProduct} />
    </>
  );
}

function Table({ list, remove }) {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="site-blocks-table col-md-12">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product</th>
                  <th className="product-price">Price</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-total">Total</th>
                  <th className="product-remove">Remove</th>
                </tr>
                {list.map((p) => (
                  <Product product={p} remove={remove} />
                ))}
              </thead>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function Product({ product, remove }) {
  const [quantity, setQuantity] = useState(1);

  function increment() {
    setQuantity((e) => e + 1);
  }
  function decrement() {
    if (quantity > 1) {
      setQuantity((e) => e - 1);
    }
  }

  return (
    <tr>
      <td className="product-thumbnail">
        <img src={product.image} alt={product.name} className="img-fluid" />
      </td>
      <td className="product-name">
        <h2 className="h5 text-black">{product.name}</h2>
      </td>
      <td>${product.newPrice}</td>
      <td>
        <div className="input-group mb-3" style={{ maxWidth: "120px" }}>
          <div className="input-group-prepend">
            <button
              className="btn btn-outline-primary js-btn-minus"
              type="button"
              onClick={() => decrement()}
            >
              &minus;
            </button>
          </div>
          <input
            type="text"
            className="form-control text-center"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            placeholder=""
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-primary js-btn-plus"
              type="button"
              onClick={() => increment()}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td>${product.newPrice * quantity}</td>
      <td>
        <button
          className="btn btn-primary height-auto btn-sm"
          onClick={() => remove(product.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
}
export default Cart;
