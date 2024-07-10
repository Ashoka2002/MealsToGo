import { Children, createContext } from "react";

export const RestrauntContext = createContext();

export const RestaurantProvider = ({ children }) => {
  return <RestrauntContext.Provider value={{ restraunts: [1, 2, 3, 4, 5] }}>{children}</RestrauntContext.Provider>;
};
