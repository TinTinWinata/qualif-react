import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../library/context/UserContext";

const Container = styled.div`
  margin-left: 10px;
  margin-top: 3px;
  padding: 20px;
  overflow: auto;
`;

const StyledCardDescription = styled("p")``;

const StyledCardName = styled("p")`
  padding-bottom: 4px;
  font-weight: bold;
`;

const StyledCardButton = styled.button``;

export function CardButton({ repo, children }) {
  const { user } = GetUser();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/detail/" + user.login + "-" + repo.name);
  };

  return <StyledCardButton onClick={handleClick}>{children}</StyledCardButton>;
}

export function CardName({ children }) {
  return <StyledCardName>{children}</StyledCardName>;
}

export function CardDetail({ children }) {
  return (
    <StyledCardDescription className="text-xs">
      {children}
    </StyledCardDescription>
  );
}

export default function Card({ children }) {
  return <Container>{children}</Container>;
}
