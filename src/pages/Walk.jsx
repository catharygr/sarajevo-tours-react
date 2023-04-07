import React from "react";
import { useSearchParams } from "react-router-dom";
import Subselect from "../componentes/Subselect";
import CardProduct from "../componentes/CardProduct";
import data from "../data";

export default function WalkLayout() {
  const props = {
    to1: "food",
    to2: "history",
    btn1: "Caminatas de comida",
    btn2: "Caminatas de historia",
    title: "Elige tu curiosidad",
  };

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");
  console.log(typeFilter);

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "walk") {
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
