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
    title,
    subtitle,
    hero: { heroTitle, heroText },
    imgUrl,
    price,
    description,
    imgUrl2,
  } = findProduct;

  console.log(heroTitle);
  return (
    <>
      <HeroProducts title={heroTitle} price={price} text={heroText} />
      <div className="details-container">
        <h1 className="color-white">{title}</h1>
        <h3 className="color-white">{subtitle}</h3>
        <img src={imgUrl} alt={heroText} />
        <p>{description}</p>
        <img src={imgUrl2} alt={heroText} />
      </div>
    </>
  );
}
