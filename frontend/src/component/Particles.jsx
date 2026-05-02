import { useMemo } from "react";

function Particles() {
  const particles = useMemo(() => {
    return [...Array(40)].map(() => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
      duration: 2 + Math.random() * 3,
    }));
  }, []);
  return (
    <div className="absolute inset-0 -z-10">
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-yellow-500/60 rounded-full animate-ping"
          style={{
            top: p.top + "%",
            left: p.left + "%",
            animationDuration: p.duration + "s",
          }}
        />
      ))}
    </div>
  );
}
export default Particles;