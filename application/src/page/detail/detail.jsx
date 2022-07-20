import { useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEARCH from "../../library/query/search";
import Main from "./main";
import NotFound from "./notfound";
import Profile from "./profile";

const RANDOM_QUOTE = 50;

export default function Detail() {
  const Container = styled("div")`
    margin: 40px;
  `;

  const { id } = useParams();

  const [image, setImage] = useState();
  const [quote, setQuote] = useState([
    { text: "I Love you so much", author: "TinTin Winata" },
  ]);

  useEffect(() => {
    const stripIdx = id.indexOf("-");
    const len = id.length;
    const repoName = id.substring(stripIdx + 1, len);

    const url = `https://api.unsplash.com/search/photos/?query=${repoName}&client_id=${process.env.REACT_APP_UNSPLASH_API_TOKEN}`;

    axios.get(url).then((res) => {
      if (res.data.total === 0) setImage("https://picsum.photos/500/500");
      else setImage(res.data.results[0].urls.regular);
    });

    axios.get("https://type.fit/api/quotes").then((response) => {
      const data = response.data;
      setQuote(data.slice(1, RANDOM_QUOTE));
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

  const { loading, error, data } = useQuery(SEARCH, OPTIONS);

  if (loading) return <div></div>;

  if (error) console.log(error);

  if (!data) return <NotFound></NotFound>;

  return (
    <Container>
      <Profile repo={data.repository} props={data.repository.owner}></Profile>
      <Main props={data.repository} image={image} quote={quote}></Main>
    </Container>
  );
}
