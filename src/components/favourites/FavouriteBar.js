import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../Spacer/SpacerComp";
import { CompactRestaurantInfo } from "../restaurants/CompactRestaurantInfo";
import { useContext } from "react";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import { Text } from "../typography/typographyComp";

const FavouritesWrapper = styled.View`
  padding: 10px;
`;

export const FavouriteBar = ({ navigation }) => {
  const { favourites } = useContext(FavouritesContext);

  if (!favourites.length) {
    return null;
  }

  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((restaurant) => {
          const key = restaurant.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("RestaurantDetail", {
                    item: restaurant,
                  })
                }
              >
                <CompactRestaurantInfo restaurant={restaurant} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};
