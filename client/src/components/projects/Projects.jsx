import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Tradekro",
    description:
      "A modern trading dashboard inspired by real-world investment platforms, featuring watchlists, holdings and interactive market data.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "ConvoMeet",
    description:
      "A real-time video communication application built with WebRTC, enabling users to connect through browser-based video calls.",
    image:
      "https://images.unsplash.com/photo-1587560699334-bea93391dcef?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React", "WebRTC", "Node.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Melodex",
    description:
      "A modern music web application with a clean interface for browsing and interacting with music content.",
    image:
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Things I've built.
          </h2>
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-gray-900/40"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-black/60 backdrop-blur flex items-center justify-center">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>

                  <div className="flex gap-2">

                    <a
                      href={project.github}
                      className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                      <span className="text-xs font-medium">GH</span>
                    </a>

                    <a
                      href={project.live}
                      className="w-9 h-9 rounded-full border border-gray-800 flex items-center justify-center hover:bg-white hover:text-black transition-colors"
                    >
                      <ExternalLink size={17} />
                    </a>

                  </div>

                </div>

                <p className="text-gray-500 leading-7 mt-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-xs rounded-full border border-gray-800 text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;