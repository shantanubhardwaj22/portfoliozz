import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { usePortfolio } from "../../context/PortfolioContext";


function Preview() {
  const navigate = useNavigate();
    const { sections } = usePortfolio();
    const { id } = useParams();

    const section = sections.find(
      (item) => String(item.id) === String(id)
    );
    console.log("PREVIEW SECTION:", section);
    const sectionStyle = section?.style || {
          backgroundType: "solid",
          backgroundColor: "#171e30",
          textColor: "#ffffff",
          cardStyle: "classic",
        };

        const sectionAnimation = section?.animation || {
          type: "fade-up",
          duration: 600,
        };

        const sectionContent = section?.content || {
          description: "",
        };



  const getInitialAnimation = () => {
    switch (sectionAnimation.type) {
      case "fade-up":
        return { opacity: 0, y: 30 };

      case "fade-down":
        return { opacity: 0, y: -30 };

      case "fade-left":
        return { opacity: 0, x: -30 };

      case "fade-right":
        return { opacity: 0, x: 30 };

      case "zoom":
        return { opacity: 0, scale: 0.9 };

      default:
        return { opacity: 1 };
    }
  };
const getBackground = () => {
  if (sectionStyle.backgroundType === "gradient") {
    return `linear-gradient(135deg, ${sectionStyle.backgroundColor}, #1e293b)`;
  }

  return sectionStyle.backgroundColor;
};
      if (!section) {
        return (
          <div className="min-h-screen bg-[#0b0d10] text-white flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-2xl font-semibold">
                Section not found
              </h1>

              <button
                onClick={() => navigate("/admin/sections")}
                className="mt-5 px-5 py-3 rounded-xl bg-white text-black"
              >
                Back to Sections
              </button>
            </div>
          </div>
        );
      }
  return (
    <div className="min-h-screen bg-[#0b0d10] text-white">

      {/* Header */}
      <header className="h-20 border-b border-gray-800 flex items-center justify-between px-6 md:px-10">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/admin/sections")}
            className="p-2.5 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
          >
            <ArrowLeft size={19} />
          </button>

          <div>
            <p className="text-sm text-gray-500">
              Section Preview
            </p>

            <h1 className="text-lg font-semibold">
              {section.title}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-400">
          <Eye size={17} />
          Preview Mode
        </div>
      </header>

      {/* Preview */}
      <main className="p-6 md:p-10">

        <div className="max-w-6xl mx-auto">

          <motion.section
            initial={getInitialAnimation()}
            animate={{
              opacity: 1,
              y: 0,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: sectionAnimation.duration / 1000,
              ease: "easeOut",
            }}
            className="min-h-[500px] rounded-3xl overflow-hidden flex items-center justify-center p-8 md:p-16"
            style={{
              background: getBackground(),
              color: sectionStyle.textColor,
            }}
          >

            <div className="w-full max-w-4xl">

              <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-4">
                {section.type}
              </p>

              <h2 className="text-4xl md:text-6xl font-bold">
                {section.title}
              </h2>

              <p className="mt-5 max-w-2xl text-lg opacity-70 leading-relaxed">
                {sectionContent.description}
              </p>

              {section.type === "Gallery" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">

                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="h-48 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-md flex items-center justify-center"
                    >
                      <span className="text-sm opacity-40">
                        Image {item}
                      </span>
                    </div>
                  ))}

                </div>
              )}

            </div>

          </motion.section>

        </div>

      </main>
    </div>
  );
}

export default Preview;