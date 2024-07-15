import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantNavigator } from "./RestaurantsNavigator";

import { Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapScreen from "../../features/map/screens/MapScreen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image style={{ height: 50, width: 30 }} source={require("../../../assets/pin.png")} />
    </View>
  );
}

function tabBarIcon(color, size, route) {
  let iconName;

  if (route.name === "Home") {
    iconName = "restaurant";
  } else if (route.name === "Settings") {
    iconName = "settings";
  } else if (route.name === "Map") {
    iconName = "map";
  }
  // You can return any component that you like here!
  return <Ionicons name={iconName} size={size} color={color} />;
}

function AppNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => tabBarIcon(color, size, route),
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={RestaurantNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default AppNavigation;
