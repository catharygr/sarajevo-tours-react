/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ color, title }) {
  return <button className={`btn btn-${color}`}>{title}</button>;
}
