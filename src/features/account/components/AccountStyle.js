import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/typographyComp";
import LottieView from "lottie-react-native";

export const BackgroundImg = styled.ImageBackground.attrs({ source: require("../../../../assets/home_bg.jpg") })`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255 255 255/0.3);
`;

export const AccountContentContainer = styled.View`
  width: 80%;
  padding: ${({ theme }) => theme.space[4]};
  background-color: rgba(255, 255, 255, 0.7);
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
  margin-top: 8px;
`;

export const AuthInput = styled(TextInput)`
  margin-top: 10px;
`;

export const Title = styled(Text)`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const WatermelonAnimation = styled(LottieView).attrs({
  autoPlay: true,
  loop: true,
  source: require("../../../../assets/watermelon.json"),
  key: "animation",
  resizeMode: "cover",
})`
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
`;
