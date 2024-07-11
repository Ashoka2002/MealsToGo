import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import RestaurantsScreen from "../../features/restaurants/screeens/RestaurantsScreen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

const RestaurantDetail = () => <Text>RestaurantDetail</Text>;

export function RestaurantNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS, gestureEnabled: true, headerShown: false }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />

      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </RestaurantStack.Navigator>
  );
}
