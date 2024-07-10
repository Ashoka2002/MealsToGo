import { Children, createContext, useContext, useEffect, useState } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurantsService";
import { LocationContext } from "../../location/locationContext";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  console.log("location", location);
  // console.log("rest", restaurants);
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          console.log("res", results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log("err", err);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    const locationStr = `${location?.lat},${location?.lng}`;
    retrieveRestaurants(locationStr);
  }, [location]);

  return <RestaurantContext.Provider value={{ restaurants, isLoading, error }}>{children}</RestaurantContext.Provider>;
};
