import styled from "@emotion/styled";
import RepositoryList from "./repositoryList";

export default function Home() {
  const Container = styled("div")`
    margin-top: 15px;
  `;

  return (
    <>
      <Container>
        <RepositoryList></RepositoryList>
      </Container>
    </>
  );
}
