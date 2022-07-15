import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const LOCAL_STORAGE_KEY = 1;

const context = createContext();

export default function FavoriteProvider({ children }) {
  const [favorite, setFavorite] = useLocalStorage(LOCAL_STORAGE_KEY, []);

  function checkFav(repo) {
    const idx = searchFav(repo);
    if (idx === -1) {
      return false;
    } else {
      return true;
    }
  }

  function searchFav(repo) {
    let found = favorite
      .map((e) => {
        const obj = JSON.parse(e);
        return obj.id;
      })
      .indexOf(repo.id);
    return found;
  }

  function handleFav(repo) {
    let newArr = [...favorite];

    const found = searchFav(repo);

    if (found === -1) {
      const repoJson = JSON.stringify(repo);
      newArr.push(repoJson);
    } else {
      newArr.splice(found, 1);
    }
    setFavorite(newArr);
  }
  return (
    <context.Provider value={{ handleFav, favorite, checkFav, searchFav }}>
      {children}
    </context.Provider>
  );
}

export function useFav() {
  return useContext(context);
}
