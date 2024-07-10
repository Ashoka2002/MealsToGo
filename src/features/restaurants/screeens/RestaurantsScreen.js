import React, { useContext } from "react";
import { FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from "../../../components/utility/SafeAreaComp";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";
import { RestaurantContext } from "../../../services/restaurants/mock/restaurantsContext";

const SearchContainer = styled.View`
  justify-content: center;
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const StyledFlatList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

function RestaurantsScreen() {
  const { restaurants, error, isLoading } = useContext(RestaurantContext);
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar elevation={1} />
      </SearchContainer>

      <StyledFlatList
        data={restaurants}
        renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
}

export default RestaurantsScreen;
