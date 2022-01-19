import React from "react";
import { useEffect, useState } from "react";
import Spinner from "../components/layout/Spinner";
import UserItem from "./UserItem";

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const GITHUB_URL = process.env.REACT_APP_GITHUB_API_URL;
  const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

  const fetchUsers = async () => {
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  } else {
    return <Spinner />;
  }
};

export default UserResults;
