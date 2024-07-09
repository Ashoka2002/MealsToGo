import React from "react";
import { SafeAreaView, Text, View, StyleSheet, StatusBar, Platform } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";

function RestaurantsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchbar}>
        <Searchbar style={styles.search} elevation={1} />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
      </View>
    </SafeAreaView>
  );
}

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchbar: {
    justifyContent: "center",
    padding: 12,
  },
  search: {
    borderRadius: 4,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
