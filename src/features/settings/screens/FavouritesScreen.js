import React, { useContext } from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { SafeArea } from "../../../components/utility/SafeAreaComp";
import { FavouritesContext } from "../../../services/favourites/FavouritesContext";
import { RestaurantInfoCard } from "../../restaurants/components/RestaurantsInfoCardComp";
import { Spacer } from "../../../components/Spacer/SpacerComp";
import { Text } from "react-native-paper";
import { StyledFlatList } from "../../restaurants/screeens/RestaurantsScreen";

const NoFavouritesArea = styled(SafeArea)`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  return favourites.length ? (
    <SafeArea>
      <StyledFlatList
        data={favourites}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetail", {
                  restaurant: item,
                })
              }
            >
              <Spacer position="bottom" size="large">
                <RestaurantInfoCard restaurant={item} />
              </Spacer>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
