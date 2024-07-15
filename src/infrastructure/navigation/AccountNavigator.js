import { Text, View } from "react-native";
import { SafeArea } from "../../components/utility/SafeAreaComp";

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Login() {
  return (
    <View style={{ backgroundColor: "skyblue", flex: 1 }}>
      <SafeArea>
        <Text>You are not Authenticated</Text>
      </SafeArea>
    </View>
  );
}

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={Login}></Stack.Screen>
      <Stack.Screen name="Login" component={Login}></Stack.Screen>
    </Stack.Navigator>
  );
};
