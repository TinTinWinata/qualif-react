import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import RepositoryList from "./repositoryList";

export default function Home() {
  return (
    <>
      <RepositoryList></RepositoryList>
    </>
  );
}
