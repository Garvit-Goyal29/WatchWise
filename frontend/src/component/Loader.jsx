import { motion } from 'framer-motion';

function Loader() {
  // Generate random stars for background
  const stars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 2,
    duration: Math.random() * 1.5 + 1,
  }));

  // Orbiting particles
  const orbitParticles = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    delay: i * 0.5,
  }));

  const aiTexts = [
    "✨ AI is analyzing your mood...",
    "🌟 Searching the galaxy of movies...",
    "⭐ Finding perfect matches...",
    "🎬 Curating your watchlist...",
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
      {/* Twinkling Stars Background */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0, 1, 0.3, 1, 0],
            scale: [0.5, 1.2, 0.8, 1.2, 0.5],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      {/* Central Glow */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Outer ring glow */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40">
          {/* Pulsing glow background */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(239,68,68,0.2) 50%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Orbiting star particles */}
          {orbitParticles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute w-2 h-2 sm:w-3 sm:h-3"
              style={{
                top: '50%',
                left: '50%',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 3,
                delay: p.delay,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <motion.div
                className="relative"
                style={{
                  transform: 'translateX(55px)',
                }}
                animate={{
                  scale: [0.5, 1.5, 0.5],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 1.5,
                  delay: p.delay * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {/* 4-point star shape using CSS */}
                <div className="text-yellow-300 text-lg sm:text-xl">✦</div>
              </motion.div>
            </motion.div>
          ))}

          {/* Center star icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <motion.span
              className="text-4xl sm:text-5xl"
              animate={{
                scale: [1, 1.2, 1],
                filter: [
                  'drop-shadow(0 0 8px rgba(254,213,0,0.8))',
                  'drop-shadow(0 0 20px rgba(254,213,0,1))',
                  'drop-shadow(0 0 8px rgba(254,213,0,0.8))',
                ],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              ⭐
            </motion.span>
          </motion.div>
        </div>

        {/* Animated text cycle */}
        <div className="flex flex-col items-center gap-3">
          <motion.div
            className="text-lg sm:text-xl font-heading text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-yellow-300 to-red-400"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            AI Generating Recommendations
          </motion.div>

          {/* Cycling sub-text */}
          <motion.div className="h-6 overflow-hidden">
            <motion.div
              animate={{
                y: [0, -24, -48, -72, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                times: [0, 0.25, 0.5, 0.75, 1],
              }}
            >
              {aiTexts.map((text, i) => (
                <p key={i} className="h-6 text-sm text-gray-300 font-para text-center">
                  {text}
                </p>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-yellow-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
