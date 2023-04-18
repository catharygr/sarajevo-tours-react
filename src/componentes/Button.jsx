/* eslint-disable react/prop-types */
import React from "react";

export default function Button({ color, title, isBtnDisabled }) {
  return (
    <button disabled={isBtnDisabled} className={`btn btn-${color}`}>
      {title}
    </button>
  );
}
