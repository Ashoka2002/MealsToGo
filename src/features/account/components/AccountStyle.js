import styled from "styled-components/native";
import { Button } from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";

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
  padding: ${({ theme }) => theme.space[4]};
  background-color: rgba(255, 255, 255, 0.9);
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[1]};
  border-radius: 5px;
  margin-top: 8px;
`;
