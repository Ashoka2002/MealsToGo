import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: 10px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.ui.primary};
`;

const RestaurantCard = styled(Card)`
  padding: 10px;
  background-color: "white";
  border-radius: 5px;
`;
const RestaurantCardCover = styled(Card.Cover)`
  border-radius: 5px;
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "ashok",
    icon = "icon",
    photos = ["https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.webp"],
    address = "jaipur",
    isOpenNow = true,
    rating = 5,
    isClosedTemporarily = true,
  } = restaurant;
  return (
    <RestaurantCard elevation={1} key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </RestaurantCard>
  );
}
