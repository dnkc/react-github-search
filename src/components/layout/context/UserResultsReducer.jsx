import React from "react";
import { useEffect, useReducer } from "react";

import Spinner from "../Spinner";
import UserItem from "../../../users/UserItem";
import githubReducer from "./github/GithubReducer";

const GithubContext = () => {
  const initialState = {
    users: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const setLoading = () => {
    dispatch({ type: "SET_LOADING" });
  };

  const fetchUsers = async () => {
    setLoading();
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    dispatch({
      type: "GET_USERS",
      payload: data,
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!state.loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {state.users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default GithubContext;
