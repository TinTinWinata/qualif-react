import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Favorite from "./page/favorite/favorite";
import Detail from "./page/detail/detail";
import Home from "./page/home/home";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  gql,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

import React, { createContext, useState } from "react";
import UserContextProvider from "./library/context/UserContext";
import { ThemeContext } from "@emotion/react";
import { THEME } from "./library/context/ThemeContext";
import Navbar from "./components/navbar";
import Search from "./page/search/search";

// require("dotenv").config();

function App() {
  const [currTheme, setCurrTheme] = useState(THEME.dark);

  const apiToken = process.env.REACT_APP_GITHUB_API_TOKEN;
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${apiToken}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return (
    <React.Fragment>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <ThemeContext.Provider value={currTheme}>
            <UserContextProvider>
              <Navbar></Navbar>
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/favorite" element={<Favorite></Favorite>}></Route>
                <Route
                  path="/search-repository"
                  element={<Search></Search>}
                ></Route>
                <Route path="/detail/:id" element={<Detail></Detail>}></Route>
              </Routes>
            </UserContextProvider>
          </ThemeContext.Provider>
        </ApolloProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
