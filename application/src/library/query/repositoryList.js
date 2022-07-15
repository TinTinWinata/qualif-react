import { gql } from "@apollo/client";

const REPOSITORY_LIST = gql`
  query {
    user(login: ${'"' + process.env.REACT_APP_GITHUB_LOGIN_NAME + '"'}) {
      repositories(last: 10) {
        nodes {
          id
          name
          createdAt
          description
          pushedAt
          nameWithOwner
          url
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
