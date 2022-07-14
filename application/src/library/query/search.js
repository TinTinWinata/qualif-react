import { gql } from "@apollo/client";

const SEARCH = gql`
  query {
    repository(name: "CHello", owner: "TinTinWinata") {
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
