import { currencySymbolsListObject } from "../currencySymbols";

export const TILE_TYPES = {
  number: "number",
  trend: "trend",
  comparison: "comparison",
};

export const formatNumber = (value) => {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(2) + "B"; // Billions
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(2) + "M"; // Millions
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(2) + "K"; // Thousands
  } else {
    return value.toFixed(2); // Less than a thousand
  }
};

export const getFormattedValue = (value, type, icon) => {
  let valueText = "";

  if (type === "currency") {
    const prefix = currencySymbolsListObject[icon];
    const formattedValue = formatNumber(value);
    valueText = prefix + formattedValue;
  } else if (type === "percentage") {
    valueText = value.toString() + "%";
  }

  return valueText;
};
