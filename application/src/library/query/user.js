import { gql } from "@apollo/client";

const GET_USER = gql`
  query {
    user(login: "TinTinWinata") {
      login
      name
      bio
      avatarUrl(size: 50)
      company
      email
    }
  }
`;

export default GET_USER;
