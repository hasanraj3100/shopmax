import React, { useState } from "react";
import all_products from "../Components/Assests/product_data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function SingleProduct({ addItem }) {
  const { productID } = useParams();
  console.log("ID fouond" + productID);
  const product = all_products.find((e) => e.id === Number(productID));

  return (
    <>
      <ProductDetails product={product} addItem={addItem} />
    </>
  );
}

function ProductDetails({ product, addItem }) {
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
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="item-entry">
              <Link
                to={`/product/${product.id}`}
                className="product-item md-height bg-gray d-block"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-black">{product.name}</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Pariatur, vitae, explicabo? Incidunt facere, natus soluta dolores
              iusto! Molestiae expedita veritatis nesciunt doloremque sint
              asperiores fuga voluptas, distinctio, aperiam, ratione dolore.
            </p>
            <p className="mb-4">
              Ex numquam veritatis debitis minima quo error quam eos dolorum
              quidem perferendis. Quos repellat dignissimos minus, eveniet nam
              voluptatibus molestias omnis reiciendis perspiciatis illum hic
              magni iste, velit aperiam quis.
            </p>
            <p>
              <strong className="text-primary h4">${product.newPrice}</strong>
            </p>
            <div className="mb-1 d-flex">
              <label for="option-sm" className="d-flex mr-3 mb-3">
                <span
                  className="d-inline-block mr-2"
                  style={{ top: "-2px", position: "relative" }}
                >
                  <input type="radio" id="option-sm" name="shop-sizes" />
                </span>{" "}
                <span className="d-inline-block text-black">Small</span>
              </label>
              <label for="option-md" className="d-flex mr-3 mb-3">
                <span
                  className="d-inline-block mr-2"
                  style={{ top: "-2px", position: "relative" }}
                >
                  <input type="radio" id="option-md" name="shop-sizes" />
                </span>{" "}
                <span className="d-inline-block text-black">Medium</span>
              </label>
              <label for="option-lg" className="d-flex mr-3 mb-3">
                <span
                  className="d-inline-block mr-2"
                  style={{ top: "-2px", position: "relative" }}
                >
                  <input type="radio" id="option-lg" name="shop-sizes" />
                </span>{" "}
                <span className="d-inline-block text-black">Large</span>
              </label>
              <label for="option-xl" className="d-flex mr-3 mb-3">
                <span
                  className="d-inline-block mr-2"
                  style={{ top: "-2px", position: "relative" }}
                >
                  <input type="radio" id="option-xl" name="shop-sizes" />
                </span>{" "}
                <span className="d-inline-block text-black"> Extra Large</span>
              </label>
            </div>
            <div className="mb-5">
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
            </div>
            <p>
              <button
                href="cart.html"
                className="buy-now btn btn-sm height-auto px-4 py-3 btn-primary"
                onClick={() => addItem(product.id)}
              >
                Add To Cart
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
