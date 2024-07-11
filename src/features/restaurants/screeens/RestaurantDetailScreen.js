import { SafeArea } from "../../../components/utility/SafeAreaComp";
import { RestaurantInfoCard } from "../components/RestaurantsInfoCardComp";

export const RestaurantDetail = ({
  route: {
    params: { item },
  },
}) => {
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={item} />
    </SafeArea>
  );
};
