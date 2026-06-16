 const API_KEY = "YOUR_API_KEY";

 export const fetchMovies = async (query) => {
   try {
     const response = await fetch(  
         `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );
        const data = await response.json();
        return data.results;
   } catch (error) {    
        console.error("Error fetching movies:", error);
        return [];
   }    
};
export const SearchMovies = async (query) => {
    try {
      const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`

        );
        const data = await response.json();
        return data.results;
    }
        catch (error) {
            console.error("Error searching movies:", error);
            return [];
        }
};