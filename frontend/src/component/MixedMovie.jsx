import { useEffect, useState } from "react";
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
function MixedMovies() {
  const [movies, setMovies] = useState([]);
  const queries = ["avengers", "war", "indian spy", "india"];
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const results = await Promise.all(
          queries.map(q =>
            fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${q}`)
              .then(res => res.json())
          )
        );
        let allMovies = [];
        results.forEach(data => {
          if (data.Search) {
            allMovies = [...allMovies, ...data.Search];
          }
        });
        const uniqueMovies = Array.from(
          new Map(allMovies.map(m => [m.imdbID, m])).values()
        );
        const shuffled = uniqueMovies.sort(() => 0.5 - Math.random());
        setMovies(shuffled.slice(0, 20));
        console.log(shuffled)
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="w-full my-[7vh] border border-white/50 rounded-2xl bg-black/20 backdrop-blur-md">
      <h2 className="text-white text-3xl font-heading text-center mt-[4vh]">For You 🎬</h2>
      <div className="grid grid-cols-5 gap-4 w-[80vw] m-auto  py-[5vh]">
        {movies.map(movie => (
          <div key={movie.imdbID} className="group relative rounded-xl overflow-hidden">
            {movie.Poster && movie.Poster !== "N/A" ? (
              <img
                src={movie.Poster}
                alt=""
                className="w-full h-60 object-cover rounded-xl group-hover:scale-105 transition-transform ease-in duration-200"
              />
            ) : (
              <div className="w-full h-60 bg-gray-800 flex items-center justify-center rounded-xl">
                <p className="text-white text-sm">Poster Not Available</p>
              </div>
            )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-center">
              <p className="text-xs font-para text-white">{movie.Title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MixedMovies;