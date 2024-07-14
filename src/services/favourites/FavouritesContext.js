import { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);
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
