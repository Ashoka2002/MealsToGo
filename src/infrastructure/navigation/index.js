import { NavigationContainer } from "@react-navigation/native";
import { useContext } from "react";

import { AuthenticationContext } from "../../services/firebase/AuthenticationContext";
import AppNavigation from "./AppNavigation";

import { AccountNavigator } from "./AccountNavigator";

const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return <NavigationContainer>{isAuthenticated ? <AppNavigation /> : <AccountNavigator />}</NavigationContainer>;
};

export default Navigation;
