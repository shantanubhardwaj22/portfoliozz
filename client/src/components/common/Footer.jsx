import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-gray-800 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">
            Shantanu Bhardwaj
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Software Engineer & Full Stack Developer
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-sm text-gray-500 hover:text-white hover:border-gray-600 transition-colors"
          >
            GH
          </a>

          <a
            href="#"
            className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-sm text-gray-500 hover:text-white hover:border-gray-600 transition-colors"
          >
            in
          </a>

          <a
            href="mailto:yourmail@example.com"
            className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-white hover:border-gray-600 transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} All rights reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;