import bg from '../assets/bg.webp'
import Particles from './Particles.jsx'
import { motion, useScroll, useTransform } from 'framer-motion';
function About() {
  const { scrollYProgress } = useScroll()
  const divFill1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const divFill2 = useTransform(scrollYProgress, [0.25, 0.50], [0, 1]);
  const divFill3 = useTransform(scrollYProgress, [0.50, 0.75], [0, 1]);
  const divFill4 = useTransform(scrollYProgress, [0.75, 1], [0, 1]);
  const y1 = useTransform(scrollYProgress, [0, 0.25], [80, 0]);
  const y2 = useTransform(scrollYProgress, [0.25, 0.5], [80, 0]);
  const y3 = useTransform(scrollYProgress, [0.5, 0.75], [80, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 1], [80, 0]);
  return (
    <>
      <div className='relative min-h-screen'>
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${bg})` }} />
        <div className="relative z-10 text-white pt-[20vh] sm:pt-[20vh] w-[93%] sm:w-[90%] min-h-screen flex flex-col justify-start items-start m-auto">
          <Particles />
          <div className='text-center w-full'>
            <h1 className='text-xl sm:text-2xl font-heading'>Stop Wasting Time Choosing Movies</h1>
            <h1 className='font-para text-sm sm:text-base'><span className='text-[#FED500] font-heading font-semibold'>WatchWise</span> AI finds the right movie for your mood.</h1>
          </div>
          <div className='w-full h-full flex flex-col justify-center items-center mt-[5vh] sm:mt-[5vh]'>
            <div className='flex flex-col justify-center items-center mb-[2vh]'>
              <h1 className='text-center text-3xl sm:text-5xl font-heading text-white'>How It Work</h1>
              <span className='text-xs font-para text-[#fed500]'>scroll to see step</span>
            </div>

            {/* Desktop timeline - hidden on mobile */}
            <div className='hidden md:flex w-[60vw] h-[80vh] justify-around items-center'>
              <div className='flex flex-col'>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <motion.div
                  style={{
                    opacity: divFill1,
                    y: y1
                  }}
                  className='h-[10vh] w-[24.5vw] border rounded-2xl text-sm flex justify-center items-center font-para bg-black/30 backdrop-blur-2xl text-white'>User enters mood, language, industry  </motion.div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <motion.div
                  style={{
                    opacity: divFill3,
                    y: y3
                  }}
                  className='h-[10vh] w-[24.5vw] border rounded-2xl text-sm flex justify-center items-center font-para bg-black/30 backdrop-blur-2xl text-white'>System fetches movie details (OMDB API)</motion.div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
              </div>
              <motion.div
                style={{
                  scaleY: scrollYProgress
                }}
                className='w-1 bg-[#fed500] h-full origin-top'></motion.div>
              <div className='flex flex-col'>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <motion.div
                  style={{
                    opacity: divFill2,
                    y: y2
                  }}
                  className='h-[10vh] w-[24.5vw] border rounded-2xl text-sm flex justify-center items-center font-para bg-black/30 backdrop-blur-2xl'>AI generates movie suggestions</motion.div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <div className='h-[10vh] w-[24.5vw] '></div>
                <motion.div
                  style={{
                    opacity: divFill4,
                    y: y4
                  }}
                  className='h-[10vh] w-[24.5vw] border rounded-2xl text-sm flex justify-center items-center font-para bg-black/30 backdrop-blur-2xl text-white'>Results displayed with posters & info</motion.div>
              </div>
            </div>

            {/* Mobile timeline - vertical cards */}
            <div className='flex md:hidden flex-col gap-6 w-full mt-6'>
              <motion.div
                style={{ opacity: divFill1, y: y1 }}
                className='w-full py-6 px-4 border rounded-2xl text-sm flex items-center gap-3 font-para bg-black/30 backdrop-blur-2xl text-white'>
                <span className='text-2xl'>1️⃣</span> User enters mood, language, industry
              </motion.div>
              <motion.div
                style={{ opacity: divFill2, y: y2 }}
                className='w-full py-6 px-4 border rounded-2xl text-sm flex items-center gap-3 font-para bg-black/30 backdrop-blur-2xl text-white'>
                <span className='text-2xl'>2️⃣</span> AI generates movie suggestions
              </motion.div>
              <motion.div
                style={{ opacity: divFill3, y: y3 }}
                className='w-full py-6 px-4 border rounded-2xl text-sm flex items-center gap-3 font-para bg-black/30 backdrop-blur-2xl text-white'>
                <span className='text-2xl'>3️⃣</span> System fetches movie details (OMDB API)
              </motion.div>
              <motion.div
                style={{ opacity: divFill4, y: y4 }}
                className='w-full py-6 px-4 border rounded-2xl text-sm flex items-center gap-3 font-para bg-black/30 backdrop-blur-2xl text-white'>
                <span className='text-2xl'>4️⃣</span> Results displayed with posters & info
              </motion.div>
            </div>
          </div>
          {/* footer */}
          <div className="w-full mt-10 flex flex-col sm:flex-row justify-evenly items-center pb-[5vh] px-4 sm:px-[14vw] gap-6 sm:gap-[30vh]">
            <div className="bg-black/40 border border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-lg h-auto sm:h-[40vh] w-full flex justify-center items-start flex-col transsition duration-150 hover:-translate-y-5">
              <h2 className="text-xl font-heading text-purple-300 mb-4">⚙️ Tech Stack
              </h2>
              <ul className="text-sm text-gray-300 space-y-2 font-para">
                <li><span className="text-white font-semibold">Frontend:</span> React.js, Tailwind CSS</li>
                <li><span className="text-white font-semibold">Backend:</span> Node.js, Express</li>
                <li><span className="text-white font-semibold">APIs:</span> Groq, OMDB</li>
                <li><span className="text-white font-semibold">Tools:</span> Framer Motion</li>
              </ul>
            </div>
            <div className="bg-black/40 border border-white/20 rounded-2xl p-6 backdrop-blur-md shadow-lg h-auto sm:h-[40vh] w-full flex justify-center items-start flex-col transsition duration-150 hover:-translate-y-5">
              <h2 className="text-xl font-heading text-yellow-300 mb-4">
                🚀 Future Improvements
              </h2>
              <ul className="text-sm text-gray-300 space-y-2 font-para">
                <li>❤️ Save favorite movies</li>
                <li>🎥 Watch trailer integration</li>
                <li>🔐 User authentication</li>
                <li>📜 Recommendation history</li>
              </ul>
            </div>
          </div>
        </div>
        <motion.div />
      </div>
    </>
  );
}
export default About;