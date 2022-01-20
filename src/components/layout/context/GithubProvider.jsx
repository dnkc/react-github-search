import React from "react";
import { useReducer, createContext } from "react";
import githubReducer from "./github/GithubReducer";

const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const data = await response.json();
    dispatch({ type: "GET_USERS", payload: data });
  };

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  return (
    <GithubContext.Provider value={{ ...state, dispatch, fetchUsers }}>
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
