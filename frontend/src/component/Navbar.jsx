import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion'
import logo from '../assets/LogoWW.png'
function Navbar() {
  return (
    <>
      <motion.nav
      initial={{
        y:-50,
        opacity:0
      }}
      animate={{
        y:0,
        opacity:1
      }}
      transition={{
        duration:1,
        ease:'anticipate'
      }}
      className="fixed top-0 left-0 w-[90%] z-50 mx-[5%] my-6 backdrop-blur-md bg-black/10 border border-white/20 rounded-full shadow-lg shadow-black/30">
        <div className="w-full flex items-center justify-center px-3 py-3">
          <div className="w-[50%] h-full pl-[10%] flex justify-start items-center">
            <img className="w-18" src={logo} alt="Logo" />
          </div>
          <div className="w-[50%] h-full flex justify-end items-center">
            <div className="flex items-center gap-2 font-button text-sm bg-black/20 border w-fit border-white/20 rounded-full px-2 py-2">
              <NavLink
                to="/"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>Home</NavLink>
              <NavLink
                to="/recommend"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>Recommend</NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) => isActive ? "px-5 py-2 rounded-full text-white bg-black/20 border border-white/30 transition duration-300" : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition"}>About</NavLink>
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
export default Navbar;