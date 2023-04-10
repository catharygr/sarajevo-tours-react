import React, { useContext } from "react";
import { useSearchParams } from "react-router-dom";
import SubSelect from "../componentes/SubSelect";
import CardProduct from "../componentes/CardProduct";
import { ProductContext } from "../api/DataContext";

export default function Mtb() {
  const props = {
    to1: "single",
    to2: "multi",
    btn1: "Un dia",
    btn2: "Varios días",
    title: "Elige la longitud",
  };

  const data = useContext(ProductContext);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  const dataFilter = data.filter((product) => {
    if (!typeFilter && product.category === "bike") {
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
