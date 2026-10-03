import { motion } from "framer-motion";

function SectionPreview({
  type,
  sectionName,
  description,
  backgroundType,
  backgroundColor,
  textColor,
  cardStyle,
  animation,
  duration,
}) {
  const getBackground = () => {
    if (backgroundType === "gradient") {
      return `linear-gradient(135deg, ${backgroundColor}, #1e293b)`;
    }

    return backgroundColor;
  };

  const getAnimation = () => {
    switch (animation) {
      case "fade-up":
        return { opacity: 1, y: 0 };

      case "fade-down":
        return { opacity: 1, y: 0 };

      case "fade-left":
        return { opacity: 1, x: 0 };

      case "fade-right":
        return { opacity: 1, x: 0 };

      case "zoom":
        return { opacity: 1, scale: 1 };

      default:
        return { opacity: 1 };
    }
  };

  const getInitialAnimation = () => {
    switch (animation) {
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

  const getCardStyle = () => {
    switch (cardStyle) {
      case "glass":
        return "bg-white/10 backdrop-blur-md border border-white/20";

      case "bento":
        return "bg-white/5 border border-white/10";

      case "minimal":
        return "bg-transparent border border-white/10";

      default:
        return "bg-black/20 border border-white/10";
    }
  };

  return (
    <div className="rounded-2xl border border-gray-800 overflow-hidden">
      {/* Preview Header */}
      <div className="px-6 py-4 border-b border-gray-800 bg-[#0f1115]">
        <p className="text-sm font-medium">Live Preview</p>
        <p className="text-xs text-gray-500 mt-1">
          This is how your section will look.
        </p>
      </div>

      {/* Preview Area */}
      <div
        className="p-6 md:p-10 min-h-[320px] flex items-center justify-center"
        style={{
          background:
            backgroundType === "gradient"
              ? getBackground()
              : backgroundColor,
          color: textColor,
        }}
      >
        <motion.div
          key={animation}
          initial={getInitialAnimation()}
          animate={getAnimation()}
          transition={{
            duration: duration / 1000,
            ease: "easeOut",
          }}
          className={`w-full max-w-3xl rounded-2xl p-8 ${getCardStyle()}`}
        >
          <p className="text-xs uppercase tracking-widest opacity-50 mb-3">
            {type}
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            {sectionName || "Your Section Title"}
          </h2>

          <p className="mt-4 opacity-70 leading-relaxed">
            {description ||
              "Your section description will appear here."}
          </p>

          {/* Type-specific preview */}
          {type === "Gallery" && (
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="h-20 rounded-xl bg-white/10" />
              <div className="h-20 rounded-xl bg-white/10" />
              <div className="h-20 rounded-xl bg-white/10" />
            </div>
          )}

          {type === "Image" && (
            <div className="mt-6 h-40 rounded-xl bg-white/10 flex items-center justify-center text-sm opacity-50">
              Image Preview
            </div>
          )}

          {type === "Video" && (
            <div className="mt-6 h-40 rounded-xl bg-black/30 flex items-center justify-center text-sm opacity-50">
              Video Preview
            </div>
          )}

          {type === "Skills" && (
            <div className="flex flex-wrap gap-2 mt-6">
              {["React", "Node.js", "MongoDB", "JavaScript"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 rounded-lg bg-white/10 text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          )}

          {type === "Timeline" && (
            <div className="mt-6 space-y-3">
              <div className="h-3 w-3/4 rounded bg-white/10" />
              <div className="h-3 w-1/2 rounded bg-white/10" />
              <div className="h-3 w-2/3 rounded bg-white/10" />
            </div>
          )}

          {type === "Testimonials" && (
            <div className="mt-6 p-4 rounded-xl bg-white/5">
              <p className="text-sm opacity-70">
                "Your testimonial will appear here."
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default SectionPreview;