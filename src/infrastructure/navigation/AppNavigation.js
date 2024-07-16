import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { RestaurantNavigator } from "./RestaurantsNavigator";

import Ionicons from "@expo/vector-icons/Ionicons";
import MapScreen from "../../features/map/screens/MapScreen";

import { SettingsScreen } from "../../features/settings/screens/SettingScreen";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { RestaurantProvider } from "../../services/restaurants/mock/restaurantsContext";
import { SettingsNavigator } from "./settingsNavigator";

const Tab = createBottomTabNavigator();

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
    <FavouritesContextProvider>
      <LocationContextProvider>
        <RestaurantProvider>
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
            <Tab.Screen name="Settings" component={SettingsNavigator} />
          </Tab.Navigator>
        </RestaurantProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
}

export default AppNavigation;
