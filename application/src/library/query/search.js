import { gql } from "@apollo/client";

const SEARCH = gql`
  query repository($name: String!, $owner: String!) {
    repository(name: $name, owner: $owner) {
      id
      name
      description
      createdAt
      pushedAt
      url
      descriptionHTML
      nameWithOwner
      collaborators(last: 10) {
        nodes {
          name
          bio
        }
      }
      owner {
        repositories(last: 10) {
          nodes {
            id
            name
            createdAt
            description
            pushedAt
            nameWithOwner
            url
          }
        }
        login
        avatarUrl
        url
      }
    }
  }
`;

export default SEARCH;
