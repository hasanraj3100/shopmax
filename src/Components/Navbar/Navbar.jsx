import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ numberOfItems }) => {
  const [selectedMenu, setSelectedMenu] = useState("home");

  return (
    <div class="site-navbar bg-white py-2">
      <div className="search-wrap">
        <div className="container">
          <a href="#" className="search-close js-search-close">
            <span className="icon-close2"></span>
          </a>
          <form action="#" method="post">
            <input
              type="text"
              className="form-control"
              placeholder="Search keyword and hit enter..."
            />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <Link to="/" className="js-logo-clone">
                ShopMax
              </Link>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav
              className="site-navigation text-right text-md-center"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav d-none d-lg-block">
                <li
                  className={selectedMenu === "home" ? "active" : ""}
                  onClick={() => setSelectedMenu("home")}
                >
                  <Link to="/"> Home </Link>
                </li>

                <li
                  className={selectedMenu === "shop" ? "active" : ""}
                  onClick={() => setSelectedMenu("shop")}
                >
                  <Link to="/shop"> Shop </Link>
                </li>
                <li
                  className={selectedMenu === "catalogue" ? "active" : ""}
                  onClick={() => setSelectedMenu("catalogue")}
                >
                  <Link to="/catalogue"> Catalogue </Link>
                </li>
                <li
                  className={selectedMenu === "newarrivals" ? "active" : ""}
                  onClick={() => setSelectedMenu("newarrivals")}
                >
                  <Link to="/new"> New Arrivals </Link>
                </li>
                <li
                  className={selectedMenu === "contact" ? "active" : ""}
                  onClick={() => setSelectedMenu("contact")}
                >
                  <Link to="/contact"> Contact </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            <a href="#" className="icons-btn d-inline-block">
              <span className="icon-heart-o"></span>
            </a>
            <Link to="/cart" className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              <span className="number">{numberOfItems}</span>
            </Link>

            <a
              href="#"
              className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
            >
              <span className="icon-menu"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
