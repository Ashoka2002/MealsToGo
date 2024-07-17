import { Image } from "react-native";
import { SvgXml } from "react-native-svg";
import open from "../../../../assets/open";
import star from "../../../../assets/star";
import { Favourite } from "../../../components/favourites/FavouriteIcon";
import { Text } from "../../../components/typography/typographyComp";
import { Address, Info, Rating, RestaurantCard, RestaurantCardCover, Row } from "./RestaurantsInfoCardStyle";

export function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Ashok",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = ["https://t4.ftcdn.net/jpg/07/08/47/75/360_F_708477508_DNkzRIsNFgibgCJ6KoTgJjjRZNJD4mb4.webp"],
    vicinity: address = "jaipur",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
    placeId,
  } = restaurant;

  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={1} key={name}>
      <Favourite restaurant={restaurant} />
      <RestaurantCardCover source={{ uri: photos[0] }} />
      <Info>
        <Text variant={"label"}>{name}</Text>
        <Row>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={`star-${placeId}-${i}`} width={20} height={20} xml={star} />
            ))}
          </Rating>

          {isClosedTemporarily && <Text variant={"error"}>CLOSED TEMPORARILY</Text>}

          {!isClosedTemporarily && isOpenNow && (
            <Row>
              <SvgXml width={25} height={25} xml={open} />
              <Image width={20} height={20} source={{ uri: icon }} />
            </Row>
          )}
        </Row>
        <Address>{address}</Address>
      </Info>
    </RestaurantCard>
  );
}
