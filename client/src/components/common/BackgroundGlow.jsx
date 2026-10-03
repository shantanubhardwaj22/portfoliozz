import { motion } from "framer-motion";

function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      
      {/* Top left glow */}
      <motion.div
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-purple-500/10 blur-[120px]"
      />

      {/* Top right glow */}
      <motion.div
        animate={{
          x: [0, -60, 0],
          y: [0, 70, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 -right-32 w-[450px] h-[450px] rounded-full bg-blue-500/10 blur-[120px]"
      />

      {/* Bottom glow */}
      <motion.div
        animate={{
          x: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[130px]"
      />

    </div>
  );
}

export default BackgroundGlow;