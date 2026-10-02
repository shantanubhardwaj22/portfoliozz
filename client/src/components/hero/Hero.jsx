import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-400"
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          Shantanu Bhardwaj
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-5 text-2xl md:text-4xl font-semibold text-gray-400"
        >
          Software Engineer & Full Stack Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg leading-relaxed"
        >
          I build modern, scalable web applications and create
          digital experiences that are simple, useful and engaging.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-10"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:bg-gray-800 transition-colors"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="inline-flex mt-20 text-gray-500 hover:text-white transition-colors"
        >
          <ArrowDown className="animate-bounce" />
        </motion.a>

      </div>
    </section>
  );
}

export default Hero;