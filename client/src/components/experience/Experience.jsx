import { motion } from "framer-motion";

const experiences = [
  {
    role: "Software Engineer",
    company: "Newgen Software",
    duration: "2026 - Present",
    description:
      "Working on enterprise software solutions, backend services, process automation and web application development.",
    technologies: ["JavaScript", "React", "Node.js", "SQL"],
  },
  {
    role: "Software Development Intern",
    company: "OneAssure",
    duration: "2025 - 2026",
    description:
      "Worked on web development and contributed to building and improving application features.",
    technologies: ["React", "JavaScript", "Node.js"],
  },
  {
    role: "Software Development Intern",
    company: "Zenith Education Solutions",
    duration: "2025",
    description:
      "Worked on frontend development and implemented responsive web interfaces.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="px-6 py-24"
    >
      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-3">
            Experience
          </p>

          <h2 className="text-4xl md:text-5xl font-bold">
            Where I've worked.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-[9px] top-0 bottom-0 w-px bg-gray-800" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <motion.div
                key={`${experience.company}-${experience.role}`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="relative pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-1 w-[19px] h-[19px] rounded-full border-4 border-[#111318] bg-white" />

                {/* Date */}
                <p className="text-sm text-gray-500 mb-2">
                  {experience.duration}
                </p>

                {/* Role */}
                <h3 className="text-2xl font-semibold">
                  {experience.role}
                </h3>

                {/* Company */}
                <p className="text-lg text-gray-400 mt-1">
                  {experience.company}
                </p>

                {/* Description */}
                <p className="text-gray-500 leading-7 mt-4 max-w-2xl">
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-5">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="px-3 py-1 text-xs rounded-full border border-gray-800 text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;