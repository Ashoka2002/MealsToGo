import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import { RestaurantDetail } from "../../features/restaurants/screeens/RestaurantDetailScreen";
import RestaurantsScreen from "../../features/restaurants/screeens/RestaurantsScreen";

const RestaurantStack = createStackNavigator();

export function RestaurantNavigator() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalSlideFromBottomIOS,
        gestureEnabled: true,
        headerShown: false,
      }}
    >
      <RestaurantStack.Screen name="Restaurant" component={RestaurantsScreen} />

      <RestaurantStack.Screen name="RestaurantDetail" component={RestaurantDetail} />
    </RestaurantStack.Navigator>
  );
}
