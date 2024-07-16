import { View } from "react-native";
import { AuthButton } from "../../account/components/AccountStyle";
import { useContext } from "react";
import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";
import { Avatar, List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/SafeAreaComp";
import styled from "styled-components/native";
import { Spacer } from "../../../components/Spacer/SpacerComp";
import { Text } from "../../../components/typography/typographyComp";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;
const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
}
