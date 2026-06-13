import bg from '../assets/bg.webp';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import MixedMovies from './MixedMovie';
import Particles from './Particles.jsx'
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from 'react';
import './Home.css'

// Module-level flag: resets on page refresh, persists across SPA navigations
let hasPlayedIntro = false;

function Home() {
  const [hasAnimated, setHasAnimated] = useState(hasPlayedIntro);
  const [scrollLocked, setScrollLocked] = useState(!hasPlayedIntro);

  // Lock scroll on first load, unlock after animation ends
  useEffect(() => {
    if (!hasAnimated) {
      document.body.style.overflow = 'hidden';
      const timer = setTimeout(() => {
        document.body.style.overflow = '';
        setScrollLocked(false);
        hasPlayedIntro = true;
        setHasAnimated(true);
      }, 4500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = '';
      };
    }
  }, [hasAnimated]);

  // Helper: if already animated, skip delays/durations
  const d = (delay) => hasAnimated ? 0 : delay;
  const dur = (duration) => hasAnimated ? 0 : duration;

  const movieImages = [
    "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", // The dard
    "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", // Joker
    "https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg", // ddlj
    "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg", // Avengers
    "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg", // Spider-Man
    "https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg"  // Titanic
  ];
  const navigate = useNavigate()
  function romanceFunc() {
    navigate('/recommend', {
      state: {
        description: "Romance",
        language: "Hindi",
        industry: "Bollywood"
      }
    })
  }
  function comedyFunc() {
    navigate('/recommend', {
      state: {
        description: "Comedy",
        language: "Hindi",
        industry: "Bollywood"
      }
    })
  }
  function ThrillerFunc() {
    navigate('/recommend', {
      state: {
        description: "Thriller",
        language: "Hindi",
        industry: "Bollywood"
      }
    })
  }
  function SciFiFunc() {
    navigate('/recommend', {
      state: {
        description: "Sci-Fi",
        language: "English",
        industry: "Hollywood"
      }
    })
  }
  function ActionFunc() {
    navigate('/recommend', {
      state: {
        description: "Action",
        language: "English",
        industry: "Hollywood"
      }
    })
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='relative min-h-screen'>
      <div className="absolute inset-0 bg-cover bg-center bg-fixed" style={{ backgroundImage: `url(${bg})` }} />
      <div className="relative z-10 text-white pt-[20vh] w-[93%] min-h-screen flex flex-col justify-center items-start m-auto">
        <Particles />
        {/* Hero Section */}
        <div className='flex flex-col lg:flex-row w-full h-full justify-start items-center overflow-hidden'>
          {/* Hero Section left-side */}
          <div className='w-full lg:w-[70%] h-full flex flex-col justify-center gap-[5vh] items-center py-[3vh] lg:pr-[25%]'>
            {/* Heading */}
            <div>
              <motion.h1
                initial={{
                  opacity: hasAnimated ? 1 : 0,
                  y: hasAnimated ? 0 : -10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: dur(1.5),
                  delay: d(1)
                }}
                className="font-heading text-4xl lg:text-5xl text-center">
                Watch What You Feel!
              </motion.h1>
              <motion.p
                initial={{
                  opacity: hasAnimated ? 1 : 0,
                  y: hasAnimated ? 0 : -10
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: dur(1.5),
                  delay: d(1)
                }}
                className="font-para text-[2vh] text-gray-400 max-w-xl text-center">
                Let AI recommend the perfect movie for you Or Browse trending.
              </motion.p>
            </div>
            {/* Tag */}
            <div className="flex gap-[1vw] flex-wrap font-para justify-center">
              <motion.span
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 1, 1, 1, 1, 1],
                  y: [-10, 0, 0, 0, 0, 0]
                }}
                transition={{
                  duration: dur(1),
                  delay: d(1)
                }}
                onClick={romanceFunc}
                className="px-4 py-2 text-xs bg-pink-500/30 hover:bg-pink-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Romance
              </motion.span>
              <motion.span
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 1, 1, 1, 1],
                  y: [-10, -10, 0, 0, 0, 0]
                }}
                transition={{
                  duration: dur(1),
                  delay: d(1)
                }}
                onClick={comedyFunc}
                className="px-4 py-2 text-xs bg-yellow-500/30 hover:bg-yellow-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Comedy
              </motion.span>
              <motion.span
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 0, 1, 1, 1],
                  y: [-10, -10, -10, 0, 0, 0]
                }}
                transition={{
                  duration: dur(1),
                  delay: d(1)
                }}
                onClick={ThrillerFunc}
                className="px-4 py-2 text-xs bg-purple-500/30 hover:bg-purple-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Thriller
              </motion.span>
              <motion.span
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 0, 0, 1, 1],
                  y: [-10, -10, -10, 0, 0, 0]
                }}
                transition={{
                  duration: dur(1),
                  delay: d(1)
                }}
                onClick={ActionFunc}
                className="px-4 py-2 text-xs bg-red-500/30 hover:bg-red-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Action
              </motion.span>
              <motion.span
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 0, 0, 0, 1],
                  y: [-10, -10, -10, -10, 0, 0]
                }}
                transition={{
                  duration: dur(1),
                  delay: d(1)
                }} onClick={SciFiFunc}
                className="px-4 py-2 text-xs bg-blue-500/30 hover:bg-blue-500/80 cursor-pointer border border-white/20 rounded-full backdrop-blur-md text-white">
                Sci-Fi
              </motion.span>
            </div>
            {/* Recommend refer box */}
            <motion.div
              initial={{
                opacity: hasAnimated ? 1 : 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: d(1.8),
                duration: dur(1)
              }}
              className='flex flex-col border border-white/30 rounded-2xl justify-evenly items-center w-[80%] lg:w-[30%] h-[25vh] bg-black/30 backdrop-blur-sm px-6 lg:px-36'>
              <div className='text-center'>
                <h1 className='font-heading text-xl'>Get Recommendation </h1>
                <p className='font-para text-[1.7vh]'>✨ AI picks movies for your mood.</p>
              </div>
              <NavLink to='/recommend'
                className="w-[15vw] max-sm:w-full text-center py-[1vh] rounded-full text-white text-sm border bg-linear-to-r from-purple-700/30 to-red-400/30 hover:from-purple-700 hover:to-red-400 font-button transition-all ease-in duration-300"
              >Try AI Suggestion
              </NavLink>
            </motion.div>
            {/* Proof element */}
            <div className='w-[90%] h-full flex gap-[5vh] justify-center'>
              <motion.p
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 1, 1],
                  y: [-10, -10, 0, 0]
                }}
                transition={{
                  delay: d(2),
                  duration: dur(1)
                }}
                className="py-[2vh] text-sm w-[40%] bg-black/40 border border-white/20 rounded-full backdrop-blur-xs text-white text-center">🤖  Intelligence</motion.p>
              <motion.p
                animate={hasAnimated ? { opacity: 1, y: 0 } : {
                  opacity: [0, 0, 0, 1],
                  y: [-10, -10, -10, 0]
                }}
                transition={{
                  delay: d(2),
                  duration: dur(1)
                }}
                className="py-[2vh] text-sm w-[40%] bg-black/40 border border-white/20 rounded-full backdrop-blur-xs text-white text-center">🌍 Languages</motion.p>
            </div>
          </div>
          {/* Hero Section right-side - hidden on mobile */}
          <motion.div
            initial={{
              opacity: hasAnimated ? 1 : 0,
              scale: hasAnimated ? 1 : 0.8,
              y: hasAnimated ? 0 : 150
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{
              duration: dur(0.1),
              delay: d(3)
            }}
            className={`rs hidden lg:block w-[28%] h-[78vh] overflow-hidden relative border border-white/50 rounded-2xl`}
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
            opacity: hasAnimated ? 1 : 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: dur(1),
            delay: d(3.5)
          }}
          className='w-full h-full m-auto'>
          <MixedMovies />
        </motion.div>
        {/* footer */}
      </div>
      <footer className="w-full border-t border-white/30 bg-black/40 backdrop-blur-xl text-white px-10 py-2">
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-0 py-4 md:py-0">
          <div className='w-full md:w-1/3 flex flex-col items-center'>
            <h2 className="text-xl font-heading">WatchWise</h2>
            <p className="text-gray-400 text-sm mt-2 font-para">
              Watch what you feel.
            </p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-2 text-sm font-para items-center">
            <p className="font-semibold text-xl">Quick Links</p>
            <Link onClick={scrollToTop} to="/" className="hover:text-blue-500">Home</Link>
            <Link to="/recommend" className="hover:text-blue-500">Recommend</Link>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-2 text-sm font-para items-center">
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