import React from "react";
import Header from "./components/header.jsx"
import Carousel from "./components/carousel.jsx";
import CardInfo from "./components/card-info.jsx";
import Promotion from "./components/promotion.jsx";
import Special from "./components/special.jsx";
import Category from "./components/category.jsx";
import Footer from "./components/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <CardInfo />
      <Promotion title="DISCOUNTS AND PROMOTIONS" />
      <Special />
      <Promotion title="NEW OFFERS" />
      <Category />
      <Footer />
    </div>
  );
}

export default App;
