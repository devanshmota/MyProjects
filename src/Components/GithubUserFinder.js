import { useState } from "react";
import axios from 'axios';

export const GithubUserFinder = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const getUsers = async (event) => {
    event.preventDefault();
    const response = await axios(
      "https://api.github.com/search/users?q=" + search
    );

    setUsers(response.data.items);
  };

  // const submit = async (event) => {
  //   event.preventDefault();
  //   getUsers();
  // };

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <form onSubmit={getUsers}>
            <div className="row mt-5">
              <div className="col-sm-3"></div>
              <div className="col-sm-6">
                <div className="input-group">
                  <input
                    id="search"
                    value={search}
                    type="text"
                    className="form-control me-1"
                    placeholder="Search A Github User"
                    onChange={(event) => setSearch(event.target.value)}
                  />

                  <div className="input-group-append ms-1">
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-3"></div>
            </div>
          </form>

          {users.map((user, index) => {
            return (
              <div className="col-sm-3 mt-5" key={index}>
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
