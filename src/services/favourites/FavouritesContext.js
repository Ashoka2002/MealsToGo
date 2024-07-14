import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const saveFav = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("favourites", jsonValue);
    } catch (e) {
      console.log("save Fav", e);
    }
  };

  const getFav = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("favourites");
      if (jsonValue !== null) {
        setFavourites(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.log("get fav", e);
    }
  };

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };

  const remove = (restaurant) => {
    const newRestaurant = favourites.filter((res) => res.placeId !== restaurant.placeId);
    setFavourites(newRestaurant);
  };

  useEffect(getFav, []);

  useEffect(() => {
    saveFav(favourites);
  }, [favourites]);

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
