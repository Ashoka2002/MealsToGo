import "react-native-gesture-handler";
import "./src/services/firebase/firebaseConfig";

import { Lato_400Regular, useFonts as useLato } from "@expo-google-fonts/lato";
import { Oswald_400Regular, useFonts as useOswald } from "@expo-google-fonts/oswald";
import { StatusBar } from "expo-status-bar";

import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

import { LocationContextProvider } from "./src/services/location/locationContext";
import { RestaurantProvider } from "./src/services/restaurants/mock/restaurantsContext";

import Navigation from "./src/infrastructure/navigation";
import { FavouritesContextProvider } from "./src/services/favourites/FavouritesContext";
import { AuthenticationContextProvider } from "./src/services/firebase/AuthenticationContext";

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
      <AuthenticationContextProvider>
        <FavouritesContextProvider>
          <LocationContextProvider>
            <RestaurantProvider>
              <Navigation />
            </RestaurantProvider>
          </LocationContextProvider>
        </FavouritesContextProvider>
      </AuthenticationContextProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
