import React from "react";
import { useReducer, createContext } from "react";
import githubReducer from "./github/GithubReducer";

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    loading: false,
    user: {},
    repos: [],
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;

// const fetchUsers = async () => {
//   setLoading();
//   const response = await fetch(`${GITHUB_URL}/users`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   const data = await response.json();
//   dispatch({ type: "GET_USERS", payload: data });
// };

// const searchUsers = async (text) => {
//   setLoading();
//   const params = new URLSearchParams({
//     q: text,
//   });
//   const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   const { items } = await response.json();
//   dispatch({ type: "GET_USERS", payload: items });
// };

// // get a single user
// const getUser = async (login) => {
//   setLoading();

//   const response = await fetch(`${GITHUB_URL}/users/${login}`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     dispatch({ type: "GET_USER", payload: data });
//   }
// };
// // get a single users repos
// const getUserRepos = async (login) => {
//   setLoading();

//   const response = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
//     headers: {
//       Authorization: `token ${GITHUB_TOKEN}`,
//       "Content-Type": "application/json",
//       Accept: "application/json",
//     },
//   });
//   if (response.status === 404) {
//     window.location = "/notfound";
//   } else {
//     const data = await response.json();
//     dispatch({ type: "GET_REPOS", payload: data });
//   }
// };

// const setLoading = () => {
//   dispatch({ type: "SET_LOADING" });
// };

// const clearUsers = () => {
//   dispatch({ type: "CLEAR_USERS" });
// };
