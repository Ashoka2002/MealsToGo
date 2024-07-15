import { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AppNavigation from "./AppNavigation";
import { AuthenticationContext } from "../../services/firebase/AuthenticationContext";

import { AccountNavigator } from "./AccountNavigator";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return <NavigationContainer>{isAuthenticated ? <AppNavigation /> : <AccountNavigator />}</NavigationContainer>;
};

export default Navigation;
