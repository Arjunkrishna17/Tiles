import React from "react";

import "./Tiles.css";

import { getFormattedValue } from "./Helper.js";

const SingleValueTiles = ({ tileData }) => {
  const getValues = (value, index) => {
    const valueText = getFormattedValue(
      value.value,
      value.value_type.type,
      value.value_type.icon
    );

    let element = null;

    if (index === 0) {
      element = (
        <div className="st_value_container">
          <span className="st_value">{valueText}</span>
          <span className="st_value_subhead">{value.value_heading}</span>
        </div>
      );
    } else {
      element = (
        <div className="st_sub_val_container">
          <span className="st_sub_val">{valueText}</span>
          <span className="st_value_subhead">{value.value_heading}</span>
        </div>
      );
    }

    return element;
  };

  return (
    <section className="st_section">
      <h1 className="st_title">{tileData.title}</h1>

      <div className="st_value_container">
        {tileData.values.map((value, index) => getValues(value, index))}
      </div>
    </section>
  );
};

export default SingleValueTiles;
