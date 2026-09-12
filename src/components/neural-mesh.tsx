import { motion, useReducedMotion } from "framer-motion";

const nodes = [
  [8, 18], [23, 37], [42, 15], [57, 43], [78, 19], [92, 39],
  [13, 72], [35, 63], [54, 83], [72, 68], [91, 81],
];
const lines = [[0,1],[1,2],[1,6],[1,7],[2,3],[3,4],[3,7],[3,8],[4,5],[4,9],[5,10],[6,7],[7,8],[8,9],[9,10]];

export function NeuralMesh() {
  const reduced = useReducedMotion();
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,var(--mesh-glow),transparent_55%)]" />
      <svg className="absolute inset-0 h-full w-full opacity-45" viewBox="0 0 100 100" preserveAspectRatio="none">
        {lines.map(([a,b], i) => {
          const start = nodes[a];
          const end = nodes[b];
          if (!start || !end) return null;
          return <line key={i} x1={start[0]} y1={start[1]} x2={end[0]} y2={end[1]} stroke="currentColor" strokeWidth="0.12" className="text-primary" />;
        })}
        {nodes.map(([x,y], i) => (
          <motion.circle key={i} cx={x} cy={y} r="0.55" className={i % 3 === 0 ? "fill-accent" : "fill-primary"}
            animate={reduced ? undefined : { opacity: [0.25, 1, 0.25], r: [0.4, 0.75, 0.4] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.17 }} />
        ))}
      </svg>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,transparent_20%,transparent_65%,var(--background)_100%)]" />
    </div>
  );
}
