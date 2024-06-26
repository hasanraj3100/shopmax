import React from "react";
import { Link } from "react-router-dom";
import about1 from "../Assests/images/about_1.jpg";

function Footer() {
  return (
    <footer className="site-footer custom-border-top">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">
            <h3 className="footer-heading mb-4">Promo</h3>
            <Link to="" className="block-6">
              <img
                src={about1}
                alt="shopmax"
                className="img-fluid rounded mb-4"
              />
              <h3 className="font-weight-light  mb-0">
                Finding Your Perfect Shirts This Summer
              </h3>
              <p>Promo from July 15 &mdash; 25, 2019</p>
            </Link>
          </div>
          <div className="col-lg-5 ml-auto mb-5 mb-lg-0">
            <div className="row">
              <div className="col-md-12">
                <h3 className="footer-heading mb-4">Quick Links</h3>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="">Sell online</Link>
                  </li>
                  <li>
                    <Link to="">Features</Link>
                  </li>
                  <li>
                    <Link to="">Shopping cart</Link>
                  </li>
                  <li>
                    <Link to="">Store builder</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="">Mobile commerce</Link>
                  </li>
                  <li>
                    <Link to="">Dropshipping</Link>
                  </li>
                  <li>
                    <Link to="">Website development</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4">
                <ul className="list-unstyled">
                  <li>
                    <Link to="">Point of sale</Link>
                  </li>
                  <li>
                    <Link to="">Hardware</Link>
                  </li>
                  <li>
                    <Link to="">Software</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">
                  203 Fake St. Mountain View, San Francisco, California, USA
                </li>
                <li className="phone">
                  <Link to="tel://23923929210">+2 392 3929 210</Link>
                </li>
                <li className="email">emailaddress@domain.com</li>
              </ul>
            </div>

            <div className="block-7">
              <form action="" method="post">
                <label for="email_subscribe" className="footer-heading">
                  Subscribe
                </label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control py-4"
                    id="email_subscribe"
                    placeholder="Email"
                  />
                  <input
                    type="submit"
                    className="btn btn-sm btn-primary"
                    value="Send"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
              Copyright &copy; 2024 All rights reserved | This template is made
              with <i className="icon-heart" aria-hidden="true"></i> by{" Raj"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
