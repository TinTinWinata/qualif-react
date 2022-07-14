import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import MEDIA_QUERY from "../../library/mediaquery";
import REPOSITORY_LIST from "../../library/query/repositoryList";
import Card, { CardButton, CardDetail, CardName } from "./card";

export default function RepositoryList() {
  const Container = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-start;

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
          // console.log(repo);
          return (
            <Card key={index}>
              <CardName>{repo.name}</CardName>
              <CardDetail>{repo.description}</CardDetail>
              <CardButton repo={repo}>Detail</CardButton>
            </Card>
          );
        })}
      </Container>
    );
  }
}
