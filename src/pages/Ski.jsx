import React, { useContext } from "react";
import SubSelect from "../componentes/SubSelect";
import CardProduct from "../componentes/CardProduct";
import { useSearchParams } from "react-router-dom";
import { ProductContext } from "../api/DataContext";

export default function Ski() {
  const props = {
    to1: "jahorina",
    to2: "bjelasnica",
    btn1: "Jahorina",
    btn2: "Bjelasnica",
    title: "Elige tu montaña",
  };

  const data = useContext(ProductContext);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

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
      <SubSelect searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-card-grid">{mapear}</div>
    </>
  );
}
