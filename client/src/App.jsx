import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Sections from "./pages/admin/Sections";
import Projects from "./pages/admin/Projects";
import Settings from "./pages/admin/Settings";

import AdminLayout from "./layouts/AdminLayout";
import Preview from "./pages/admin/Preview";


function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Website */}
        <Route path="/" element={<Home />} />

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Panel */}
        <Route element={<AdminLayout />}>

          <Route path="/admin" element={<Dashboard />} />

          <Route
            path="/admin/sections"
            element={<Sections />}
          />

          <Route
            path="/admin/projects"
            element={<Projects />}
          />

          <Route
            path="/admin/settings"
            element={<Settings />}
          />

          <Route
            path="/admin/sections/preview/:id"
            element={<Preview />}
          />

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;