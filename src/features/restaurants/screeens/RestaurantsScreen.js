import React, { useContext, useState } from "react";
import { ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { FadeInView } from "../../../components/animation/FadeAnimation";
import { FavouriteBar } from "../../../components/favourites/FavouriteBar";
import { SafeArea } from "../../../components/utility/SafeAreaComp";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurantsContext";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";
import SearchComp from "../components/SearchComp";

export const StyledFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const StyledActivityIndicator = styled(ActivityIndicator)`
  flex: 1;
`;

function RestaurantsScreen({ navigation }) {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);
  const [isToggled, setIsToggled] = useState(false);

  const renderItem = ({ item }) => (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("RestaurantDetail", { item })}>
      <RestaurantInfoCard restaurant={item} />
    </TouchableOpacity>
  );

  return (
    <SafeArea>
      <SearchComp isFavToggled={isToggled} onFavToggle={() => setIsToggled(!isToggled)} />
      {isToggled && <FavouriteBar navigation={navigation} />}
      {isLoading ? (
        <StyledActivityIndicator animating={true} color={MD2Colors.orange800} size={50} />
      ) : (
        <FadeInView>
          <StyledFlatList data={restaurants} renderItem={renderItem} keyExtractor={(item) => item.name.toString()} />
        </FadeInView>
      )}
    </SafeArea>
  );
}

export default RestaurantsScreen;
