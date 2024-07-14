import "react-native-gesture-handler";
import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

import { LocationContextProvider } from "./src/services/location/locationContext";
import { RestaurantProvider } from "./src/services/restaurants/mock/restaurantsContext";
import { SafeArea } from "./src/components/utility/SafeAreaComp";
import Navigation from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <FavouritesContextProvider>
        <LocationContextProvider>
          <RestaurantProvider>
            <Navigation />
          </RestaurantProvider>
        </LocationContextProvider>
      </FavouritesContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
