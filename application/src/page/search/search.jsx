import styled from "@emotion/styled";
import React from "react";

const StyledButton = styled("button")`
`;

export default function Search() {
  return (
    <div>
      <label htmlFor="">Github Username</label>
      <input type="text" />

      <label htmlFor="">Repository Name</label>
      <input type="text" />

      <StyledButton>Submit</StyledButton>
    </div>
  );
}
