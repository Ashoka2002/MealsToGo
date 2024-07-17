import { useContext } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { FavouritesContext } from "../../services/favourites/FavouritesContext";
import { Spacer } from "../Spacer/SpacerComp";
import { CompactRestaurantInfo } from "../restaurants/CompactRestaurantInfo";
import { Text } from "../typography/typographyComp";

const FavouritesWrapper = styled(Card)`
  padding: 10px;
  z-index: 200;
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
