import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  GitBranch,
  Globe,
  Wrench,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    description: "Building responsive and interactive user interfaces.",
    icon: Globe,
    technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind"],
  },
  {
    title: "Backend",
    description: "Developing APIs and server-side applications.",
    icon: Server,
    technologies: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Programming",
    description: "Problem solving and writing efficient code.",
    icon: Code2,
    technologies: ["C++", "JavaScript", "DSA"],
  },
  {
    title: "Database",
    description: "Designing and working with application data.",
    icon: Database,
    technologies: ["MongoDB", "MySQL", "SQL"],
  },
  {
    title: "Tools",
    description: "Tools I use to build and manage projects.",
    icon: Wrench,
    technologies: ["VS Code", "Postman", "Git", "GitHub"],
  },
  {
    title: "Development",
    description: "Working with modern development workflows.",
    icon: GitBranch,
    technologies: ["Git", "GitHub", "NPM", "API Integration"],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="px-6 py-24"
    >
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
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            What I work with.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-gray-800 bg-gray-900/40 p-6 hover:border-gray-600 transition-colors"
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                  <Icon size={22} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 leading-6 mb-5">
                  {skill.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-xs rounded-full border border-gray-800 text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Skills;