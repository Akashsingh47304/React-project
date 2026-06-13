import MovieCard from "../components/MovieCard" 
function Home(){
    const movies = [
        { id: 1, title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: 8.8, releaseDate: "2010", url: "https://picsum.photos/300/400" },
        { id: 2, title: "The Dark Knight", description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", rating: 9.0, releaseDate: "2008", url: "https://picsum.photos/300/400" },
        { id: 3, title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", rating: 8.6, releaseDate: "2014", url: "https://picsum.photos/300/400" },
        { id: 4, title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", rating: 8.0, releaseDate: "1999", url: "https://picsum.photos/300/400" },
    ]
    return <div className="home">
        <div className="movie-grid">
            {movies.map((movie)=>
            (
                <MovieCard movie ={movie} key={movie.id} /> 
              ) ) }
             </div>
             
    </div>

}