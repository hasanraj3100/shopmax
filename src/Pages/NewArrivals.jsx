import React from "react";
import Banner from "../Components/Banner/Banner";
import all_products from "../Components/Assests/product_data";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import Collections from "../Components/The Collections/TheCollections";
import Footer from "../Components/Footer/Footer";

function NewArrivals() {
  return (
    <div>
      <Banner page={"shop"} />
      <Bottom />
      <Contents />
      <Collections />
      <Footer />
    </div>
  );
}

function Bottom() {
  return (
    <div className="custom-border-bottom py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-0">
            <a href="index.html">Home</a> <span className="mx-2 mb-0">/</span>{" "}
            <strong className="text-black">Shop</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-12 order-1">
            <FilterRow />
            <div className="row mb-5">
              {all_products.map((p) => (
                <Item product={p} />
              ))}
            </div>
            <MorePages />
          </div>
        </div>
      </div>
    </div>
  );
}

function FilterRow() {
  return (
    <div className="row align">
      <div className="col-md-12 mb-5">
        <div className="float-md-left">
          <h2 className="text-black h5">New Arrivals</h2>
        </div>
      </div>
    </div>
  );
}

function MorePages() {
  return (
    <div className="row">
      <div className="col-md-12 text-center">
        <div classNameName="site-block-27">
          <ul>
            <li>
              <Link to="">&lt;</Link>
            </li>
            <li className="active">
              <span>1</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NewArrivals;
