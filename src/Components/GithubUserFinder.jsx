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

  return (
    <>
      <div className="container my-5">
        <div className="row mb-5">
          <div className="col-12">
            <form onSubmit={getUsers} className="mx-auto col-12 col-md-6">
              <div className="input-group">
                <input
                  id="search"
                  value={search}
                  type="text"
                  className="form-control me-1"
                  placeholder="Search A Github User"
                  onChange={(event) => setSearch(event.target.value)}
                  required
                />
                <div className="input-group-append ms-1">
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="row row-gap-4">

          {users.map((user, index) => {
            return (
              <div className="col-xl-3 col-lg-4 col-sm-6" key={index}>
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
