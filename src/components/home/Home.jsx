import React from "react";
import Navbar from "../Navbar";
import Banner from "../banner/Banner";
import SeasonCollection from "../cards/SeasonCollection";
import BestSeller from "../cards/BestSeller";
import Discount from "../discount/Discount";
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
    </div>
  );
};

export default Home;
