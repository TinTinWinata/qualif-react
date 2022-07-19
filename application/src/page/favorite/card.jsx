import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useFav } from "../../library/context/FavoriteContext";
import { useTheme } from "../../library/context/ThemeContext";
import { GetUser } from "../../library/context/UserContext";

export default function Card({ repo }) {
  const { handleFav } = useFav();
  const createdAt = new Date(repo.createdAt);
  const navigate = useNavigate();

  const { currTheme } = useTheme();
  const { user } = GetUser();

  const Container = styled("div")`
    margin-top: 1px;
    align-items: center;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: space-between;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 1px 1px 0px;
    background-color: ${currTheme.background};
  `;

  const StyledName = styled("div")`
    font-size: 18px;
    font-weight: bold;
  `;

  const StyledDescription = styled("div")`
    font-size: 12px;
    color: ${currTheme.detail};
  `;

  const StyledCreatedDate = styled("div")`
    font-size: 10px;
    color: ${currTheme.detail};
  `;

  const StyledButton = styled("button")`
    &:hover{
      border: 1px solid ${currTheme.foreground}
    
  `;

  const StyledNameWithOwner = styled("span")`
    font-weight: 500;
    font-size: 15px;
  `;

  const handleButton = () => {
    navigate("/detail/" + user.login + "-" + repo.name);
  };

  const handleStar = () => {
    handleFav(repo);
  };

  return (
    <Container>
      <div className="ml-10">
        <div className="flex break-all">
          <StyledName>
            {repo.name}{" "}
            <StyledNameWithOwner>
              {"(" + repo.nameWithOwner + ")"}
            </StyledNameWithOwner>
          </StyledName>
          <svg
            onClick={handleStar}
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer text-yellow-500 ml-1 mt-[5.5px] h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>

        <StyledDescription>{repo.description}</StyledDescription>
        <StyledCreatedDate>{createdAt.toDateString()}</StyledCreatedDate>
      </div>
      <StyledButton
        onClick={handleButton}
        type="button"
        className="inline-flex items-center px-4 py-2 border  shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 "
      >
        Detail
      </StyledButton>
    </Container>
  );
}
