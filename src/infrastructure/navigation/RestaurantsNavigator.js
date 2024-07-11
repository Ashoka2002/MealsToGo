import { createStackNavigator } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screeens/RestaurantsScreen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

export function RestaurantNavigator() {
  return (
    <RestaurantStack.Navigator>
      <RestaurantStack.Screen name="Restaurant" options={{ headerShown: false }} component={RestaurantsScreen} />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        options={{ headerShown: false }}
        component={() => <Text>RestaurantDetail</Text>}
      />
    </RestaurantStack.Navigator>
  );
}
