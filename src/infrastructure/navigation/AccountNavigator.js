import { createStackNavigator } from "@react-navigation/stack";
import { AccountScreen } from "../../features/account/screens/AccountScreen";
import { LoginScreen } from "../../features/account/screens/LoginScreen";
import { RegisterScreen } from "../../features/account/screens/RegisterScreen";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={AccountScreen}></Stack.Screen>
      <Stack.Screen name="Login" component={LoginScreen}></Stack.Screen>
      <Stack.Screen name="Register" component={RegisterScreen}></Stack.Screen>
    </Stack.Navigator>
  );
};
