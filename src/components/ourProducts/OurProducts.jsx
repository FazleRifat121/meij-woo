import { useState } from "react";
import Top from "./Top";
import { IoMdArrowForward } from "react-icons/io";

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("Top");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="my-5">
        <h3 className="text-center font-semibold text-4xl my-20">
          Our Products
        </h3>
        <div role="tablist" className="tabs tabs-lifted">
          <a
            role="tab"
            className={`tab ${activeTab === "Top" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Top")}
          >
            Top
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "Bottom" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Bottom")}
          >
            Bottom
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "Dress" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Dress")}
          >
            Dress
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "Set" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Set")}
          >
            Set
          </a>
          <a
            role="tab"
            className={`tab ${activeTab === "Knit" ? "tab-active" : ""}`}
            onClick={() => handleTabClick("Knit")}
          >
            Knit
          </a>
        </div>

        <div>
          {activeTab === "Top" && (
            <div>
              <Top></Top>
            </div>
          )}
          {activeTab === "Bottom" && <div>Content for Bottom products</div>}
          {activeTab === "Dress" && <div>Content for Dress products</div>}
          {activeTab === "Set" && <div>Content for Set products</div>}
          {activeTab === "Knit" && <div>Content for Knit products</div>}
        </div>
      </div>
      <button className="bg-slate-50  mx-auto w-44 py-1 border rounded-2xl flex justify-center items-center ">
        <p>See More</p>

        <IoMdArrowForward className="text-3xl ml-3" />
      </button>
    </div>
  );
};

export default OurProducts;
