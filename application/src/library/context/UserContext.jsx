import { createContext, useContext, useState } from "react";
import { useQuery } from "@apollo/client";
import GET_USER from "../query/user";

const context = createContext();

export default function UserContextProvider({ children }) {
  let user;

  const { data, error } = useQuery(GET_USER);

  if (data) {
    user = data.user;
  }

  return <context.Provider value={{ user }}>{children}</context.Provider>;
}

export function GetUser() {
  return useContext(context);
}
