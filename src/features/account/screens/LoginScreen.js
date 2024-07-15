import { SafeArea } from "../../../components/utility/SafeAreaComp";
import { useContext, useState } from "react";
import styled from "styled-components/native";
import {
  AuthButton,
  AuthInput,
  BackgroundCover,
  BackgroundImg,
  ErrorContainer,
  Title,
} from "../components/AccountStyle";
import { AuthenticationContext } from "../../../services/firebase/AuthenticationContext";
import { Text } from "../../../components/typography/typographyComp";

const StyledView = styled.View`
  width: 80%;
  padding: ${({ theme }) => theme.space[4]};
  background-color: rgba(255, 255, 255, 0.8);
`;

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <BackgroundImg>
      <BackgroundCover />
      <Title>Meals To Go</Title>
      <StyledView>
        <AuthInput
          autoCapitalize="none"
          textContentType="emailAddress"
          keyboardType="email-address"
          label="E-mail"
          value={email}
          onChangeText={setEmail}
        />
        <AuthInput
          autoCapitalize="none"
          secureTextEntry
          textContentType="password"
          label="Password"
          value={password}
          onChangeText={setPassword}
        />
        <AuthButton
          icon="lock-open-outline"
          mode="contained"
          loading={isLoading}
          onPress={() => onLogin(email, password)}
        >
          {!isLoading ? "Login" : "Loading..."}
        </AuthButton>
        {error && (
          <ErrorContainer>
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
      </StyledView>
      <AuthButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </BackgroundImg>
  );
};
