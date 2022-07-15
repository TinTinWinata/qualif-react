import { createContext, useContext, useState } from "react";

export const THEME = {
  light: {
    background: "#ffffff",
    foreground: "#222222",
    moreForeground: "#141414",
    backdrop: "#f7f7f7",
    detail: "#737373",
    moreBackdrop: "#ebebeb",
    favorite: "#780101",
    hoverFavorite: "#940101",
    inputColor: "#222222",
  },
  dark: {
    background: "#222222",
    foreground: "#ffffff",
    moreForeground: "#ebebeb",
    backdrop: "#303030",
    detail: "#d6d6d6",
    moreBackdrop: "#212121",
    favorite: "#ff7070",
    hoverFavorite: "#ff3838",
    inputColor: "#222222",
  },
};
const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [currTheme, setTheme] = useState(THEME.light);

  const changeTheme = () => {
    if (currTheme === THEME.dark) {
      setTheme(THEME.light);
    } else {
      setTheme(THEME.dark);
    }
  };

  const isDark = () => {
    if (currTheme === THEME.dark) {
      return true;
    } else {
      return false;
    }
  };

  document.body.style.backgroundColor = currTheme.backdrop;

  return (
    <ThemeContext.Provider value={{ currTheme, changeTheme, isDark }}>
      <div
        style={{
          backgroundColor: currTheme.backdrop,
          color: currTheme.foreground,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
