import img1 from "../../assets/banner/image 7.png";
import img2 from "../../assets/banner/image 10.png";
import img3 from "../../assets/banner/image 20.png";
import img4 from "../../assets/banner/image 21.png";

const Banner = () => {
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content text-center overflow-hidden">
          <div className="max-w-5xl flex justify-between items-center gap-4 flex-col lg:flex-row">
            <img src={img4} className="md:w-44" alt="" />
            <img src={img1} className="md:w-52" alt="" />

            <div className="max-w-5xl">
              <h1 className="text-5xl font-bold">MEJIWOO</h1>
              <h3 className="text-xl font-bold">미지우</h3>
              <p className="py-6">
                make your everyday look prettier with MEJIWOO Korean Made
              </p>
            </div>
            <img src={img3} className="md:w-48" alt="" />
            <img src={img2} className="md:w-44" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
