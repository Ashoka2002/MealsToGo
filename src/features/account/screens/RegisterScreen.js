import React, { useState, useContext } from "react";
import {
  ErrorContainer,
  BackgroundImg,
  BackgroundCover,
  Title,
  AccountContentContainer,
  AuthInput,
  AuthButton,
} from "../components/AccountStyle";

import { Text } from "../../../components/typography/typographyComp";
import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";

export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const { onRegister, error } = useContext(AuthenticationContext);
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

        <AuthButton icon="email" mode="contained" onPress={() => onRegister(email, password, repeatedPassword)}>
          Register
        </AuthButton>
      </AccountContentContainer>

      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </BackgroundImg>
  );
};
