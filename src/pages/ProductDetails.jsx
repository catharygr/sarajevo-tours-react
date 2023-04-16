import React, { useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import HeroProducts from "../componentes/HeroProducts";
import { ProductContext } from "../api/DataContext";

export default function ProductDetails() {
  const data = useContext(ProductContext);

  const params = useParams();
  const findProduct = data.find(
    (product) => product.id.toString() === params.id
  );

  const descriptionMD = findProduct?.description.replace(/\\n\\n/g, "\n\n");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categ = findProduct?.category;

  function backLink() {
    if (categ === "esqui") {
      return "/esquiar";
    } else if (categ === "bike") {
      return "/mtb";
    } else if (categ === "walk") {
      return "/caminar";
    } else {
      return "/";
    }
  }

  function backLinkText() {
    if (categ === "esqui") {
      return "esquiar";
    } else if (categ === "bike") {
      return "mtb";
    } else if (categ === "walk") {
      return "caminar";
    } else {
      return "/";
    }
  }

  return (
    <>
      <HeroProducts
        title={findProduct?.hero.heroTitle}
        price={findProduct?.price}
        text={findProduct?.hero.heroText}
        id={findProduct?.id}
      />

      <article className="details-container color-white">
        <h1>{findProduct?.title}</h1>
        <h3>{findProduct?.subtitle}</h3>
        <img src={findProduct?.imgUrl} alt={findProduct?.hero.heroText} />
        <div className="parrafo flow">
          <Link
            className="back-link color-black underline"
            to={backLink()}
          >{`Regresar a ${backLinkText()}`}</Link>
          <ReactMarkdown>{descriptionMD}</ReactMarkdown>
        </div>
        <img src={findProduct?.imgUrl2} alt={findProduct?.hero.heroText} />
      </article>
    </>
  );
}
