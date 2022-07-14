import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SEARCH from "../../library/query/search";

export default function Detail() {
  const { id } = useParams();
  const [repo, setRepo] = useState({ repoName: "", owner: "" });

  const OPTIONS = {
    variables: {
      name: repo.repoName,
      owner: repo.owner,
    },
  };

  const { data } = useQuery(SEARCH, OPTIONS);

  console.log(OPTIONS);

  console.log(data);
  // if (data) console.log(data);

  useEffect(() => {
    const stripIdx = id.indexOf("-");
    const len = id.length;
    const owner = id.substring(0, stripIdx);
    const repoName = id.substring(stripIdx + 1, len);

    const repo = { owner: owner, repoName: repoName };
    setRepo(repo);

    return () => {};
  }, []);

  return <div>detail</div>;
}
