import React, { useEffect, useState } from "react";
import Card from "../cards/Card";
import axios from "axios";

const SeasonCollection = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("seasonCollection.json")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="my-20">
      <h3 className="text-center font-semibold text-4xl">Season Collection </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 my-10">
        {items.map((item) => (
          <Card key={item.id} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default SeasonCollection;
