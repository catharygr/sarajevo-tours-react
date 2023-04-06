import React from "react";
import Subselect from "../componentes/Subselect";
import CardProduct from "../componentes/CardProduct";
import data from "../data";
import { useSearchParams } from "react-router-dom";

export default function SkiLayout() {
  const props = {
    to1: "jahorina",
    to2: "bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
    title: "Elige tu montaña",
  };

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "esqui") {
      return product;
    } else if (typeFilter === product.type) {
      return product;
    }
  });

  const mapear = dataFilter.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardProduct key={id} card={{ id, title, imgUrl, summary }} />;
  });
  return (
    <>
      <Subselect searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-card-grid">{mapear}</div>
    </>
  );
}
