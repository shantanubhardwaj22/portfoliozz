import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
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
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold max-w-3xl">
            Let's build something together.
          </h2>

          <p className="mt-6 text-gray-500 text-lg max-w-2xl leading-8">
            Have a project, opportunity, or just want to say hello?
            Feel free to reach out.
          </p>
        </motion.div>

        {/* Contact Content */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4">

              {/* Email */}
              <a
                href="mailto:yourmail@example.com"
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Email
                    </p>

                    <p className="mt-1">
                      yourmail@example.com
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center">
                    <span className="text-xs font-medium">GH</span>
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      GitHub
                    </p>

                    <p className="mt-1">
                      github.com/yourusername
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center justify-between p-5 rounded-2xl border border-gray-800 hover:border-gray-600 transition-colors"
              >
                <div className="flex items-center gap-4">

                  <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center">
                    <Linkedin size={20} />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      LinkedIn
                    </p>

                    <p className="mt-1">
                      linkedin.com/in/yourusername
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={20}
                  className="text-gray-500 group-hover:text-white transition-colors"
                />
              </a>

            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >

            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Name
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full px-5 py-4 rounded-xl border border-gray-800 bg-transparent outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-5 py-4 rounded-xl border border-gray-800 bg-transparent outline-none focus:border-gray-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-500 mb-2">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full px-5 py-4 rounded-xl border border-gray-800 bg-transparent outline-none resize-none focus:border-gray-500 transition-colors"
              />
            </div>

            <button
              type="submit"
              className="px-7 py-3 rounded-full bg-white text-black font-medium hover:scale-105 transition-transform"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;