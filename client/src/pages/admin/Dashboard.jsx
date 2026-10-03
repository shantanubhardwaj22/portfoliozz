import { motion } from "framer-motion";

function Dashboard() {
  const stats = [
    {
      title: "Total Sections",
      value: "6",
      description: "Portfolio sections",
    },
    {
      title: "Visible Sections",
      value: "6",
      description: "Currently published",
    },
    {
      title: "Projects",
      value: "3",
      description: "Portfolio projects",
    },
    {
      title: "Drafts",
      value: "0",
      description: "Waiting to publish",
    },
  ];

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <p className="text-sm text-gray-500 mb-2">
          Overview
        </p>

        <h1 className="text-3xl md:text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-3 text-gray-500 max-w-2xl">
          Manage your portfolio content, sections and projects
          from one place.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
            className="p-6 rounded-2xl border border-gray-800 bg-[#0f1115] hover:border-gray-700 transition-colors"
          >
            <p className="text-sm text-gray-500">
              {stat.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {stat.value}
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              {stat.description}
            </p>
          </motion.div>
        ))}

      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold">
          Quick Actions
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Quickly jump to the most common tasks.
        </p>

        <div className="grid md:grid-cols-3 gap-5 mt-5">

          <a
            href="/admin/sections"
            className="group p-6 rounded-2xl border border-gray-800 bg-[#0f1115] hover:border-gray-600 transition-all"
          >
            <p className="text-lg font-semibold">
              Manage Sections
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Add, edit, reorder and customize portfolio sections.
            </p>

            <span className="inline-block mt-6 text-sm text-gray-400 group-hover:text-white transition-colors">
              Open Sections →
            </span>
          </a>

          <a
            href="/admin/projects"
            className="group p-6 rounded-2xl border border-gray-800 bg-[#0f1115] hover:border-gray-600 transition-all"
          >
            <p className="text-lg font-semibold">
              Manage Projects
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Add projects, technologies, links and images.
            </p>

            <span className="inline-block mt-6 text-sm text-gray-400 group-hover:text-white transition-colors">
              Open Projects →
            </span>
          </a>

          <a
            href="/admin/settings"
            className="group p-6 rounded-2xl border border-gray-800 bg-[#0f1115] hover:border-gray-600 transition-all"
          >
            <p className="text-lg font-semibold">
              Portfolio Settings
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Manage general portfolio information and preferences.
            </p>

            <span className="inline-block mt-6 text-sm text-gray-400 group-hover:text-white transition-colors">
              Open Settings →
            </span>
          </a>

        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl font-semibold">
          Recent Activity
        </h2>

        <div className="mt-5 rounded-2xl border border-gray-800 bg-[#0f1115] p-6">

          <div className="flex items-center justify-between py-3 border-b border-gray-800">
            <div>
              <p className="text-sm">
                Portfolio created
              </p>

              <p className="text-xs text-gray-600 mt-1">
                Initial setup
              </p>
            </div>

            <span className="text-xs text-gray-500">
              Just now
            </span>
          </div>

          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm">
                Public website updated
              </p>

              <p className="text-xs text-gray-600 mt-1">
                Contact & Footer added
              </p>
            </div>

            <span className="text-xs text-gray-500">
              Today
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}

export default Dashboard;