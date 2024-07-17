import { Image, Touchable, View } from "react-native";
import { AuthButton } from "../../account/components/AccountStyle";
import { useCallback, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";
import { Avatar, List } from "react-native-paper";
import { SafeArea } from "../../../components/utility/SafeAreaComp";
import styled from "styled-components/native";
import { Spacer } from "../../../components/Spacer/SpacerComp";
import { Text } from "../../../components/typography/typographyComp";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
// import * as MediaLibrary from "expo-media-library";

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
    <SafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo ? (
            <Avatar.Icon size={180} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image size={180} source={{ uri: photo }} backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
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
