import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Contact from "./Pages/contact";
import Shop from "./Pages/shop";
import NewArrivals from "./Pages/NewArrivals";
import SingleProduct from "./Pages/singleProduct";
import { useState } from "react";
import Cart from "./Pages/cart";

function App() {
  const [cart, setCart] = useState([]);
  let sz = cart?.length ? cart.length : 0;

  function addItem(i) {
    setCart((c) => [...c, i]);
  }

  return (
    <div className="site-wrap">
      <BrowserRouter>
        <Navbar numberOfItems={sz} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new" element={<NewArrivals />} />
          <Route path="/product" element={<SingleProduct addItem={addItem} />}>
            <Route
              path=":productID"
              element={<SingleProduct addItem={addItem} />}
            />
          </Route>
          <Route path="/cart" element={<Cart list={cart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
