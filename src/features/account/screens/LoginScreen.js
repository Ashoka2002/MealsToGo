import { Text, View } from "react-native";
import { SafeArea } from "../../../components/utility/SafeAreaComp";

export const LoginScreen = () => {
  return (
    <View style={{ backgroundColor: "skyblue", flex: 1 }}>
      <SafeArea>
        <Text>You are not Authenticated</Text>
      </SafeArea>
    </View>
  );
};
