import React from 'react'

export default function MovieCard({movie}) {
    function onFouriteClick() {
        alert("Added to favourite")
    }
  return (
   <div className="movie-card">
    <div className="movie-poster">
        <img src={movie.url} alt={movie.title} />
        <div className="movie-overlay">
            <button className ="favourite-btn" onClick={onFouriteClick}>
                🤍
            </button>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>Rating: {movie.rating}</p>
                <p>Release Date: {movie.releaseDate}</p>
            </div>
        </div>
    </div>
   </div>
  )
}
