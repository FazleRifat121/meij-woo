import React from "react";
import Navbar from "../Navbar";
import Banner from "../banner/Banner";
import SeasonCollection from "../cards/SeasonCollection";
const Home = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
      <div className="max-w-5xl mx-auto">
        <SeasonCollection></SeasonCollection>
      </div>
    </div>
  );
};

export default Home;
