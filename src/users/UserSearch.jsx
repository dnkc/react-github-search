import React from "react";
import { useState, useReducer } from "react";

const UserSearch = () => {
  const [searchText, setSearchText] = useState("");
  const [state, dispatch] = useReducer();

  const { users } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText === "") {
      alert("Please enter something");
    } else {
      // @todo - search users
      setSearchText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 ">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-40 input input-lg text-black"
                placeholder="Search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-30 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-ghost btn-lg">Clear</button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
