import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [repo, setRepo] = useState();

  useEffect(() => {
    const stripIdx = id.indexOf("-");
    const len = id.length;
    const owner = id.substring(0, stripIdx);
    const repoName = id.substring(stripIdx + 1, len);

    const repo = { owner: owner, repoName: repoName };

    return () => {};
  }, []);

  return <div>detail</div>;
}
