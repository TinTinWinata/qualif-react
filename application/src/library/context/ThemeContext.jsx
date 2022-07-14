import { createContext, useContext, useState } from "react";

export const THEME = {
  light: {
    background: "#ffffff",
    foreground: "#222222",
    backdrop: "#eeeeee",
  },
  dark: {
    background: "#222222",
    foreground: "#ffffff",
    backdrop: "#303030",
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

  document.body.style.backgroundColor = currTheme.backdrop;

  return (
    <ThemeContext.Provider value={{ currTheme, changeTheme }}>
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
