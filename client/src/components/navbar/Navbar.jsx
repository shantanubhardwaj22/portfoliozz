function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-800 bg-[#0b0d10]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-xl font-bold">
          Portfolio
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="hover:text-gray-400 transition-colors">
            About
          </a>

          <a href="#skills" className="hover:text-gray-400 transition-colors">
            Skills
          </a>

          <a href="#experience" className="hover:text-gray-400 transition-colors">
            Experience
          </a>

          <a href="#projects" className="hover:text-gray-400 transition-colors">
            Projects
          </a>

          <a href="#contact" className="hover:text-gray-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Mobile Menu Placeholder */}
        <button className="md:hidden text-sm border border-gray-700 px-4 py-2 rounded-full">
          Menu
        </button>

      </div>
    </nav>
  );
}

export default Navbar;