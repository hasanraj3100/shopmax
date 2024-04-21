import React from "react";
import Banner from "../Components/Banner/Banner";
import model_6 from "../Components/Assests/images/model_6.png";

import allProducts from "../Components/Assests/product_data";
import Item from "../Components/Item/Item";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Collections from "../Components/The Collections/TheCollections";

const popularProducts = allProducts.filter(
  (p) => p.id === 2 || p.id === 4 || p.id === 5
);

const ratedProducts = allProducts.filter(
  (p) => p.id === 2 || p.id === 4 || p.id === 5 || p.id === 1
);

function Home() {
  return (
    <div>
      <Banner page={"home"} />
      <Collections />
      <PopularProduct />
      <MostRated />
      <BottomBanner />
      <Footer />
    </div>
  );
}

// function Collections() {
//   return (
//     <div className="site-section">
//       <div className="container">
//         <div className="title-section mb-5">
//           <h2 className="text-uppercase">
//             <span className="d-block">Discover</span> The Collections
//           </h2>
//         </div>
//         <div className="row align-items-stretch">
//           <div className="col-lg-8">
//             <div className="product-item sm-height full-height bg-gray">
//               <a href="#" className="product-category">
//                 Women <span>25 items</span>
//               </a>
//               <img src={model_4} alt="Image" className="img-fluid" />
//             </div>
//           </div>
//           <div className="col-lg-4">
//             <div className="product-item sm-height bg-gray mb-4">
//               <a href="#" className="product-category">
//                 Men <span>25 items</span>
//               </a>
//               <img src={model_5} alt="Image" className="img-fluid" />
//             </div>

//             <div className="product-item sm-height bg-gray">
//               <a href="#" className="product-category">
//                 Shoes <span>25 items</span>
//               </a>
//               <img src={model_6} alt="Image" className="img-fluid" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

function PopularProduct() {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section mb-5 col-12">
            <h2 className="text-uppercase">Popular Products</h2>
          </div>
        </div>
        <div className="row">
          {popularProducts.map((p) => (
            <Item product={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MostRated() {
  return (
    <div class="site-section">
      <div class="container">
        <div class="row">
          <div class="title-section text-center mb-5 col-12">
            <h2 class="text-uppercase">Most Rated</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 block-3">
            <div class="nonloop-block-3 owl-carousel">
              {ratedProducts.map((p) => (
                <CarouselItem product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CarouselItem({ product }) {
  return (
    <div class="item">
      <div class="item-entry">
        <Link to={`/product/${product.id}`} class="product-item md-height bg-gray d-block">
          <img src={product.image} alt={product.name} class="img-fluid" />
        </Link>
        <h2 class="item-title">
          <Link to={`/product/${product.id}`}>{product.name}</Link>
        </h2>
        <strong class="item-price">
          <del>${product.oldPrice}</del> ${product.newPrice}
        </strong>
        <div class="star-rating">
          <span class="icon-star2 text-warning"></span>
          <span class="icon-star2 text-warning"></span>
          <span class="icon-star2 text-warning"></span>
          <span class="icon-star2 text-warning"></span>
          <span class="icon-star2 text-warning"></span>
        </div>
      </div>
    </div>
  );
}

function BottomBanner() {
  return (
    <div className="site-blocks-cover inner-page py-5" data-aos="fade">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ml-auto order-md-2 align-self-start">
            <div className="site-block-cover-content">
              <h2 className="sub-title">#New Summer Collection 2019</h2>
              <h1>New Shoes</h1>
              <p>
                <Link to="" className="btn btn-black rounded-0">
                  Shop Now
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 order-1 align-self-end">
            <img src={model_6} alt="shopmax" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
