import axios from "axios";
import { useEffect, useState } from "react";

const Top = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("top.json")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
      {items.map((item) => {
        return (
          <div key={item.id} className="card cursor-pointer mt-3">
            <figure className="px-3 pt-10">
              <img src={item.img} alt={item.title} className="rounded-sm" />
            </figure>
            <div className="card-body items-center text-center">
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Top;
