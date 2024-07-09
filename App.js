import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screeens/RestaurantsScreen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}
