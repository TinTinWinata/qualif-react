import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../library/context/ThemeContext";

export default function NotFound() {
  const navigate = useNavigate();

  const { currTheme } = useTheme();

  const Container = styled("div")`
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    text-align: center;
  `;

  const StyledP = styled("p")`
    max-width: 25em;
  `;

  const StyledButton = styled("button")`
    background-color: ${currTheme.foreground};
    color: ${currTheme.background};
    &:hover {
      background-color: ${currTheme.moreForeground};
    }
  `;

  const handleButton = () => {
    navigate("/home");
  };

  return (
    <Container>
      <StyledP>
        The repository was not found! Please input a different repository name
      </StyledP>
      <StyledButton
        onClick={handleButton}
        type="button"
        className="w-full px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm mt-2"
      >
        Button to the menu
      </StyledButton>
    </Container>
  );
}
