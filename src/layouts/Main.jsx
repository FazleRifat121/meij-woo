import Banner from "../components/banner/Banner";
import Navbar from "../components/Navbar";

const Main = () => {
  return (
    <div>
      <div className="max-w-5xl mx-auto">
        <Navbar></Navbar>
      </div>
      <Banner></Banner>
    </div>
  );
};

export default Main;
