import React, { useContext } from "react";
import { FlatList, ActivityIndicator, TouchableOpacity, Text } from "react-native";
import { MD2Colors } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeAreaComp";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurantsContext";
import SearchComp from "../components/SearchComp";

const StyledFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

const StyledActivityIndicator = styled(ActivityIndicator)`
  flex: 1;
`;

function RestaurantsScreen({ navigation }) {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchComp />

      {isLoading ? (
        <StyledActivityIndicator animating={true} color={MD2Colors.orange800} size={50} />
      ) : (
        <StyledFlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("RestaurantDetail", { item })}>
              <RestaurantInfoCard restaurant={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </SafeArea>
  );
}

export default RestaurantsScreen;
