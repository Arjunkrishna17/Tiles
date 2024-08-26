import React from "react";
import { getFormattedValue } from "./Helper.js";

const MultiValueTiles = ({ tileData }) => {
  const getTrend = (metric) => {
    let color = null;
    let trend = null;

    if (metric.metric_value > 0) {
      color = "green";
      trend = "trending_up";
    } else {
      color = "red";
      trend = "trending_down";
    }

    const valueText = getFormattedValue(
      metric.metric_value,
      metric.metric_type,
      metric.metric_icon
    );

    return (
      <div className="mt_metric_container">
        <div className="mt_metric_val_container" style={{ color: color }}>
          <span style={{ fontWeight: "600", fontSize: "x-large" }}>
            {valueText}
          </span>
          <span class="material-symbols-outlined">{trend}</span>
        </div>

        <span style={{ fontSize: "small" }}>{metric.metric_heading}</span>
      </div>
    );
  };

  const data1 = tileData.values[0];
  const data2 = tileData.values[1];

  return (
    <section className="mt_tile_section">
      <h4 className="mt_title">{tileData.title}</h4>

      <div className="mt_inner_container">
        <div className="mt_metric_container">
          <div className="mt_val_container">
            <span className="mt_value val_primary">
              {getFormattedValue(
                data1.value,
                data1.value_type.type,
                data1.value_type.icon
              )}
            </span>
            <span>{data1.value_heading}</span>
          </div>

          <div className="mt_divider"></div>

          <div className="mt_val_container">
            <span className="mt_value " style={{ opacity: "0.7" }}>
              {getFormattedValue(
                data2.value,
                data2.value_type.type,
                data2.value_type.icon
              )}
            </span>
            <span className="mt_second_val">{data2.value_heading}</span>
          </div>
        </div>

        {getTrend(tileData.metric)}
      </div>
    </section>
  );
};

export default MultiValueTiles;
