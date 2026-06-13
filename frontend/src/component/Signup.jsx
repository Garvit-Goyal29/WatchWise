import React from 'react'
import bg from '../assets/bg.webp'
import signimg from '../assets/signupImage2.png'
import { motion } from 'framer-motion'
function Singup() {
  return (
    <div className='relative min-h-screen'>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className='relative z-10 text-white pt-[20vh] sm:pt-[20vh] w-[93%] sm:w-[90%] min-h-screen flex flex-col justify-start items-center m-auto'>
        <div className="w-[95%] sm:w-[85%] h-auto sm:h-[75vh] flex justify-center">
          <div className="w-full sm:w-[68%] h-auto sm:h-[75vh] max-w-md bg-black/40 backdrop-blur-md border-t border-l border-b border-white/50 py-5 px-5 shadow-2xl rounded-xl sm:rounded-bl-xl sm:rounded-tl-xl sm:rounded-tr-none sm:rounded-br-none">
            <div className="text-center mb-6">
              <h1 className="text-3xl sm:text-4xl font-bold text-[#fed500]">
                WatchWise
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">
                Create your account
              </p>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <button
                type="submit"
                className="w-full py-3 text-sm rounded-xl bg-[#fed500] text-black font-semibold hover:bg-yellow-200 transition"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-6">
              Already have an account?{" "}
              <a href='' className="text-[#fed500] cursor-pointer hover:text-yellow-200">
                Login
              </a>
            </p>
          </div>
          {/* Side image - hidden on mobile */}
          <div className='hidden sm:block w-[32%] h-full border border-white rounded-br-xl rounded-tr-xl overflow-hidden'>
            <img src={signimg} alt="" className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Singup;