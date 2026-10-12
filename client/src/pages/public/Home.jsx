
import { usePortfolio } from "../../context/PortfolioContext";
import PublicLayout from "../../layouts/PublicLayout";

import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import Projects from "../../components/projects/Projects";
import Contact from "../../components/contact/Contact";
import Footer from "../../components/common/Footer";

function Home() {
  const { sections } = usePortfolio();

  const sectionComponents = {
    "Hero Section": Hero,
    "Text + Image": About,
    Skills: Skills,
    Timeline: Experience,
    "Project Showcase": Projects,
    Contact: Contact,
  };


function CustomSection({ section }) {
  const description = section.content?.description || "";

  const backgroundColor =
    section.style?.backgroundColor || "#171e30";

  const textColor = section.style?.textColor || "#ffffff";

  const backgroundStyle =
    section.style?.backgroundType === "gradient"
      ? `linear-gradient(135deg, ${backgroundColor}, #1e293b)`
      : backgroundColor;

  return (
    <section
      style={{
        background: backgroundStyle,
        color: textColor,
        padding: "80px 24px",
        textAlign: "center",
      }}
    >
      <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
        {section.title}
      </h2>

      {description && (
        <p style={{ marginTop: "16px" }}>{description}</p>
      )}
    </section>
  );
}


  return (
    <PublicLayout>
      {sections
        .filter((section) => section.visible)
        .map((section) => {
          const SectionComponent = sectionComponents[section.type];

         if (SectionComponent) {
          return <SectionComponent key={section.id} />;
        }

        return <CustomSection key={section.id} section={section} />;

          return (
            <SectionComponent key={section.id} />
          );
        })}

      <Footer />
    </PublicLayout>
  );
}

export default Home;
