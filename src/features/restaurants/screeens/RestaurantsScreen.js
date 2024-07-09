import React from "react";
import { SafeAreaView, StatusBar, FlatList } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `padding-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled.View`
  justify-content: "center";
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  border-radius: ${({ theme }) => theme.sizes[0]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
`;

function RestaurantsScreen() {
  return (
    <SafeArea>
      <SearchContainer>
        <SearchBar elevation={1} />
      </SearchContainer>
      <FlatList
        data={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
        contentContainerStyle={{ padding: 16 }}
      />
    </SafeArea>
  );
}

export default RestaurantsScreen;
