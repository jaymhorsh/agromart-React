import Header from "./component/Layout/Header/Header";
import Home from "./component/Layout/Home/Home";
import React from "react";
import Product from "./component/Product/Product";
import Footer from "./component/Layout/Footer/Footer";
const App = function () {
  return (
    <>
      <Header />
      <Home />
      <Product/>
      <Footer/>
    </>
  );
};

export default App;
