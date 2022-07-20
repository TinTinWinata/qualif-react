import styled from "@emotion/styled";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../library/context/ThemeContext";

export default function Search() {
  const { currTheme } = useTheme();
  const navigate = useNavigate();

  const StyledButton = styled("button")`
    margin-top: 20px;
    background-color: ${currTheme.foreground};
    color: ${currTheme.backdrop};
    padding: 5px;
    border-radius: 15px;
  `;

  const Container = styled("div")`
    position: absolute;
    width: 40%;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
  `;

  const StyledLabel = styled("label")`
    margin-top: 2px;
  `;

  const StyledInput = styled("input")`
    color: ${currTheme.inputColor};
    border-radius: 10px;
    padding: 5px 15px;
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    const repo = e.target.repo.value;
    const username = "TinTinWinata";
    navigate("/detail/" + username + "-" + repo);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <div className="w-full">
            <StyledLabel htmlFor="">Repository Name</StyledLabel>
            <StyledInput
              placeholder="CHello"
              name="repo"
              className="w-full"
              type="text"
            />
          </div>

          <StyledButton type="submit">Submit</StyledButton>
        </div>
      </form>
    </Container>
  );
}
