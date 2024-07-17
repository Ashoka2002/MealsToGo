import React from "react";
import { CompactRestaurantInfo } from "../../../components/restaurants/CompactRestaurantInfo";

export function MapCalloutComp({ restaurant }) {
  return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
}
