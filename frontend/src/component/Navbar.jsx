import { NavLink } from "react-router-dom"
import { motion } from 'framer-motion'
import logo from '../assets/LogoWW.webp'
function Navbar() {
  return (
    <>
      <motion.nav
        initial={{
          y: -50,
          opacity: 0
        }}
        animate={{
          y: 0,
          opacity: 1
        }}
        transition={{
          duration: 2,
          ease: 'anticipate'
        }}
        className="fixed top-0 left-0 w-[90%] z-50 mx-[5%] my-6 backdrop-blur-md bg-black/20 border-[0.2vh] border-white/20 rounded-full shadow-lg shadow-black/30">
        <div className="w-full flex items-center justify-center px-3 py-3">
          <div className="w-full h-full pl-[5%] flex justify-start items-center">
            <img className="w-18" src={logo} alt="Logo" />
          </div>
          <div className="w-full h-full flex justify-between items-center">
            <div className="flex items-center gap-2 font-button text-sm bg-black/20 border-[0.2vh] w-fit border-white/20 rounded-full px-2 py-2">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border-[0.2vh] border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>Home</NavLink>
              <NavLink
                to="/recommend"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border-[0.2vh] border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>Recommend</NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border-[0.2vh] border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>About</NavLink>
            </div>
            <div className="flex items-center gap-2 font-button text-sm bg-black/20 border-[0.2vh] w-fit border-white/20 rounded-full px-2 py-2">
              <NavLink
                to="/signup"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border-[0.2vh] border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>Signup</NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border-[0.2vh] border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>Login</NavLink>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
export default Navbar;