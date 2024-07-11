import { Children, createContext, useContext, useEffect, useState } from "react";
import { restaurantsRequest, restaurantsTransform } from "./restaurantsService";
import { LocationContext } from "../../location/locationContext";

export const RestaurantContext = createContext();

export const RestaurantProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setRestaurants(results);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
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
