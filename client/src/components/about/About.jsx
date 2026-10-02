import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 py-24"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            A little about me.
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-64 h-80 md:w-80 md:h-96 rounded-3xl overflow-hidden border border-gray-800 bg-gray-900">
              <div className="w-full h-full flex items-center justify-center text-gray-600">
                Profile Image
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              Software Engineer who enjoys building things.
            </h3>

            <p className="text-gray-400 text-lg leading-8 mb-6">
              I'm a Software Engineer passionate about building modern
              web applications and solving real-world problems through
              technology.
            </p>

            <p className="text-gray-400 text-lg leading-8">
              I enjoy working across the frontend and backend, learning
              new technologies and turning ideas into useful products.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10">

              <div className="border border-gray-800 rounded-2xl p-5">
                <h4 className="text-2xl font-bold">10+</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Projects
                </p>
              </div>

              <div className="border border-gray-800 rounded-2xl p-5">
                <h4 className="text-2xl font-bold">15+</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Technologies
                </p>
              </div>

              <div className="border border-gray-800 rounded-2xl p-5">
                <h4 className="text-2xl font-bold">∞</h4>
                <p className="text-sm text-gray-500 mt-1">
                  Curiosity
                </p>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;