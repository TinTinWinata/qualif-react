import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFav } from '../../library/context/FavoriteContext';
import { useTheme } from '../../library/context/ThemeContext';
import { GetUser } from '../../library/context/UserContext';
import MEDIA_QUERY from '../../library/mediaquery';

const StyledCardDescription = styled('p')``;

const StyledCardName = styled('p')`
  padding-bottom: 4px;
  font-weight: bold;
`;

export function CardButton({ repo, children }) {
  const { currTheme } = useTheme();
  const { handleFav, checkFav } = useFav();

  const isFav = checkFav(repo);
  const mainColor = isFav ? currTheme.favorite : currTheme.foreground;
  const secondColor = isFav
    ? currTheme.hoverFavorite
    : currTheme.moreForeground;

  const handleClick = () => {
    handleFav(repo);
  };

  const StyledCardButton = styled.button`
    background-color: ${mainColor};
    color: ${currTheme.backdrop};
    font-size: 12px;
    padding: 3px 10px;
    margin-top: 6px;
    border-radius: 30px;
    &:hover {
      background-color: ${secondColor};
    }
  `;

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

export function CardTitleContainer({ repo, children }) {
  const navigate = useNavigate();
  const { user } = GetUser();
  const handleClick = () => {
    navigate('/detail/' + user.login + '-' + repo.name);
  };

  return <div onClick={handleClick}>{children}</div>;
}

export default function Card({ children }) {
  const Container = styled.div`
    margin-left: 10px;
    margin-top: 3px;
    padding: 20px;
    overflow: auto;
    width: 300px;
    height: 130px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    cursor: pointer;
    border-radius: 15px;
    ${MEDIA_QUERY[1]} {
      width: 100%;
    }
  `;

  return <Container>{children}</Container>;
}
