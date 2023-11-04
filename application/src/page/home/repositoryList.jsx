import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import React, { createRef, useEffect, useState } from 'react';
import { useTheme } from '../../library/context/ThemeContext';
import MEDIA_QUERY from '../../library/mediaquery';
import REPOSITORY_LIST from '../../library/query/repositoryList';
import Card, {
  CardButton,
  CardDetail,
  CardName,
  CardTitleContainer,
} from './card';

export default function RepositoryList() {
  const searchRef = createRef();

  const [filtered, setFiltered] = useState([]);
  const [text, setText] = useState('');

  const { currTheme } = useTheme();

  const Container = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    gap: 30px;
    padding: 0px 30px;
    ${MEDIA_QUERY[1]} {
      flex-direction: column;
    }
  `;

  const StyledInput = styled('input')`
    color: ${currTheme.inputColor};
    border-radius: 20px;
    padding: 5px 10px;
    width: 30%;
    background-color: rgb(0, 0, 0, 0);
    border: 1px solid rgb(0, 0, 0, 0.1);
    ${MEDIA_QUERY[1]} {
      width: 100%;
      margin-top: 10px;
      font-size: 12px;
    }
  `;

  const StyledButton = styled('button')`
    margin-left: 10px;
    color: ${currTheme.background};
    padding: 0px 30px;
    border-radius: 30px;
    font-size: 10px;
    background-color: ${currTheme.foreground};
    font-weight: 500;
    ${MEDIA_QUERY[1]} {
      padding: 5px;
      margin-top: 10px;
    }
  `;

  const StyledSearchContainer = styled('form')`
    display: flex;
    justify-content: center;
    margin: 10px;
    width: 100%;
    ${MEDIA_QUERY[1]} {
      flex-direction: column;
      width: 50%;
      margin: 0 auto;
    }
  `;

  const { loading, error, data } = useQuery(REPOSITORY_LIST);

  function handleSearch(e) {
    e.preventDefault();
    setText(searchRef.current.value);
  }

  useEffect(() => {
    if (data) {
      const repositories = data.user.repositories.nodes;
      setFiltered(repositories);
    }
  }, [data]);

  if (loading) {
    return <div></div>;
  }
  if (error) {
    console.log(error);
  }

  return (
    <Container>
      <StyledSearchContainer onSubmit={handleSearch}>
        <StyledInput
          ref={searchRef}
          placeholder="Search Repository..."
          type="search"
        />
        <StyledButton>Submit</StyledButton>
      </StyledSearchContainer>
      {filtered
        .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
        .map((repo, index) => {
          return (
            <Card key={index}>
              <CardTitleContainer repo={repo}>
                <CardName>{repo.name}</CardName>
                <CardDetail>{repo.description}</CardDetail>
              </CardTitleContainer>
              <CardButton repo={repo}>Favorite</CardButton>
            </Card>
          );
        })}
    </Container>
  );
}
