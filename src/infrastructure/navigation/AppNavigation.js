import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { SafeArea } from "../../components/utility/SafeAreaComp";
import { RestaurantNavigator } from "./RestaurantsNavigator";

import { Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapScreen from "../../features/map/screens/MapScreen";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
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
    <NavigationContainer>
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
    </NavigationContainer>
  );
}

export default AppNavigation;
