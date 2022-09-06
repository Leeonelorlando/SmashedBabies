import React from "react";
import Card from "./Card";

import cupon1 from "../assets/images/HISTORIA CHEESE BABY.jpg";
import cupon2 from "../assets/images/HISTORIA ONION BABY.jpg";
import cupon3 from "../assets/images/HISTORIA QUARTER BABY.jpg";
import cupon4 from "../assets/images/HISTORIA SMASH BABY.jpg";

const cards = [
  {
    id: 1,
    title: "CHEESE BABY",
    image: cupon1,
    url: "",
  },
  {
    id: 2,
    title: "ONION BABY",
    image: cupon2,
    url: "",
  },
  {
    id: 3,
    title: "QUARTER BABY",
    image: cupon3,
    url: "",
  },
  {
    id: 4,
    title: "SMASH BABY",
    image: cupon4,
    url: "",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 p-3">
      <div className="row">
        {cards.map(({ title, image, url, id }) => (
          <div className="col-md-4 card-personalizada" key={id}>
            <Card imageSource={image} title={title} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;