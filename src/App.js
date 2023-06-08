import React, { useState } from "react";
import "./App.css";

const UseEffectAPI = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(
      "https://api.github.com/search/users?q=" + search
    );
    const data = await response.json();
    setUsers(data.items);
  };

  const submit = async (event) => {
    event.preventDefault();
    getUsers();
  };

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <form onSubmit={submit}>
            <div className="row mt-5">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="input-group">
                  <input
                    id="search"
                    value={search}
                    type="text"
                    className="form-control"
                    placeholder="Search A Github User"
                    onChange={(event) => setSearch(event.target.value)}
                  />

                  <div className="input-group-append">
                    <button
                      className="btn btn-primary"
                      type="button"
                      onClick={getUsers}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </form>

          {users.map((user) => {
            return (
              <div className="col-sm-3 mt-5">
                <div className="card">
                  <img
                    src={user.avatar_url}
                    className="card-img-top"
                    alt="img"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{user.login}</h5>
                    <a href={user.html_url} className="btn btn-primary">
                      Check Profile
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <br />
    </>
  );
};

export function App() {
  return <UseEffectAPI />;
}
