import React from 'react'

export default function MovieCard({movie}) {
    function onFouriteClick() {
        alert("Added to favourite")
    }
  return (
  <div className="movie-card overflow-hidden rounded-lg">
  <div className="movie-poster relative ">
    <img
      src={movie.url}
      alt={movie.title}
      className="w-full transition-transform duration-300 hover:scale-110"
    />

    <div className="movie-overlay">
      <button   className="absolute top-3 right-3 z-10 bg-black/60 text-white p-2 rounded-full hover:bg-red-500 transition"
      
      onClick={onFouriteClick}>
        🤍
      </button>

      <div className="movie-inf pt-7">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.rating}</p>
        <p>Release Date: {movie.releaseDate}</p>
      </div>
    </div>
  </div>
</div>
  )
}
