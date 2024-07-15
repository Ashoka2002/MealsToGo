import React from "react";
import { AccountContentContainer, AuthButton, BackgroundCover, BackgroundImg } from "../components/AccountStyle";

import { Button } from "react-native-paper";

export const AccountScreen = ({ navigation }) => {
  return (
    <BackgroundImg>
      <BackgroundCover />
      <AccountContentContainer elevation={2}>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Login")}>
          Login
        </AuthButton>
        <AuthButton icon="lock-open-outline" mode="contained" onPress={() => navigation.navigate("Register")}>
          Register
        </AuthButton>
      </AccountContentContainer>
    </BackgroundImg>
  );
};
