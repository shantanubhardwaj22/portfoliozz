function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5">

      <h1 className="text-xl font-bold">
        Portfolio
      </h1>

      <div className="flex gap-8">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;