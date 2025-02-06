import { useState, useEffect, useCallback } from "react";
import { sections } from "./sections";

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + 100;

    const sectionOffsets = sections.map(({ id }) => ({
      id,
      offset: document.getElementById(id)?.offsetTop || 0,
    }));

    const currentSection = sectionOffsets.find(
      (section, index) =>
        scrollPosition >= section.offset &&
        (index === sections.length - 1 || scrollPosition < sectionOffsets[index + 1].offset)
    );

    if (currentSection && currentSection.id !== activeSection) {
      setActiveSection(currentSection.id);
    }
  }, [activeSection]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
};

export default useActiveSection;
