import React from "react";
import { useTheme } from "../../library/context/ThemeContext";

export default function Quote({ quote }) {
  const { currTheme } = useTheme();

  return (
    <span>
      {quote.text}{" "}
      <span style={{ color: currTheme.detail }}>
        {"(" + quote.author + ") "}
      </span>
    </span>
  );
}
