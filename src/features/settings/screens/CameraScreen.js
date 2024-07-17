import AsyncStorage from "@react-native-async-storage/async-storage";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { useContext, useRef } from "react";
import { Button, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";

export const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = useCameraPermissions();
  const [permissionResponse, requestPermissionMedia] = MediaLibrary.usePermissions();
  const { user } = useContext(AuthenticationContext);
  const cameraRef = useRef();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
        <Button
          onPress={async () => {
            await requestPermission();
            await requestPermissionMedia();
          }}
          title="grant permission"
        />
      </View>
    );
  }

  const snap = async () => {
    if (!cameraRef) return;
    const photo = await cameraRef.current.takePictureAsync();
    AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
    if (photo) {
      savePhotoToGallary(photo.uri);
    }
    navigation.goBack();
    console.log(photo);
  };

  const savePhotoToGallary = async (uri) => {
    if (Platform.OS === "ios") {
      await MediaLibrary.saveToLibraryAsync(uri);
    } else {
      // If platform is Android, create an asset from the URI
      const asset = await MediaLibrary.createAssetAsync(uri);
      // Create an album named "MealsToGo" if it doesn't exist, and add the asset to it
      await MediaLibrary.createAlbumAsync("MealsToGo", asset, false);
    }
    alert("Photo saved to gallery!");
  };

  return (
    <View style={styles.container}>
      <CameraView ref={(camera) => (cameraRef.current = camera)} style={styles.camera} facing={"front"} ratio={"16:9"}>
        <TouchableOpacity style={{ flex: 1 }} onPress={snap} />
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
