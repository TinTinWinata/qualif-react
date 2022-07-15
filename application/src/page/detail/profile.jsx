import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFav } from "../../library/context/FavoriteContext";
import { useTheme } from "../../library/context/ThemeContext";
import MEDIA_QUERY from "../../library/mediaquery";

export default function Profile({ props, repo }) {
  const { currTheme } = useTheme();
  const { checkFav, handleFav } = useFav();

  const [starColor, setStarColor] = useState(currTheme.detail);

  useEffect(() => {
    checkFavColor();
  }, []);

  const StyledImage = styled("img")`
    max-width: 40px;
    max-height: 40px;
    border-radius: 50%;
  `;
  const Container = styled("div")`
    display: flex;
  `;
  const StyledLogin = styled("p")`
    margin-left: 10px;
    font-size: 0.9em;
  `;

  const StyledDetail = styled("p")`
    margin-left: 10px;
    font-size: 0.6em;
  `;

  const StyledButton = styled("button")`
    padding: 0px 7px;
    font-size: 0.5em;
    border-radius: 10%;
    margin-left: 10px;
    background-color: ${currTheme.foreground};
    color: ${currTheme.backdrop};
    &:hover {
      background-color: ${currTheme.detail};
    }
  `;

  const FlexContainer = styled("div")`
    display: flex;
    width: 100%;
    ${MEDIA_QUERY[1]} {
      margin-left: 5px;
      justify-content: space-between;
    }
  `;

  const StyledSvg = styled("svg")`
    margin-left: 15px;
    margin-top: 12px;
    ${MEDIA_QUERY[0]} {
      margin-left: 0px;
    }
  `;

  const changeColor = () => {
    if (starColor === currTheme.detail) {
      setStarColor("rgb(234 179 8)");
    } else {
      setStarColor(currTheme.detail);
    }
  };

  const handleSvgClick = () => {
    window.location.replace(props.url);
  };

  const checkFavColor = () => {
    const check = checkFav(repo);

    if (check) {
      setStarColor("rgb(234 179 8)");
    } else {
      setStarColor(currTheme.detail);
    }
  };

  const handleFavClick = () => {
    if (props) {
      handleFav(repo);
      changeColor();
    }
  };

  return (
    <>
      <FlexContainer>
        <Container>
          <div className="flex">
            <StyledImage src={props.avatarUrl}></StyledImage>
            <div className="flex flex-col">
              <div className="flex">
                <StyledLogin>{props.login}</StyledLogin>
              </div>
              <StyledDetail style={{ color: currTheme.detail }}>
                {props.url}
              </StyledDetail>
            </div>
          </div>
        </Container>
        <div className="flex">
          <StyledSvg
            onClick={handleFavClick}
            style={{ color: starColor }}
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 h-4 w-4 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </StyledSvg>
          <StyledSvg
            onClick={handleSvgClick}
            style={{ color: currTheme.detail }}
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 h-4 w-4 mr-2 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </StyledSvg>
        </div>
      </FlexContainer>
    </>
  );
}
