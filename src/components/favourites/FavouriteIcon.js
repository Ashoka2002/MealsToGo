import { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import AntDesign from "@expo/vector-icons/AntDesign";
import styled from "styled-components";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = () => {
  const { addToFavourites, favourites, removeFromFavourites } = useContext(FavouritesContext);
  return (
    <FavouriteButton>
      <AntDesign name="hearto" size={24} color="white" />
    </FavouriteButton>
  );
};
