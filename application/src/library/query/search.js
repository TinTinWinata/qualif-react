import { gql } from "@apollo/client";

const SEARCH = gql`
  query repository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      name
      description
      createdAt
      pushedAt
      collaborators(last: 10) {
        nodes {
          name
          bio
        }
      }
      owner {
        avatarUrl
        url
      }
    }
  }
`;

export default SEARCH;
