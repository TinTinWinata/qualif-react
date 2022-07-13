import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import RepositoryList from "./repositoryList";

// const SearchBar = styled.button`
//   padding: 10px;
//   border-radius: 3px;
//   margin: 10px;
// `;

export default function Home() {
  return (
    <>
      <RepositoryList></RepositoryList>
    </>
  );
}
