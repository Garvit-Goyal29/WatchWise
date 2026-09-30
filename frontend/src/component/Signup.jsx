import React from 'react'
import bg from '../assets/bg.webp'
import { useState } from 'react'
import signimg from '../assets/signupImage2.png'
import { motion } from 'framer-motion'
function Singup() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [cpass, setcpass] = useState("");
  async function handleSignUp(e) {
    e.preventDefault();
    if(!name || !email || !pass || !cpass){
      alert("Enter complete details please")
      return
    }
    if(pass !== cpass){
      alert("password not matched!")
      return
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/signup`,{
      headers:{
        'Content-Type':'application/json'
      },
      method:'POST',
      body:JSON.stringify({
        name,
        email,
        pass,
      })
    })
    const data = await res.json();
    if(data.success){
      window.location.href = '/'
    } else {
      alert(data.error)
    }
  }
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

            <form onSubmit={handleSignUp} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e)=>{setname(e.target.value)}}
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <input
                type="email"
                placeholder="Email Address"
                onChange={(e)=>{setemail(e.target.value)}}
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <input
                type="password"
                placeholder="Password"
                onChange={(e)=>{setpass(e.target.value)}}
                className="w-full px-4 py-3 text-sm rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[#fed500]"
              />

              <input
                type="password"
                placeholder="Confirm Password"
                onChange={(e)=>{setcpass(e.target.value)}}
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
              <a href='/login' className="text-[#fed500] cursor-pointer hover:text-yellow-200">
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