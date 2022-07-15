import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { GetUser } from "../../library/context/UserContext";
import MEDIA_QUERY from "../../library/mediaquery";
import REPOSITORY_LIST from "../../library/query/repositoryList";
import Card, {
  CardButton,
  CardDetail,
  CardName,
  CardTitleContainer,
} from "./card";

export default function RepositoryList() {
  const { user } = GetUser();

  const navigate = useNavigate();

  const Container = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;

    ${MEDIA_QUERY[1]} {
      flex-direction: column;
    }
  `;

  const { loading, error, data } = useQuery(REPOSITORY_LIST);

  if (loading) {
    return <div></div>;
  }
  if (error) {
    console.log(error);
  }
  if (data) {
    const repositories = data.user.repositories.nodes;
    return (
      <Container>
        {repositories.map((repo, index) => {
          return (
            <Card key={index}>
              <CardTitleContainer repo={repo}>
                <CardName>{repo.name}</CardName>
                <CardDetail>{repo.description}</CardDetail>
              </CardTitleContainer>
              <CardButton repo={repo}>Favorite</CardButton>
            </Card>
          );
        })}
      </Container>
    );
  }
}
