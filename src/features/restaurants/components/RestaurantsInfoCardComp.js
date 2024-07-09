import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import styled from "styled-components/native";

const Title = styled.Text`
  padding: ${({ theme }) => theme.space[2]};
  font-size: ${({ theme }) => theme.sizes[1]};
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.body};
`;

const RestaurantCard = styled(Card)`
  padding: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
  border-radius: ${({ theme }) => theme.sizes[0]};
`;
const RestaurantCardCover = styled(Card.Cover)`
  border-radius: ${({ theme }) => theme.sizes[0]};
`;

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Ashok",
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
