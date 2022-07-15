import styled from "@emotion/styled";
import React from "react";
import RepositoryList from "./repositoryList";

const Container = styled("div")`
  margin-top: 15px;
`;

export default function Home() {
  return (
    <>
      <Container>
        <RepositoryList></RepositoryList>
      </Container>
    </>
  );
}
