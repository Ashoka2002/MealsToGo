import { Image, StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.body};
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.button};
`;

const RestaurantCard = styled(Card)`
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.sizes[0]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  border-radius: ${({ theme }) => theme.sizes[0]};
  height: 200px;
`;

const Info = styled.View`
  padding: ${({ theme }) => theme.space[2]};
`;

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${({ theme }) => theme.space[2]};
  padding-bottom: ${({ theme }) => theme.space[2]};
`;

const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-left: -5px;
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Ashok",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.webp"],
    address = "jaipur",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={1} key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Row>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml width={20} height={20} xml={star} />
            ))}
          </Rating>

          {isClosedTemporarily && (
            <>
              <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
              <Image width={20} height={20} source={{ uri: icon }} />
            </>
          )}

          {!isClosedTemporarily && isOpenNow && <SvgXml width={25} height={25} xml={open} />}
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
