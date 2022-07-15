import styled from "@emotion/styled";
import React from "react";
import { useFav } from "../../library/context/FavoriteContext";
import Card from "./card";

export default function Favorite() {
  const { favorite } = useFav();

  const favoriteList = favorite.map((e) => {
    return JSON.parse(e);
  });

  const Container = styled("div")`
    width: 100%;
  `;

  return (
    <Container>
      {favoriteList.map((repo) => {
        return <Card repo={repo} key={repo.id}></Card>;
      })}
    </Container>
  );
}
