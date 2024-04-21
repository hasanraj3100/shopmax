import React from "react";
import Banner from "../Components/Banner/Banner";
import all_products from "../Components/Assests/product_data";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import Collections from "../Components/The Collections/TheCollections";
import Footer from "../Components/Footer/Footer";

function Shop() {
  return (
    <div>
      <Banner page={"shop"} />
      <Bottom />
      <Contents />
      <Collections/>
      <Footer/>
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
          <div className="col-md-9 order-1">
            <FilterRow />
            <div className="row mb-5">
              {all_products.map((p) => (
                <Item product={p} />
              ))}
            </div>
            <MorePages />
          </div>
          <FilterSection />
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
          <h2 className="text-black h5">Shop All</h2>
        </div>
        <div className="d-flex">
          <div className="dropdown mr-1 ml-md-auto">
            <button
              type="button"
              className="btn btn-white btn-sm dropdown-toggle px-4"
              id="dropdownMenuOffset"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Latest
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <Link className="dropdown-item" to="">
                Men
              </Link>
              <Link className="dropdown-item" to="">
                Women
              </Link>
              <Link className="dropdown-item" to="#">
                Children
              </Link>
            </div>
          </div>
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

function FilterSection() {
  return (
    <div className="col-md-3 order-2 mb-5 mb-md-0">
      <div className="border p-4 rounded mb-4">
        <h3 className="mb-3 h6 text-uppercase text-black d-block">
          Categories
        </h3>
        <ul className="list-unstyled mb-0">
          <li className="mb-1">
            <Link to="#" className="d-flex">
              <span>Men</span>{" "}
              <span className="text-black ml-auto">(2,220)</span>
            </Link>
          </li>
          <li className="mb-1">
            <Link to="#" className="d-flex">
              <span>Women</span>{" "}
              <span className="text-black ml-auto">(2,550)</span>
            </Link>
          </li>
          <li className="mb-1">
            <Link to="#" className="d-flex">
              <span>Children</span>{" "}
              <span className="text-black ml-auto">(2,124)</span>
            </Link>
          </li>
        </ul>
      </div>

      <div className="border p-4 rounded mb-4">
        <div className="mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">
            Filter by Price
          </h3>
          <div id="slider-range" className="border-primary"></div>
          <input
            type="text"
            name="text"
            id="amount"
            className="form-control border-0 pl-0 bg-white"
            disabled=""
          />
        </div>

        <div className="mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Size</h3>
          <label for="s_sm" className="d-flex">
            <input type="checkbox" id="s_sm" className="mr-2 mt-1" />{" "}
            <span className="text-black">Small (2,319)</span>
          </label>
          <label for="s_md" className="d-flex">
            <input type="checkbox" id="s_md" className="mr-2 mt-1" />{" "}
            <span className="text-black">Medium (1,282)</span>
          </label>
          <label for="s_lg" className="d-flex">
            <input type="checkbox" id="s_lg" className="mr-2 mt-1" />{" "}
            <span className="text-black">Large (1,392)</span>
          </label>
        </div>

        <div className="mb-4">
          <h3 className="mb-3 h6 text-uppercase text-black d-block">Color</h3>
          <Link href="#" className="d-flex color-item align-items-center">
            <span className="bg-danger color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Red (2,429)</span>
          </Link>
          <Link href="#" className="d-flex color-item align-items-center">
            <span className="bg-success color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Green (2,298)</span>
          </Link>
          <Link href="#" className="d-flex color-item align-items-center">
            <span className="bg-info color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Blue (1,075)</span>
          </Link>
          <Link href="#" className="d-flex color-item align-items-center">
            <span className="bg-primary color d-inline-block rounded-circle mr-2"></span>{" "}
            <span className="text-black">Purple (1,075)</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Shop;
