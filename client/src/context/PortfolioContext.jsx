
import { createContext, useContext, useState, useEffect } from "react";

const PortfolioContext = createContext();

const initialSections = [
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
];

export function PortfolioProvider({ children }) {
  // Step 1: Load saved sections from localStorage
  const [sections, setSections] = useState(() => {
    try {
      const savedSections = localStorage.getItem("portfolio-sections");

      return savedSections
        ? JSON.parse(savedSections)
        : initialSections;
    } catch (error) {
      console.error("Error loading sections:", error);
      return initialSections;
    }
  });

  // Step 2: Save sections whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(
        "portfolio-sections",
        JSON.stringify(sections)
      );
    } catch (error) {
      console.error("Error saving sections:", error);
    }
  }, [sections]);

  return (
    <PortfolioContext.Provider
      value={{
        sections,
        setSections,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  return useContext(PortfolioContext);
}
