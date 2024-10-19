import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import PriceCard from "../cards/PriceCard";

const BestSeller = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("bestSeller.json")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-20">
      <h3 className="text-center font-semibold text-4xl">Our Best Seller</h3>
      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay
          spaceBetween={0}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {items.map((item) => (
            <SwiperSlide key={item.id}>
              <PriceCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestSeller;
