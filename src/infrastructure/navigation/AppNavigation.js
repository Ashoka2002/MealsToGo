import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { RestaurantNavigator } from "./RestaurantsNavigator";

import { Image, Text, View } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import MapScreen from "../../features/map/screens/MapScreen";
import { AuthButton } from "../../features/account/components/AccountStyle";
import { AuthenticationContext } from "../../services/firebase/AuthenticationContext";

import { LocationContextProvider } from "../../services/location/locationContext";
import { RestaurantProvider } from "../../services/restaurants/mock/restaurantsContext";
import { FavouritesContextProvider } from "../../services/favourites/FavouritesContext";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  const { onLogout } = useContext(AuthenticationContext);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <AuthButton icon="logout" mode="contained" onPress={() => onLogout()}>
        Signout
      </AuthButton>
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
            <Tab.Screen name="Settings" component={SettingsScreen} />
          </Tab.Navigator>
        </RestaurantProvider>
      </LocationContextProvider>
    </FavouritesContextProvider>
  );
}

export default AppNavigation;
