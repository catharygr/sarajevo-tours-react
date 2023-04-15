import React, { useContext } from "react";
import AdminCard from "./AdminCard";
import { ProductContext } from "../../api/DataContext";

export default function Products() {
  const dataArray = useContext(ProductContext);
  const mapeo = dataArray.map((product) => (
    <AdminCard
      key={product.id}
      title={product.title}
      summary={product.summary}
      id={product.id}
    />
  ));
  console.log(dataArray);
  return (
    <div className="products-container">
      <button className="btn btn-blue">Añadir nuevo elemento</button>
      <div>{mapeo}</div>
    </div>
  );
}
