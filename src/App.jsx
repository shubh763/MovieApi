import React, { useState } from "react";
import axios from "axios";
import Cards from "./Cards";

const App = () => {
  const [movie, setMovie] = useState([]);
  const [text, setText] = useState("");


  const getMovies = (e) => {
    e.preventDefault();
    axios
      .get(`http://www.omdbapi.com/?s=${text}&apikey=5b2e5ade`)
      .then((response) => {
        console.log(response);
        setMovie(response.data.Search || []);
      })
      .catch((error) => {
        console.log("Fetching error...", error);
        setMovie([]);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            OMDB MOVIES
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Subscription
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={getMovies}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        {Array.isArray(movie) && movie.length > 0 ? (
          <Cards movie={movie} />
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </>
  );
};

export default App;
