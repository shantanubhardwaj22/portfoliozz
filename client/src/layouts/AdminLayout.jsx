import { NavLink, Outlet } from "react-router-dom";

function AdminLayout({ children }) {
  const navItems = [
    {
      name: "Dashboard",
      path: "/admin",
    },
    {
      name: "Sections",
      path: "/admin/sections",
    },
    {
      name: "Projects",
      path: "/admin/projects",
    },
    {
      name: "Settings",
      path: "/admin/settings",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0b0d10] text-white flex">

      {/* Sidebar */}
      <aside className="w-64 min-h-screen border-r border-gray-800 p-6 hidden md:block">

        {/* Logo */}
        <div className="mb-10">
          <h1 className="text-xl font-bold">
            Portfolio CMS
          </h1>

          <p className="text-xs text-gray-500 mt-1">
            Admin Panel
          </p>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/admin"}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-xl text-sm transition-colors ${
                  isActive
                    ? "bg-white text-black"
                    : "text-gray-400 hover:bg-gray-900 hover:text-white"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0">

        {/* Top Bar */}
        <header className="h-20 border-b border-gray-800 flex items-center justify-between px-6 md:px-10">

          <div>
            <p className="text-sm text-gray-500">
              Admin Panel
            </p>

            <h2 className="text-lg font-semibold">
              Manage your portfolio
            </h2>
          </div>

          <button className="px-4 py-2 rounded-full border border-gray-700 text-sm hover:bg-gray-900 transition-colors">
            View Portfolio
          </button>

        </header>

        {/* Page */}
          <div className="p-6 md:p-10">
            <Outlet />
           </div>
      </main>

    </div>
  );
}

export default AdminLayout;