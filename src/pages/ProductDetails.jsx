import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import HeroProducts from "../componentes/HeroProducts";
import { ProductContext } from "../api/DataContext";

export default function ProductDetails() {
  const data = useContext(ProductContext);

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

  const descriptionMD = description.replace(/\\n\\n/g, "\n\n");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <HeroProducts title={heroTitle} price={price} text={heroText} />
      <article className="details-container color-white">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <img src={imgUrl} alt={heroText} />
        <div className="parrafo flow">
          <ReactMarkdown>{descriptionMD}</ReactMarkdown>
        </div>
        <img src={imgUrl2} alt={heroText} />
      </article>
    </>
  );
}
