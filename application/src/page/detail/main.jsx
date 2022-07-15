import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "../../library/context/ThemeContext";
import MEDIA_QUERY from "../../library/mediaquery";
import Quote from "./quote";

export default function Main({ props, image, quote }) {
  const { currTheme } = useTheme();

  const handleDetail = () => {
    window.location.replace(props.url);
  };

  const StyledTitle = styled.div`
    margin-top: 20px;
    font-weight: 1000;
    word-wrap: break-word;
  `;

  const StyledImage = styled.div`
    margin-top: 15px;
    width: 100%;
    height: 400px;
    background-image: url(${image});
    background-size: cover;

    ${MEDIA_QUERY[0]} {
      height: 200px;
    }
  `;

  const StyledName = styled("p")`
    color: ${currTheme.detail};
    font-size: 14px;
  `;

  const StyledDescription = styled("div")`
    background-color: ${currTheme.moreBackdrop};
    padding: 10px;
    margin-top: 20px;
  `;

  const StyledButton = styled("button")`
    background-color: ${currTheme.foreground};
    color: ${currTheme.background};
    padding: 7px;
    width: 30%;
    font-size: 15px;
    margin-top: 50px;
    position: relative;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    ${MEDIA_QUERY[1]} {
      width: 100%;
    }
    &:hover {
      background-color: ${currTheme.moreForeground};
    }
  `;

  const StyledSpan = styled("span")``;
  return (
    <>
      <StyledTitle>
        {props.name}
        <StyledSpan>{"(" + props.nameWithOwner + ")"}</StyledSpan>
      </StyledTitle>
      <StyledImage></StyledImage>
      <StyledName>{props.name + " Repository"}</StyledName>
      <StyledDescription>
        <p>{props.description} </p>
        <p className="mt-2 text-xs">
          {quote
            ? quote.map((node, index) => (
                <Quote key={index} quote={node}></Quote>
              ))
            : ""}
        </p>
      </StyledDescription>
      <StyledButton onClick={handleDetail}>Open in Github</StyledButton>
    </>
  );
}
