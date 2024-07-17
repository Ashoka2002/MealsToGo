import AntDesign from "@expo/vector-icons/AntDesign";
import { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { addToFavourites, favourites, removeFromFavourites } = useContext(FavouritesContext);
  const isFavourite = favourites.find((res) => res.placeId === restaurant.placeId);
  return (
    <FavouriteButton onPress={() => (!isFavourite ? addToFavourites(restaurant) : removeFromFavourites(restaurant))}>
      <AntDesign name={isFavourite ? "heart" : "hearto"} size={26} color={isFavourite ? "red" : "white"} />
    </FavouriteButton>
  );
};
