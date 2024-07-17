import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { useContext, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Avatar, List } from "react-native-paper";
import styled from "styled-components/native";
import { Spacer } from "../../../components/Spacer/SpacerComp";
import { Text } from "../../../components/typography/typographyComp";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";

// import * as MediaLibrary from "expo-media-library";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.6);
  margin-bottom: 5px;
`;
const AvatarContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const SettingBG = styled.ImageBackground.attrs({ source: require("../../../../assets/home_bg.jpg") })`
  flex: 1;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255 255 255/0.5);
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getUserProfile = async (currentUser) => {
    const pic = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(pic);
  };

  useFocusEffect(() => {
    getUserProfile(user);
  });

  // ----------------------------- SAVE PHOTO TO GALLARY ---------------------

  // const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();
  // async function getAlbums() {
  //   if (permissionResponse.status !== "granted") {
  //     await requestPermission();
  //   }
  //   savePhoto(photo);
  // }

  // const savePhoto = async (uri) => {
  //   try {
  //     await MediaLibrary.saveToLibraryAsync(uri);
  //     alert("Photo saved to gallery!");
  //   } catch (error) {
  //     console.error("Error saving photo:", error);
  //     alert("Failed to save photo to gallery.");
  //   }
  // };

  // ----------------------------- XXXXXXXXXXXXX ---------------------

  return (
    <SettingBG>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor={colors.brand.primary} />
          ) : (
            <Avatar.Image size={180} source={{ uri: photo }} />
          )}
        </TouchableOpacity>
        <Spacer position="top" size="large">
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvatarContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          // description="View your favourites"
          left={(props) => <List.Icon {...props} color={colors.ui.error} icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Payment"
          left={(props) => <List.Icon {...props} color="black" icon="currency-inr" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Cart"
          left={(props) => <List.Icon {...props} color="black" icon="cart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SettingBG>
  );
}
