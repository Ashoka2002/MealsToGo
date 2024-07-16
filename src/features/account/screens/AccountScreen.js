import React from "react";
import {
  AccountContentContainer,
  AnimationWrapper,
  AuthButton,
  BackgroundCover,
  BackgroundImg,
  Title,
  WatermelonAnimation,
} from "../components/AccountStyle";
import LottieView from "lottie-react-native";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImg>
      <BackgroundCover />
      <WatermelonAnimation />
      <Title>Meals To Go</Title>
      <AccountContentContainer elevation={2}>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <AuthButton icon="email" mode="contained" onPress={() => navigation.navigate("Register")}>
          Register
        </AuthButton>
      </AccountContentContainer>
    </BackgroundImg>
  );
};
