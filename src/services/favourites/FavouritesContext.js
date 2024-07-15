import { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAuth } from "firebase/auth";
import { AuthenticationContext } from "../firebase/AuthenticationContext";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthenticationContext);

  useEffect(() => {
    if (user) getFav(user.uid);
  }, [user]);

  useEffect(() => {
    if (user) saveFav(favourites, user.uid);
  }, [favourites, user]);

  const saveFav = async (value, uid) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(`@fav-${uid}`, jsonValue);
    } catch (e) {
      console.log("save Fav", e);
    }
  };

  const getFav = async (uid) => {
    try {
      const jsonValue = await AsyncStorage.getItem(`@fav-${uid}`);
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

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}>
      {children}
    </FavouritesContext.Provider>
  );
};
