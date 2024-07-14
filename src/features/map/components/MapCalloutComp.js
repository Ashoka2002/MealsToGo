import React from "react";
import { Image, View } from "react-native";
import styled from "styled-components/native";
import { Text } from "../../../components/typography/typographyComp";
import { CompactRestaurantInfo } from "../../../components/restaurants/CompactRestaurantInfo";

export function MapCalloutComp({ restaurant }) {
  return <CompactRestaurantInfo restaurant={restaurant} isMap={true} />;
}
