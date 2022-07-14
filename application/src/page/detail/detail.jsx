import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEARCH from "../../library/query/search";
import Main from "./main";
import Profile from "./profile";

export default function Detail() {
  const Container = styled("div")`
    margin: 40px;
  `;

  const { id } = useParams();

  const [image, setImage] = useState();

  useEffect(() => {
    const stripIdx = id.indexOf("-");
    const len = id.length;
    const repoName = id.substring(stripIdx + 1, len);

    const url = `https://api.unsplash.com/search/photos/?query=${repoName}&client_id=${process.env.REACT_APP_UNSPLASH_API_TOKEN}`;

    axios.get(url).then((res) => {
      console.log(res.data);
      if (res.data.total === 0) setImage("https://picsum.photos/200");
      else setImage(res.data.results[0].urls.regular);
    });

    return () => {};
  }, []);

  const stripIdx = id.indexOf("-");
  const len = id.length;
  const owner = id.substring(0, stripIdx);
  const repoName = id.substring(stripIdx + 1, len);

  const OPTIONS = {
    variables: {
      name: repoName,
      owner: owner,
    },
  };

  const { loading, data } = useQuery(SEARCH, OPTIONS);

  if (loading) return <div></div>;

  return (
    <Container>
      <Profile props={data.repository.owner}></Profile>
      <Main props={data.repository} image={image}></Main>
    </Container>
  );
}
