import React from "react";
import UserResults from "../users/UserResults";
import UserResultsReducer from "../components/layout/context/UserResultsReducer";
import UserSearch from "../users/UserSearch";

const Home = () => {
  return (
    <>
      <UserSearch />
      <UserResultsReducer />
    </>
  );
};

export default Home;
