import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SubSelector from "../componentes/SubSelector";
import CardProduct from "../componentes/CardProduct";
import { ProductContext } from "../api/DataContext";

export default function Walk() {
  const props = {
    to1: "food",
    to2: "history",
    btn1: "Caminatas de comida",
    btn2: "Caminatas de historia",
    title: "Elige tu curiosidad",
  };

  const data = useContext(ProductContext);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

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
      <SubSelector searchType={typeFilter} dataProps={{ ...props }} />
      <div className="home-card-grid">{mapear}</div>
    </>
  );
}
