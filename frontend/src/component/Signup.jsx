import React from 'react'
import bg from '../assets/bg.webp'
import {motion} from 'framer-motion'
function Singup(){
  return (
    <div className='relative min-h-screen pb-[1vh]'>
      <motion.div
          animate={{ opacity: [1, 1, 0.8, 0.6, 1, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bg})` }}
        />
        <div className='relative z-10 text-white pt-[20vh] w-[90%] min-h-screen flex flex-col justify-start items-start gap-[4vh] m-auto'>

        </div>
    </div>
  )
}
export default Singup;