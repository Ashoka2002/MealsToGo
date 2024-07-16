import React from "react";

import { SettingsScreen } from "../../features/settings/screens/SettingScreen";

import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { FavouritesScreen } from "../../features/settings/screens/FavouritesScreen";

const SettingsStack = createStackNavigator();

export const SettingsNavigator = ({ route, navigation }) => {
  return (
    <SettingsStack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <SettingsStack.Screen
        options={{
          headerShown: false,
        }}
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <SettingsStack.Screen name="Favourites" component={FavouritesScreen} />
    </SettingsStack.Navigator>
  );
};
