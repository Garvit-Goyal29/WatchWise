import bg from '../assets/bg.jpeg';
import { NavLink } from 'react-router-dom';
import { motion } from "framer-motion";
import MixedMovies from './MixedMovie';
import Particles from './Particles.jsx'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import './Home.css'
function Home() {
  // const {ref:refRside, inView:VisibleRside} = useInView({
  //   threshold:0.15
  // })
  const movieImages = [
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", // The dard
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", // Joker
    "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg", // ddlj
    "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", // Avengers
    "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", // Spider-Man
    "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"  // Titanic
    // "https://m.media-amazon.com/images/M/MV5BMjYyOTdmYT…WJlZjYtZmJkNDI5MmNlNjMyXkEyXkFqcGc@._V1_SX300.jpg", //chak de india
  ];
  return (
    <div className='relative min-h-screen'>
      <motion.div
        animate={{ opacity: [1, 1, 0.8, 0.6, 1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className="relative z-10 text-white pt-[20vh] w-[90%] min-h-screen flex flex-col justify-center items-start m-auto">
        <Particles />
        {/* Hero Section */}
        <div className='flex w-full h-full justify-center items-center gap-[1vh] overflow-hidden'>
          {/* Hero Section left-side */}
          <div className='w-[70%] h-full flex flex-col justify-center gap-[5vh] items-center py-[3vh]'>
            {/* Heading */}
            <div>
              <motion.h1
                initial={{
                  opacity: "0"
                }}
                animate={{
                  opacity: "100%"
                }}
                transition={{
                  duration: 2,
                  delay: 0.5
                }}
                className="font-heading text-4xl lg:text-5xl">
                Watch What You Feel!
              </motion.h1>
              <motion.p
                initial={{
                  opacity: "0"
                }}
                animate={{
                  opacity: "100%"
                }}
                transition={{
                  duration: 2,
                  delay: 0.5
                }}
                className="font-para text-[2vh] text-gray-400 max-w-xl text-center">
                Let AI recommend the perfect movie for you Or Browse trending.
              </motion.p>
            </div>
            {/* Tag */}
            <div className="flex gap-[1vw] flex-wrap font-para justify-center">
              <motion.span
                animate={{
                  opacity: [0, 1, 1, 1, 1, 1],
                  y: [-10, 0, 0, 0, 0, 0]
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}
                className="px-4 py-2 text-xs bg-pink-500/30 hover:bg-pink-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Romance
              </motion.span>
              <motion.span
                animate={{
                  opacity: [0, 0, 1, 1, 1, 1],
                  y: [-10, -10, 0, 0, 0, 0]
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}
                className="px-4 py-2 text-xs bg-yellow-500/30 hover:bg-yellow-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Comedy
              </motion.span>
              <motion.span
                animate={{
                  opacity: [0, 0, 0, 1, 1, 1],
                  y: [-10, -10, -10, 0, 0, 0]
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}
                className="px-4 py-2 text-xs bg-purple-500/30 hover:bg-purple-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Thriller
              </motion.span>
              <motion.span
                animate={{
                  opacity: [0, 0, 0, 0, 1, 1],
                  y: [-10, -10, -10, 0, 0, 0]
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}
                className="px-4 py-2 text-xs bg-red-500/30 hover:bg-red-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Action
              </motion.span>
              <motion.span
                animate={{
                  opacity: [0, 0, 0, 0, 0, 1],
                  y: [-10, -10, -10, -10, 0, 0]
                }}
                transition={{
                  duration: 1,
                  delay: 1
                }}
                className="px-4 py-2 text-xs bg-blue-500/30 hover:bg-blue-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Sci-Fi
              </motion.span>
            </div>
            {/* Recommend refer box */}
            <motion.div
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 1.8,
                duration: 1
              }}
              className='flex flex-col border rounded-2xl justify-evenly items-center w-[40%] h-[28vh] bg-white/10'>
              <div className='text-center'>
                <h1 className='font-heading text-xl'>Get Recommendation </h1>
                <p className='font-para text-[1.7vh]'>✨ AI picks movies for your mood.</p>
              </div>
              <NavLink to='/recommend'
                className="px-6 py-3 rounded-full text-white text-sm border bg-linear-to-r from-purple-700/30 to-red-400/30 hover:from-purple-700 hover:to-red-400 font-button transition-all ease-in duration-300"
              >Try AI Suggestion
              </NavLink>
            </motion.div>
            {/* Proof element */}
            <div className='w-full h-full flex gap-[1vh]'>
              <motion.p
                animate={{
                  opacity: [0, 1, 1, 1],
                  y: [-10, 0, 0, 0]
                }}
                transition={{
                  delay: 2,
                  duration: 1
                }}
                className="px-3 py-1 text-sm w-[13vw] bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white">🎥 10,000+ Movies</motion.p>
              <motion.p
                animate={{
                  opacity: [0, 0, 1, 1],
                  y: [-10, -10, 0, 0]
                }}
                transition={{
                  delay: 2,
                  duration: 1
                }}
                className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white">🤖 AI Powered Suggestions</motion.p>
              <motion.p
                animate={{
                  opacity: [0, 0, 0, 1],
                  y: [-10, -10, -10, 0]
                }}
                transition={{
                  delay: 2,
                  duration: 1
                }}
                className="px-3 py-1 text-sm bg-white/10 border border-white/20 rounded-full backdrop-blur-md text-white">🌍 Multi-language Support in counting animation</motion.p>
            </div>
          </div>
          {/* Hero Section right-side */}
          <motion.div // ref={refRside}
            initial={{
              opacity: 0,
              scale: 0.5,
              y: 200
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{
              duration: 0.1,
              delay: 3
            }}
            // className={`rs ${VisibleRside?"showRS":""} w-[30%] h-[78vh] overflow-hidden relative border border-white/50 rounded-2xl`}
            className={`rs w-[30%] h-[78vh] overflow-hidden relative border border-white/50 rounded-2xl`}
          >
            <motion.div
              animate={{
                opacity: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
              }}
              transition={{
                duration: 12,
                repeat: Infinity
              }}
              className='absolute inset-2'
            >
              <img className='w-full h-full rounded-2xl' src={movieImages[0]} alt="" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity
              }}
              className='absolute inset-2'
            >
              <img className='w-full h-full rounded-2xl' src={movieImages[1]} alt="" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity
              }}
              className='absolute inset-2'
            >
              <img className='w-full h-full rounded-2xl' src={movieImages[2]} alt="" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity
              }}
              className='absolute inset-2'
            >
              <img className='w-full h-full rounded-2xl' src={movieImages[3]} alt="" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity
              }}
              className='absolute inset-2'
            >
              <img className='w-full h-full rounded-2xl' src={movieImages[4]} alt="" />
            </motion.div>

            <motion.div
              animate={{
                opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0]
              }}
              transition={{
                duration: 12,
                repeat: Infinity
              }}
              className='absolute inset-2'
            >
              <img className='h-full rounded-2xl' src={movieImages[5]} alt="" />
            </motion.div>
          </motion.div>
        </div>
        {/* Movie showcase section */}
        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 3.5
          }}
          className='w-full h-full m-auto'>
          <MixedMovies />
        </motion.div>
        {/* footer */}
      </div>
      <footer className="w-full border-t border-white/30 bg-black/40 backdrop-blur-xl text-white px-10 py-2">
        <div className="flex flex-col md:flex-row justify-between">
          {/* logo */}
          <div className='w-1/3 flex flex-col items-center'>
            <h2 className="text-xl font-heading">WatchWise</h2>
            <p className="text-gray-400 text-sm mt-2 font-para">
              Watch what you feel.
            </p>
          </div>

          {/* Links */}
          <div className="w-1/3 flex flex-col gap-2 text-sm font-para items-center">
            <p className="font-semibold text-xl">Quick Links</p>
            <a href="/" className="hover:text-blue-500">Home</a>
            <a href="/recommend" className="hover:text-blue-500">Recommend</a>
            <a href="/about" className="hover:text-blue-500">About</a>
          </div>

          {/* Social */}
          <div className="w-1/3 flex flex-col gap-2 text-sm font-para items-center">
            <p className="font-semibold text-xl">Connect</p>
            <div className="flex flex-col gap-2 text-xl">
              <a href=""><FaLinkedin className="hover:text-blue-400" /></a>
              <a href=""><FaGithub className="hover:text-purple-400" /></a>
              <a href=""><FaInstagram className="hover:text-pink-400" /></a>
            </div>
          </div>

        </div>
        {/* Bottom */}
        <div className="mt-8 text-center text-xs text-gray-500 space-y-1 border-t border-white/30 py-1">
          <p>© {new Date().getFullYear()} WatchWise · Built with ❤️ by <a href="">Garv</a></p>
          <p>Powered by <a href="">OMDB</a> API & This product uses the <a href="">OMDB</a> API but is not endorsed or certified by <a href="">OMDB</a></p>
        </div>
      </footer>
      </div>
  );
}

export default Home;