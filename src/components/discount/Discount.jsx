import img1 from "../../assets/discount/image 3.png";
import img3 from "../../assets/discount/image 4.png";
import img4 from "../../assets/discount/image 5.png";

const Discount = () => {
  return (
    <div>
      <div className="hero bg-[#F7F6F0] ">
        <div className="hero-content text-center overflow-hidden">
          <div className="max-w-5xl flex justify-between items-center gap-4 flex-col lg:flex-row">
            <img src={img1} className="md:w-52" alt="" />
            <img src={img3} className="md:w-40" alt="" />

            <div className="max-w-5xl">
              <h1 className="text-5xl font-bold">Get 50% Off</h1>

              <p className="py-6 font-light">
                for all new product purchases min. purchase Rp. 350.000
              </p>
              <button className="bg-slate-50 w-32 py-1 border rounded-2xl ">
                SHOP NOW
              </button>
            </div>
            <img src={img4} className="md:w-72 mt-10 lg:mt-0" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
