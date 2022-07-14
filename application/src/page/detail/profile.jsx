import styled from "@emotion/styled";
import React from "react";
import { useTheme } from "../../library/context/ThemeContext";
import MEDIA_QUERY from "../../library/mediaquery";

export default function Profile({ props }) {
  const { currTheme } = useTheme();

  const StyledImage = styled("img")`
    max-width: 30px;
    max-height: 30px;
    border-radius: 50%;
  `;
  const Container = styled("div")`
    display: flex;
  `;
  const StyledLogin = styled("p")`
    margin-left: 10px;
    font-size: 0.7em;
  `;

  const StyledDetail = styled("p")`
    margin-left: 10px;
    font-size: 0.5em;
  `;

  const StyledButton = styled("button")`
    padding: 0px 7px;
    font-size: 0.5em;
    border-radius: 10%;
    margin-left: 10px;
    background-color: ${currTheme.foreground};
    color: ${currTheme.backdrop};
    &:hover {
      background-color: ${currTheme.detail};
    }
  `;

  const FlexContainer = styled("div")`
    display: flex;
    width: 100%;
    ${MEDIA_QUERY[1]} {
      margin-left: 5px;
      justify-content: space-between;
    }
  `;

  return (
    <>
      <FlexContainer>
        <Container>
          <div className="flex">
            <StyledImage src={props.avatarUrl}></StyledImage>
            <div className="flex flex-col">
              <div className="flex">
                <StyledLogin>{props.login}</StyledLogin>
              </div>
              <StyledDetail style={{ color: currTheme.detail }}>
                {props.url}
              </StyledDetail>
            </div>
          </div>
        </Container>
        {/* <StyledButton>Detail</StyledButton> */}
      </FlexContainer>
    </>
  );
}
