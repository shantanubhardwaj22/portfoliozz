import { useState } from "react";
import {
  DndContext,
  closestCenter,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { motion, AnimatePresence } from "framer-motion";
import SectionBuilder from "../../components/sections/SectionBuilder";

import {
   Plus,
  GripVertical,
  Eye,
  EyeOff,
  Pencil,
  Trash2,
  X,
  Type,
  Image,
  Images,
  Video,
  Code2,
  Layers,
  Star,
} from "lucide-react";


function SortableSection({
  section,
  index,
  handleToggleVisibility,
  handleEditSection,
  handleDeleteSection,
}) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({
    id: section.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      className="group flex items-center gap-4 p-4 md:p-5 rounded-2xl border border-gray-800 bg-[#0f1115] hover:border-gray-700 transition-colors"
    >

      {/* Drag Handle */}
      <button
        {...attributes}
        {...listeners}
        className="hidden sm:block text-gray-600 hover:text-gray-300 cursor-grab active:cursor-grabbing"
        title="Drag to reorder"
      >
        <GripVertical size={20} />
      </button>

      {/* Order */}
      <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center text-xs text-gray-500 shrink-0">
        {index + 1}
      </div>

      {/* Section Info */}
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">
          {section.title}
        </h3>

        <p className="text-sm text-gray-500 mt-1">
          {section.type}
        </p>
      </div>

      {/* Visibility */}
      <button
        onClick={() => handleToggleVisibility(section.id)}
        className="hidden md:flex items-center gap-2 text-sm"
        title={section.visible ? "Hide section" : "Show section"}
      >
        {section.visible ? (
          <>
            <Eye size={16} className="text-gray-400" />
            <span className="text-gray-400">
              Visible
            </span>
          </>
        ) : (
          <>
            <EyeOff size={16} className="text-gray-600" />
            <span className="text-gray-600">
              Hidden
            </span>
          </>
        )}
      </button>

      {/* Actions */}
     <div className="flex items-center gap-1">

            {/* Preview */}
            <button
              onClick={() =>
                window.location.href = `/admin/sections/preview/${section.id}`
              }
              className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"
              title="Preview"
            >
              <Eye size={17} />
            </button>

            {/* Edit */}
            <button
              onClick={() => handleEditSection(section)}
              className="p-2.5 rounded-lg text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"
              title="Edit"
            >
              <Pencil size={17} />
            </button>

            {/* Delete */}
            <button
              onClick={() => handleDeleteSection(section.id)}
              className="p-2.5 rounded-lg text-gray-500 hover:text-red-400 hover:bg-gray-900 transition-colors"
              title="Delete"
            >
              <Trash2 size={17} />
            </button>

          </div>
              </motion.div>
            );
          }

function Sections() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [editingSection, setEditingSection] = useState(null);

        const [sections, setSections] = useState([
        {
          id: 1,
          title: "Hero",
          type: "Hero Section",
          visible: true,
          order: 1,
        },
        {
          id: 2,
          title: "About",
          type: "Text + Image",
          visible: true,
          order: 2,
        },
        {
          id: 3,
          title: "Skills",
          type: "Skills",
          visible: true,
          order: 3,
        },
        {
          id: 4,
          title: "Experience",
          type: "Timeline",
          visible: true,
          order: 4,
        },
        {
          id: 5,
          title: "Projects",
          type: "Project Showcase",
          visible: true,
          order: 5,
        },
        {
          id: 6,
          title: "Contact",
          type: "Contact",
          visible: true,
          order: 6,
        },
      ]);
  const sectionTypes = [
    {
      name: "Text",
      description: "Heading, paragraphs and rich text",
      icon: Type,
    },
    {
      name: "Image",
      description: "Single image with content",
      icon: Image,
    },
    {
      name: "Gallery",
      description: "Multiple images in a gallery",
      icon: Images,
    },
    {
      name: "Video",
      description: "Video with title and description",
      icon: Video,
    },
    {
      name: "Skills",
      description: "Display skills and technologies",
      icon: Code2,
    },
    {
      name: "Timeline",
      description: "Experience, education or journey",
      icon: Layers,
    },
    {
      name: "Testimonials",
      description: "Client or user testimonials",
      icon: Star,
    },
  ];
      const handleSaveSection = (sectionData) => {
        // EDIT MODE
        if (editingSection) {
          setSections((currentSections) =>
            currentSections.map((section) =>
              section.id === editingSection.id
                ? {
                    ...section,
                    title:
                      sectionData.title ||
                      `New ${sectionData.type}`,
                    type: sectionData.type,
                    content: sectionData.content,
                    style: sectionData.style,
                    animation: sectionData.animation,
                  }
                : section
            )
          );
        }

        // CREATE MODE
        else {
          const newSection = {
            id: Date.now(),
            title:
              sectionData.title ||
              `New ${sectionData.type}`,
            type: sectionData.type,
            visible: true,

            content: sectionData.content,
            style: sectionData.style,
            animation: sectionData.animation,
          };

          setSections((currentSections) => [
            ...currentSections,
            newSection,
          ]);
        }

        // Builder close
        setSelectedType(null);
        setEditingSection(null);
      };
      const handleEditSection = (section) => {
        setEditingSection(section);
        setSelectedType(section.type);
      };

      const handleToggleVisibility = (id) => {
        setSections((currentSections) =>
          currentSections.map((section) =>
            section.id === id
              ? {
                  ...section,
                  visible: !section.visible,
                }
              : section
          )
        );
      };

      const handleDeleteSection = (id) => {
        setSections((currentSections) =>
          currentSections.filter(
            (section) => section.id !== id
          )
        );
      };
      const handleDragEnd = (event) => {
        const { active, over } = event;

        if (!over || active.id === over.id) {
          return;
        }

        setSections((currentSections) => {
          const oldIndex = currentSections.findIndex(
            (section) => section.id === active.id
          );

          const newIndex = currentSections.findIndex(
            (section) => section.id === over.id
          );

          const reorderedSections = arrayMove(
            currentSections,
            oldIndex,
            newIndex
          );

          return reorderedSections.map((section, index) => ({
            ...section,
            order: index + 1,
          }));
        });
      };
      // Selected type ke baad builder open karo
      if (selectedType) {
        return (
        <SectionBuilder
            type={selectedType}
            section={editingSection}
            onBack={() => {
              setSelectedType(null);
              setEditingSection(null);
            }}
            onSave={handleSaveSection}
          />
        );
      }

      return (
        <div className="space-y-8">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div>
          <p className="text-sm text-gray-500 mb-2">
            Portfolio Builder
          </p>

          <h1 className="text-3xl md:text-4xl font-bold">
            Sections
          </h1>

          <p className="mt-3 text-gray-500">
            Manage the sections displayed on your portfolio.
          </p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white text-black font-medium hover:scale-[1.02] transition-transform"
        >
          <Plus size={18} />
          Add Section
        </button>
      </div>
      
      {selectedType && (
      <div className="p-4 rounded-xl border border-gray-800 bg-[#0f1115]">
        <p className="text-sm text-gray-500">
          Selected section type
        </p>

        <p className="mt-1 font-medium">
          {selectedType}
        </p>
      </div>
    )}

      {/* Sections List */}
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={sections.map((section) => section.id)}
            strategy={verticalListSortingStrategy}
          >
            <div className="space-y-3">
              {sections.map((section, index) => (
                <SortableSection
                  key={section.id}
                  section={section}
                  index={index}
                  handleToggleVisibility={handleToggleVisibility}
                  handleEditSection={handleEditSection}
                  handleDeleteSection={handleDeleteSection}
                />
              ))}
            </div>
          </SortableContext>
        </DndContext>

      {/* Add Section Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-800 bg-[#0b0d10] p-6 md:p-8"
            >

              {/* Modal Header */}
              <div className="flex items-start justify-between gap-5 mb-8">
                <div>
                  <p className="text-sm text-gray-500 mb-2">
                    Section Builder
                  </p>

                  <h2 className="text-2xl md:text-3xl font-bold">
                    Add a new section
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Choose the type of section you want to add.
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 rounded-xl text-gray-500 hover:text-white hover:bg-gray-900 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Section Types */}
              <div className="grid sm:grid-cols-2 gap-4">
                {sectionTypes.map((sectionType) => {
                  const Icon = sectionType.icon;

                  return (
                    <button
                    key={sectionType.name}
                    onClick={() => {
                      setSelectedType(sectionType.name);
                      setIsModalOpen(false);
                    }}
                    className="text-left p-5 rounded-2xl border border-gray-800 bg-[#0f1115] hover:border-gray-600 hover:bg-[#12151a] transition-all group"
                  >
                      <div className="w-11 h-11 rounded-xl bg-gray-900 flex items-center justify-center text-gray-400 group-hover:text-white transition-colors">
                        <Icon size={20} />
                      </div>

                      <h3 className="mt-4 font-semibold">
                        {sectionType.name}
                      </h3>

                      <p className="mt-2 text-sm text-gray-500 leading-6">
                        {sectionType.description}
                      </p>
                    </button>
                  );
                })}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}

export default Sections;