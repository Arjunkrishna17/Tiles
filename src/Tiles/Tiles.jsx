import React from "react";

import SingleValueTiles from "./SingleValueTiles";
import MultiValueTiles from "./MultiValueTiles";
import { TILE_TYPES } from "./Helper";

const Tiles = ({data}) => {
  let tile = null;

  if ([TILE_TYPES.number, TILE_TYPES.trend].includes(data.type)) {
    tile = <SingleValueTiles tileData={data} />;
  } else if (data.type === TILE_TYPES.comparison) {
    tile = <MultiValueTiles tileData={data} />;
  }

  return <div style={{ margin: "100px" }}>{tile}</div>;
};

export default Tiles;
