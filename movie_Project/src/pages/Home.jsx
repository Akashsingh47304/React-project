import MovieCard from "../components/MovieCard" 
import {useState} from "react"
function Home(){
    const [searchQuery, setSearchQuery] = useState("")
    const movies = [
        { id: 1, title: "Inception", description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.", rating: 8.8, releaseDate: "2010", url: "https://picsum.photos/300/400" },
        { id: 2, title: "The Dark Knight", description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.", rating: 9.0, releaseDate: "2008", url: "https://picsum.photos/300/400" },
        { id: 3, title: "Interstellar", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.", rating: 8.6, releaseDate: "2014", url: "https://picsum.photos/300/400" },
        { id: 4, title: "The Matrix", description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.", rating: 8.0, releaseDate: "1999", url: "https://picsum.photos/300/400" },
    ]
    const handleSearch = (e)=>{
          e.preventDefault();
        alert("Search for: " + searchQuery)
    }
    return <div className="home min-h-screen bg-gray-900 text-white ">
        <form  onSubmit={handleSearch} className="search-form justify-center flex pt-3 ">
            <input
        
             type="text"
             placeholder="Search movies..."
              className="
        bg-gray-800
        text-white
        border border-gray-600
        rounded-lg
        px-4 py-2
        shadow-lg
        focus:outline-none
        focus:ring-2
        focus:ring-blue-500
        focus:border-blue-500
        w-80
    " 
              value={searchQuery}
              onChange={(e)=>setSearchQuery(e.target.value)}
              />
        <button type="submit"   
          className="
        ml-2
        px-4 py-2
        bg-red-600
        rounded-lg
        shadow-lg
        hover:bg-green-600
        transition
    ">
            Search</button>
        </form>
        <div className="movie-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
            {movies.map((movie)=>
            (
                movie.title.toLowerCase().includes(searchQuery.toLowerCase()) && (
                    <MovieCard movie ={movie} key={movie.id} /> 
                )
              ) ) }
             </div>

    </div>

}
export default Home