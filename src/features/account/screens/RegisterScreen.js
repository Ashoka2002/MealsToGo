import React, { useState, useContext } from "react";

import { ActivityIndicator, MD2Colors } from "react-native-paper";

import {
  ErrorContainer,
  BackgroundImg,
  BackgroundCover,
  Title,
  AccountContentContainer,
  AuthInput,
  AuthButton,
} from "../components/AccountStyle";

import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";
import { Text } from "../../../components/typography/typographyComp";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);
  return (
    <BackgroundImg>
      <BackgroundCover />
      <Title>Meals To Go</Title>
      <AccountContentContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />

        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setPassword(p)}
        />

        <AuthInput
          label="Repeat Password"
          value={repeatedPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(p) => setRepeatedPassword(p)}
        />

        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}

        <AuthButton
          icon="email"
          mode="contained"
          loading={isLoading}
          onPress={() => onRegister(email, password, repeatedPassword)}
        >
          {isLoading ? "Loading..." : "Register"}
        </AuthButton>
      </AccountContentContainer>

      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </BackgroundImg>
  );
};
