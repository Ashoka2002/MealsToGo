import { Platform } from "react-native";
import WebView from "react-native-webview";
import styled from "styled-components/native";
import { Text } from "../typography/typographyComp";

const StyledImg = styled.Image.attrs({
  resizeMode: "cover",
})`
  width: 120px;
  height: 86px;
  border-radius: 8px;
  margin-bottom: 5px;
`;
const StyledImgAndroid = styled(WebView)`
  width: 120px;
  height: 80px;
  border-radius: 10px;
  margin-bottom: 5px;
`;

const StyledView = styled.View`
  padding: 10px;
  align-items: center;
  max-width: 130px;
`;

const Title = styled(Text)`
  /* font-weight: bold; */
  font-size: 14px;
  text-align: center;
  margin-bottom: 5px;
`;

const Address = styled(Text)`
  text-align: center;
  color: gray;
`;
const isAndroid = Platform.OS === "android";

export const CompactRestaurantInfo = ({ restaurant, isMap }) => {
  const Image = isAndroid && isMap ? StyledImgAndroid : StyledImg;
  return (
    <StyledView>
      <Image source={{ uri: restaurant.photos[0] }} />

      <Title>{restaurant.name}</Title>
      {/* <Address variant="caption">{restaurant.vicinity}</Address> */}
    </StyledView>
  );
};
