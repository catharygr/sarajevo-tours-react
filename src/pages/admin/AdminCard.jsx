/* eslint-disable react/prop-types */
import React from "react";

export default function AdminCard({ title, summary }) {
  return (
    <div className="edit-product-card flow">
      <div className="flow">
        <h3 className="fs-500">{title}</h3>
        <p>{summary}</p>
      </div>
      <button className="btn btn-pink color-white">Editar</button>
    </div>
  );
}
