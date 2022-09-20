import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import "./Card.css";
import ItemCount from "./ItemCount";
import { CartContext } from "../CartContext";

function ItemDetail({ imageSource, title, text, url }) {

    const { addItem } = useContext(CartContext);
    const [counter, setCounter] = useState(0);
    /* const [prod, setProd] = useState(item);
    console.log(prod); */
    const onAdd = (item, counter) => {
        setCounter(counter);
        addItem(item, counter);
    }

  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp" width="50%">
      <div className="overflow">
        <img src={imageSource} alt="a wallpaper" className="card-img-top" />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary"> {text} </p>
        <a
          href={url ? url : "#!"}
          target="_blank"
          className="btn btn-outline-secondary border-0"
          rel="noreferrer"
        >
          Ir a {title}
        </a>
        <div className="btn btn-primary">
            {<ItemCount initial={1} stock={5} onAdd={onAdd} counter={counter} setCounter={setCounter} />}
        </div>
      </div>
    </div>
  );
}

ItemDetail.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  url: PropTypes.string,
  imageSource: PropTypes.string
};

export default ItemDetail;