import React from 'react'
import bg from '../assets/bg.webp'
import { motion } from 'framer-motion'
function Login() {
  return (
    <div className='relative min-h-screen'>
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <div className='relative z-10 text-white pt-[25vh] w-[90%] min-h-screen flex flex-col justify-start items-start gap-[4vh] m-auto'>
        <div className="w-full max-w-md mx-auto bg-black/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-2xl">

          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#fed500]">
              Welcome Back
            </h1>

            <p className="text-gray-400 mt-2 text-sm sm:text-base">
              Login to your account
            </p>
          </div>

          <form className="space-y-5">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"/>

            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
            />

            <div className="flex justify-end">
              <button
                type="button"
                className="text-xs text-gray-400 hover:text-[#FFD700]"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-sm rounded-xl bg-[#fed500] text-black font-semibold hover:bg-yellow-200 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-6">
            Don't have an account?{" "}
            <span className="text-[#fed500] cursor-pointer hover:text-yellow-200">
              Sign Up
            </span>
          </p>

        </div>
      </div>
    </div>
  )
}
export default Login;