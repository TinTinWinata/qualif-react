import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "../../library/context/ThemeContext";

export default function Main({ props, image }) {
  console.log(props);
  const { currTheme } = useTheme();

  const StyledDescription = styled.div`
    margin-top: 20px;

    font-weight: 1000;
  `;

  return (
    <>
      <StyledDescription>{props.description}</StyledDescription>
      <img src={image} alt="" />
    </>
  );
}
