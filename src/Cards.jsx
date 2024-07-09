import React from 'react'

const Cards = ({movie}) => {
    if (!Array.isArray(movie)) return null;
  return (
    <div className="row">
      {movie.map((value, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4">
            <img src={value.Poster} className="card-img-top" alt={value.Title} />
            <div className="card-body">
              <h5 className="card-title">{value.Title}</h5>
              <p className="card-text">{value.Year}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cards
