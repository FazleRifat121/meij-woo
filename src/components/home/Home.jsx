import React from "react";
import Navbar from "../navbar/Navbar";
import Banner from "../banner/Banner";
import SeasonCollection from "../seasonCollection/SeasonCollection";
import BestSeller from "../bestSeller/BestSeller";
import Discount from "../discount/Discount";
import OurProducts from "../ourProducts/OurProducts";
const Home = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="max-w-5xl mx-auto">
        <SeasonCollection></SeasonCollection>
        <BestSeller></BestSeller>
      </div>
      <Discount></Discount>
      <div className="max-w-5xl mx-auto">
        <OurProducts></OurProducts>
      </div>
    </div>
  );
};

export default Home;
