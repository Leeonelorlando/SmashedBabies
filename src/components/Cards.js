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
    text: "Pan de papa, carne smash 110g, cheddar x2, cebolla, salsa baby",
    image: cupon1,
    url: "",
  },
  {
    id: 2,
    title: "ONION BABY",
    text: "Pan de papa, carne smash fried onion 110g, cheddar x4",
    image: cupon2,
    url: "",
  },
  {
    id: 3,
    title: "QUARTER BABY",
    text: "Pan de papa, carne smash 110g, cheddar x2, salsa quarter, cebolla en cubos",
    image: cupon3,
    url: "",
  },
  {
    id: 4,
    title: "SMASH BABY",
    text: "Pan de papa, doble carne smash 110g, cheddar x2, cebolla en cubos, salsa baby",
    image: cupon4,
    url: "",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100 p-3">
      <div className="row">
        {cards.map(({ title, image, text, url, id }) => (
          <div className="col-md-4 card-personalizada" key={id}>
            <Card imageSource={image} title={title} text={text} url={url} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;