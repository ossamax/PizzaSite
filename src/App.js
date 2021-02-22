import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Hero from "./components/Hero";
import { GlobalStyle } from "./GlobalStyles";
import Products from "./components/Products/index";
import { productData } from "./components/Products/data";
import Feature from "./components/Feature";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading="Choose your favorite" data={productData} />
      <Feature />
      <Footer />
    </Router>
  );
}

export default App;
