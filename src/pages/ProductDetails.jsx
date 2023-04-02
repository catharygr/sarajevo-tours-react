import React from "react";
import { useParams } from "react-router-dom";
import data from "../data.js";
import HeroProducts from "../componentes/HeroProducts";

export default function ProductDetails() {
  const params = useParams();
  const findProduct = data.find(
    (product) => product.id.toString() === params.id
  );
  const {
    hero: { title, text },
    price,
  } = findProduct;

  console.log(title);
  return (
    <>
      <HeroProducts title={title} price={price} text={text} />
      <h1>detalles</h1>
    </>
  );
}
