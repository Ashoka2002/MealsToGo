import { StyleSheet, Text } from "react-native";
import { Card } from "react-native-paper";

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
    <Card elevation={2} style={styles.card} key={name}>
      <Card.Cover style={styles.cardImg} source={{ uri: photos[0] }} />
      <Text style={styles.text}>{name}</Text>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
  },
  cardImg: {
    borderRadius: 5,
  },
  text: {
    padding: 10,
  },
});
