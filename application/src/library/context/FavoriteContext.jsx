import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const LOCAL_STORAGE_KEY = 1;

const context = createContext();

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  function handleFav(name) {
    let newArr = [...favorite];
    let found = favorite.indexOf(name);
    if (found === -1) {
      newArr.push(name);
    } else {
      newArr.splice(found, 1);
    }
    setFavorite(newArr);
  }
  return (
    <context.Provider value={{ handleFav, favorite }}>
      {children}
    </context.Provider>
  );
}

export function useFav() {
  return useContext(context);
}
