import React from "react";
import { AccountContentContainer, AuthButton, BackgroundCover, BackgroundImg, Title } from "../components/AccountStyle";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImg>
      <BackgroundCover />
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
