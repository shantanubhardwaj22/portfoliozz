import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
} from "lucide-react";

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Tradekro",
      description:
        "A modern trading dashboard inspired by real-world stock trading platforms.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github: "#",
      live: "#",
    },
    {
      id: 2,
      title: "ConvoMeet",
      description:
        "A real-time video communication platform with meeting and collaboration features.",
      technologies: ["React", "WebRTC", "Node.js"],
      github: "#",
      live: "#",
    },
    {
      id: 3,
      title: "Melodex",
      description:
        "A modern music web application for browsing and playing music.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "#",
      live: "#",
    },
  ]);

  const handleDelete = (id) => {
    setProjects((currentProjects) =>
      currentProjects.filter((project) => project.id !== id)
    );
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">

        <div>
          <p className="text-sm text-gray-500 mb-2">
            Portfolio Content
          </p>

          <h1 className="text-3xl md:text-4xl font-bold">
            Projects
          </h1>

          <p className="mt-3 text-gray-500">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <button
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition-transform"
        >
          <Plus size={18} />
          Add Project
        </button>

      </div>

      {/* Project Count */}
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span className="text-white font-medium">
          {projects.length}
        </span>

        {projects.length === 1 ? "Project" : "Projects"}
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">

        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="group rounded-2xl border border-gray-800 bg-[#0f1115] overflow-hidden hover:border-gray-700 transition-colors"
          >

            {/* Image Placeholder */}
            <div className="h-48 bg-gray-900 flex items-center justify-center text-gray-600">
              <span className="text-sm">
                Project Image
              </span>
            </div>

            {/* Content */}
            <div className="p-5">

              <div className="flex items-start justify-between gap-4">

                <div>
                  <h2 className="text-lg font-semibold">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    {project.description}
                  </p>
                </div>

                <span className="shrink-0 px-2.5 py-1 rounded-full bg-gray-900 text-xs text-gray-500">
                  Live
                </span>

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-5">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="px-2.5 py-1 rounded-lg bg-gray-900 text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between mt-6 pt-5 border-t border-gray-800">

                <div className="flex items-center gap-2">

                  <a
                    href={project.github}
                    className="px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    className="p-2 rounded-lg text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"
                    title="Open project"
                  >
                    <ExternalLink size={17} />
                  </a>

                </div>

                <div className="flex items-center gap-1">

                  <button
                    className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"
                    title="Edit"
                  >
                    <Pencil size={17} />
                  </button>

                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-gray-900 transition-colors"
                    title="Delete"
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* Empty State */}
      {projects.length === 0 && (
        <div className="py-20 text-center border border-dashed border-gray-800 rounded-2xl">
          <h2 className="text-lg font-semibold">
            No projects yet
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Add your first project to display it on your portfolio.
          </p>

          <button className="mt-6 px-5 py-3 rounded-xl bg-white text-black font-medium">
            Add Project
          </button>
        </div>
      )}

    </div>
  );
}

export default Projects;