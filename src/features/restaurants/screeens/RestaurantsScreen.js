import React from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";
import styled from "styled-components";

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
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
}

export default RestaurantsScreen;
