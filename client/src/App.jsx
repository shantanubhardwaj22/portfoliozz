import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/public/Home.jsx";

import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import Sections from "./pages/admin/Sections";
import Projects from "./pages/admin/Projects";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Website */}
        <Route path="/" element={<Home />} />

        {/* Admin */}
        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/sections" element={<Sections />} />
        <Route path="/admin/projects" element={<Projects />} />
        <Route path="/admin/settings" element={<Settings />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;