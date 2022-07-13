import { gql } from "@apollo/client";

const REPOSITORY_LIST = gql`
  query {
    user(login: "TinTinWinata") {
      repositories(last: 10) {
        nodes {
          name
          createdAt
          description
          pushedAt
          collaborators(last: 10) {
            nodes {
              name
              bio
            }
          }
        }
      }
    }
  }
`;

export default REPOSITORY_LIST;
