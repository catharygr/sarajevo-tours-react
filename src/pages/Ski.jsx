import React from "react";
import Subselect from "../componentes/Subselect";
import CardHome from "../componentes/CardHome";
import data from "../data";

export default function SkiLayout() {
  const props = {
    to1: "?type=jahorina",
    to2: "?type=bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
    title: "Elige tu montaña",
  };

  const mapear = data.map((card) => {
    const { id, title, imgUrl, summary } = card;
    return <CardHome key={id} card={{ title, imgUrl, summary }} />;
  });
  return (
    <>
      <Subselect dataProps={{ ...props }} />
      <div className="home-card-grid">{mapear}</div>
    </>
  );
}
