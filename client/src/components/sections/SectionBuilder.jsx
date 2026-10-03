import { useState } from "react";
import { ArrowLeft, Save } from "lucide-react";


function SectionBuilder({ type, section, onBack, onSave }) {
        const [sectionName, setSectionName] = useState(
        section?.title || ""
        );

        const [description, setDescription] = useState(
        section?.content?.description || ""
        );

        const [backgroundType, setBackgroundType] = useState(
        section?.style?.backgroundType || "solid"
        );

        const [backgroundColor, setBackgroundColor] = useState(
        section?.style?.backgroundColor || "#0f1115"
        );

        const [textColor, setTextColor] = useState(
        section?.style?.textColor || "#ffffff"
        );

        const [animation, setAnimation] = useState(
        section?.animation?.type || "fade-up"
        );

        const [duration, setDuration] = useState(
        section?.animation?.duration || 600
        );

        const [cardStyle, setCardStyle] = useState(
        section?.style?.cardStyle || "classic"
        );

  const handleSave = () => {
    const sectionData = {
      title: sectionName,
      type,
      content: {
        description,
      },
      style: {
        backgroundType,
        backgroundColor,
        textColor,
        cardStyle,
      },
      animation: {
        type: animation,
        duration,
      },
    };

    onSave(sectionData);
  };

  return (
    <div className="space-y-8">

      {/* Header */}
      <div className="flex items-center gap-4">

        <button
          onClick={onBack}
          className="p-2.5 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
        >
          <ArrowLeft size={19} />
        </button>

        <div>
          <p className="text-sm text-gray-500">
            Section Builder
          </p>

        <h1 className="text-3xl md:text-4xl font-bold">
        {section ? `Edit ${type} Section` : `Create ${type} Section`}
        </h1>
        </div>

      </div>

      {/* Basic Details */}
      <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-6 md:p-8">

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Basic Details
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Give your section a name and description.
          </p>
        </div>

        <div className="space-y-5">

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Section Name
            </label>

            <input
              type="text"
              value={sectionName}
              onChange={(e) => setSectionName(e.target.value)}
              placeholder="e.g. My Photography"
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none focus:border-gray-600 transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Description
            </label>

            <textarea
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell something about this section..."
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none resize-none focus:border-gray-600 transition-colors"
            />
          </div>

        </div>

      </div>

      {/* Type Specific Content */}
      <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-6 md:p-8">

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            {type} Content
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Configure the content for this section.
          </p>
        </div>

        {type === "Gallery" && (
          <div className="p-5 rounded-xl border border-dashed border-gray-700">

            <p className="text-sm font-medium">
              Gallery Images
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Image upload will be connected to Cloudinary later.
            </p>

            <button
              type="button"
              className="mt-5 px-4 py-2.5 rounded-xl border border-gray-700 text-sm hover:bg-gray-900 transition-colors"
            >
              Add Images
            </button>

          </div>
        )}

        {type === "Image" && (
          <div className="p-5 rounded-xl border border-dashed border-gray-700">

            <p className="text-sm font-medium">
              Image
            </p>

            <p className="mt-2 text-sm text-gray-500">
              Image upload will be connected to Cloudinary later.
            </p>

            <button
              type="button"
              className="mt-5 px-4 py-2.5 rounded-xl border border-gray-700 text-sm hover:bg-gray-900 transition-colors"
            >
              Select Image
            </button>

          </div>
        )}

        {type === "Video" && (
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Video URL
            </label>

            <input
              type="text"
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none focus:border-gray-600 transition-colors"
            />
          </div>
        )}

        {type === "Text" && (
          <div className="p-5 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-500">
              Text content editor will be added here.
            </p>
          </div>
        )}

        {type === "Skills" && (
          <div className="p-5 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-500">
              Skills and technology fields will be added here.
            </p>
          </div>
        )}

        {type === "Timeline" && (
          <div className="p-5 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-500">
              Timeline items will be added here.
            </p>
          </div>
        )}

        {type === "Testimonials" && (
          <div className="p-5 rounded-xl border border-gray-800">
            <p className="text-sm text-gray-500">
              Testimonial fields will be added here.
            </p>
          </div>
        )}

      </div>

      {/* Appearance */}
      <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-6 md:p-8">

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Appearance
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Customize how this section looks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          {/* Background */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Background
            </label>

            <select
              value={backgroundType}
              onChange={(e) => setBackgroundType(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none"
            >
              <option value="solid">Solid Color</option>
              <option value="gradient">Gradient</option>
              <option value="image">Image</option>
            </select>
          </div>

          {/* Background Color */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Background Color
            </label>

            <div className="flex items-center gap-3">

              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-12 h-12 rounded-lg bg-transparent border border-gray-800 cursor-pointer"
              />

              <input
                type="text"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none"
              />

            </div>
          </div>

          {/* Text Color */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Text Color
            </label>

            <div className="flex items-center gap-3">

              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-12 h-12 rounded-lg bg-transparent border border-gray-800 cursor-pointer"
              />

              <input
                type="text"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none"
              />

            </div>
          </div>

          {/* Card Style */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Card Style
            </label>

            <select
              value={cardStyle}
              onChange={(e) => setCardStyle(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none"
            >
              <option value="classic">Classic</option>
              <option value="glass">Glassmorphism</option>
              <option value="bento">Bento</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>

        </div>

      </div>

      {/* Animation */}
      <div className="rounded-2xl border border-gray-800 bg-[#0f1115] p-6 md:p-8">

        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Animation
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Choose how the section appears on the page.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Animation Type
            </label>

            <select
              value={animation}
              onChange={(e) => setAnimation(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none"
            >
              <option value="none">None</option>
              <option value="fade-up">Fade Up</option>
              <option value="fade-down">Fade Down</option>
              <option value="fade-left">Fade Left</option>
              <option value="fade-right">Fade Right</option>
              <option value="zoom">Zoom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Duration
            </label>

            <select
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl border border-gray-800 bg-[#0b0d10] outline-none"
            >
              <option value={300}>300 ms</option>
              <option value={500}>500 ms</option>
              <option value={600}>600 ms</option>
              <option value={800}>800 ms</option>
              <option value={1000}>1000 ms</option>
            </select>
          </div>

        </div>

      </div>
    

      {/* Actions */}
      <div className="flex justify-end gap-3 pb-10">

        <button
          onClick={onBack}
          className="px-5 py-3 rounded-xl border border-gray-800 text-gray-400 hover:text-white hover:bg-gray-900 transition-colors"
        >
          Cancel
        </button>

                <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition-transform"
            >
            <Save size={18} />

            {section ? "Update Section" : "Create Section"}
            </button>
      </div>

    </div>
  );
}

export default SectionBuilder;