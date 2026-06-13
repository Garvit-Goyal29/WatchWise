import { NavLink } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import logo from '../assets/LogoWW.webp'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "px-5 py-2 rounded-full text-white bg-black/20 border-[0.2vh] border-white/30 transition duration-300"
      : "px-5 py-2 rounded-full text-gray-300 border border-transparent hover:text-white hover:bg-white/10 transition";

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
        <div className="w-full flex items-center justify-between px-3 py-3">
          {/* Logo */}
          <div className="pl-[5%] flex justify-start items-center">
            <img className="w-18 sm:w-14" src={logo} alt="Logo" />
          </div>

          {/* Desktop Nav Links - hidden on mobile */}
          <div className="hidden md:flex w-full justify-end gap-[19vw] items-center">
            <div className="flex items-center gap-2 font-button text-sm bg-black/20 border-[0.2vh] w-fit border-white/20 rounded-full px-2 py-2">
              <NavLink to="/" className={linkClass}>Home</NavLink>
              <NavLink to="/recommend" className={linkClass}>Recommend</NavLink>
              <NavLink to="/about" className={linkClass}>About</NavLink>
            </div>
            <div className="flex items-center gap-2 font-button text-sm bg-black/20 border-[0.2vh] w-fit border-white/20 rounded-full px-2 py-2">
              <NavLink to="/signup" className={linkClass}>Signup</NavLink>
              <NavLink to="/login" className={linkClass}>Login</NavLink>
            </div>
          </div>

          {/* Hamburger Button - visible on mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 pr-4 z-50"
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white rounded"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-24 left-[5%] w-[90%] z-40 md:hidden backdrop-blur-xl bg-black/70 border border-white/20 rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-3 font-button text-sm">
              <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkClass}>Home</NavLink>
              <NavLink to="/recommend" onClick={() => setMenuOpen(false)} className={linkClass}>Recommend</NavLink>
              <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkClass}>About</NavLink>
              <div className="w-full h-px bg-white/20 my-2" />
              <NavLink to="/signup" onClick={() => setMenuOpen(false)} className={linkClass}>Signup</NavLink>
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className={linkClass}>Login</NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
export default Navbar;