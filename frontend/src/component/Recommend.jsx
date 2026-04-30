import { motion, AnimatePresence } from 'framer-motion'
import { useLocation } from "react-router-dom";
import bg from '../assets/bg.jpeg'
import r1 from '../assets/roboF1.png'
import Particles from './Particles.jsx'
import { useState, useEffect } from "react";
function Recommend() {
  const [description, setDescription] = useState("");
  const [language, setlanguage] = useState("");
  const [industry, setindustry] = useState("");
  const [index, setIndex] = useState(0);
  const [movies, setMovies] = useState([]);
  const { state } = useLocation();
  useEffect(() => {
    if (state) {
      setDescription(state.description);
      setlanguage(state.language);
      setindustry(state.industry);
    }
  }, [state]);
  const handleUserInput = async (e) => {
    e.preventDefault()
    if (!description || !language || !industry) {
      alert("fill al the fields");
      return;
    }
    try {
      setAiMessage("🤖 Thinking...");
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://watchwise-ta6m.onrender.com";
      const res = await fetch(`${backendUrl}/api/userQuery`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          description,
          language,
          industry
        })
      })
      const data = await res.json();
      console.log("Response data:", data);

      if (data.movies && data.movies.length > 0) {
        setMovies(data.movies);
        setAiMessage("Here are your recommendations! 🎬");
      } else {
        setMovies([]);
        setAiMessage("Sorry, I couldn't find any matching movies. 😕");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setAiMessage("Error connecting to server. ❌");
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % suggestionsData.length);
    }, 12000);

    return () => clearInterval(interval);
  }, []);
  const suggestionsData = [
    {
      description: "Had a long tiring day, just want something light and feel-good to relax.",
      movies: ["The Intern", "Julie & Julia", "Little Miss Sunshine"]
    },
    {
      description: "Feeling a bit low today, need something emotional but meaningful.",
      movies: ["The Pursuit of Happyness", "A Beautiful Mind", "Good Will Hunting"]
    },
    {
      description: "In the mood for something thrilling and mind-bending, not too predictable.",
      movies: ["Inception", "Shutter Island", "Fight Club"]
    },
    {
      description: "Just want a fun comedy to watch with friends, nothing too serious.",
      movies: ["Superbad", "Hangover", "21 Jump Street"]
    },
    {
      description: "Looking for a romantic movie with a happy ending, something heartwarming.",
      movies: ["Before Sunrise", "Notting Hill", "La La Land"]
    }
  ];
  const [aiMessage, setAiMessage] = useState(
    "Hi, tell me your mood, I’ll find the perfect movie"
  );
  return (
    <>
      <div className="relative min-h-screen pb-[1vh]">
        <motion.div
          animate={{ opacity: [1, 1, 0.8, 0.6, 1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className="relative z-10 text-white pt-[20vh] w-[90%] min-h-screen flex flex-col justify-start items-start gap-[4vh] m-auto">
          <Particles />
          <div className="w-full h-full text-center">
            <h1 className="text-2xl font-heading">Find Your Perfect Movie in Seconds</h1>
            <p className="text-[2.55vh] font-para">Describe your mood and let AI do the magic</p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <motion.h1
              animate={{
                opacity: [0, 1, 0.1, 1, 0.1, 1, 1, 1, 1, 0, 0, 0,]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-xs bg-white/30 rounded-t-2xl rounded-r-2xl text-black font-para px-3 py-2 w-[10%] absolute top-[21vh] left-[11vw] z-10">{aiMessage}</motion.h1>
            <div className="w-[40vh] h-[40vh] flex justify-center items-center flex-col absolute top-[25vh] left-[-2vw] rounded-2xl bg-black/20">
              <motion.img
                animate={{
                  y: [0, -15, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'anticipate'
                }}
                src={r1} className="w-[30vh] h-[33vh]" />
              <motion.div
                animate={{
                  scaleX: [1, 0.7, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'anticipate'
                }}
                className="w-[60%] h-[2vh] rounded-[100%] bg-white blur-lg">
              </motion.div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}  // 🔥 VERY IMPORTANT
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 1 }}
                className="w-auto h-auto px-5 py-4 border absolute top-[25vh] left-[70vw] rounded-2xl bg-black/80 backdrop-blur-xl"
              >
                <div className="flex flex-col gap-2">
                  <p className="font-heading text-xl text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-red-500">
                    Try prompt :
                  </p>
                  <p className="text-sm text-gray-300">
                    {suggestionsData[index].description}
                  </p>
                  <p className="font-heading text-lg text-transparent bg-clip-text bg-linear-to-r from-purple-500 to-red-500">
                    Result :
                  </p>
                  {suggestionsData[index].movies.map((ele, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.3 }}
                      className="text-yellow-200 text-sm"
                    >
                      ✨ {ele}
                    </motion.p>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            <form
              className="flex justify-center items-center flex-col border w-[50%] gap-[4vh] py-[5vh] bg-black/30 backdrop-blur-3xl rounded-2xl"
              action="">
              <textarea
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="text-sm border w-[80%] h-[10vh] bg-black/30 backdrop-blur-3xl rounded-lg px-[1vw] py-[1vh] hover:border-yellow-700 focus:outline-none focus:ring-0" placeholder="Describe what you feel like watching..." />
              <input
                value={language}
                onChange={(e) => setlanguage(e.target.value)}
                type="text" className="text-sm border w-[80%] bg-black/30 backdrop-blur-3xl rounded-lg px-[1vw] py-[1vh] hover:border-yellow-700 focus:outline-none focus:ring-0" placeholder="Language.. Hindi, English, Korean, Japanese, Spanish" />
              <input
                value={industry}
                onChange={(e) => setindustry(e.target.value)}
                type="text" className="text-sm border w-[80%] bg-black/30 backdrop-blur-3xl rounded-lg px-[1vw] py-[1vh] hover:border-yellow-700 focus:outline-none focus:ring-0" placeholder="Industry.. Bollywood, Hollywood, Tollywood" />
              <button onClick={handleUserInput} className="border py-[2vh] px-[4vw] rounded-xl bg-linear-to-r from-purple-500/30 to-red-500/30 hover:from-purple-500 hover:to-red-500 transition-all ease-in duration-200 font-button text-sm active:scale-95 hover:scale-105">
                Get Suggestion
              </button>
            </form>
          </div>
          <div className='w-full px-6 py-6 border rounded-2xl bg-black/30'>
            <div className="flex justify-around items-center gap-3">
              {movies.length === 0 ? (
                <div className="flex w-full h-full justify-around items-center text-center py-10 border rounded-xl bg-black/20">
                  ✨ Your recommendations will appear here
                </div>
              ) : (
                movies.map((movie, i) => (
                  <motion.div
                    key={movie.imdbID || i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex flex-col w-auto h-full bg-black/40 border rounded-2xl overflow-hidden shadow-lg"
                  >
                    <div className="relative h-72">
                      <img
                        src={movie.Poster !== "N/A" ? movie.Poster : ""}
                        alt={movie.Title}
                        className="w-full h-full object-cover"
                      />
                      {movie.Title !== "N/A" && (
                        <div className="absolute top-0 right-0 h-full w-full opacity-0 hover:opacity-100 transition-all duration-200 bg-black/90 border-white text-white font-heading px-1 rounded flex flex-col justify-center gap-4">
                          <p>⭐ {movie.Title}</p>
                          <span className='text-sm'>Rating : <span className='text-xs font-para'>{movie.imdbRating}</span> </span>
                          <span className='text-sm'>Awards : <span className='text-xs font-para'>{movie.Awards}</span> </span>
                          <span className='text-sm'>Score : <span className='text-xs font-para'>{movie.Metascore} </span></span>
                          <span className='text-sm'>Language : <span className='text-xs font-para'>{movie.Language}</span> </span>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      <motion.div />
    </>
  );
}
export default Recommend;