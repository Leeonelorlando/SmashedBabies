import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { cards } from "../components/Cards";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});

  const {id} = useParams()

  useEffect(() => {
    const getDetail = new Promise((resolve) => {
      const itemFind = cards.find((prod) => prod.id === id )
      setTimeout(() => {
        resolve(itemFind);
      }, 100);
    });

    getDetail.then((res) => setDetail(res));
  },);

  return (
    <div>
      <ItemDetail detail={detail} />
    </div>
  );
};

export default ItemDetailContainer;