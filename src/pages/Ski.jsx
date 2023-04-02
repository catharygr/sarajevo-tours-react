import React from "react";
import Subselect from "../componentes/Subselect";
import CardHome from "../componentes/CardHome";
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
    if (!typeFilter) {
      return product;
    } else if (typeFilter === product.location.toLowerCase()) {
      return product;
    }
  });

  const mapear = dataFilter.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardHome key={id} card={{ id, title, imgUrl, summary }} />;
  });
  return (
    <>
      <Subselect searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-card-grid">{mapear}</div>
    </>
  );
}
