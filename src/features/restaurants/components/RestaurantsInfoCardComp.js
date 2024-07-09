import { Image, View } from "react-native";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Text } from "../../../components/typography/typographyComp";
import { Address, Info, Rating, RestaurantCard, RestaurantCardCover, Row } from "./RestaurantsInfoCardStyle";

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Ashok",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.webp"],
    address = "jaipur",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={1} key={name}>
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant={"label"}>{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={i} width={20} height={20} xml={star} />
            ))}
          </Rating>

          {isClosedTemporarily && (
            <Row>
              <Text variant={"error"}>CLOSED TEMPORARILY</Text>
              <Image width={20} height={20} source={{ uri: icon }} />
            </Row>
          )}

          {!isClosedTemporarily && isOpenNow && <SvgXml width={25} height={25} xml={open} />}
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
