import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import React from "react";
import REPOSITORY_LIST from "../../library/query/repositoryList";

export default function RepositoryList() {
  const { loading, error, data } = useQuery(REPOSITORY_LIST);

  if (loading) {
    return <div>Loading</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  if (data) {
    const repositories = data.user.repositories.nodes;
    return (
      <div>
        {repositories.map((repo, index) => {
          // console.log(repo);
          return (
            <div key={index}>
              <p>{repo.name}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
