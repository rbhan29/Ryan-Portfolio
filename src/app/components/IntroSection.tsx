"use client";

import { useEffect, useState } from "react";

export default function IntroSection() {
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      const projectsSection = document.getElementById("projects");

      if (projectsSection) {
        const projectsTop = projectsSection.getBoundingClientRect().top;
        if (projectsTop <= window.innerHeight / 2) {
          setShowScrollDown(false); // Hide the icon when reaching My Projects
          return;
        }
      }

      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        if (aboutTop <= window.innerHeight / 2) {
          setShowScrollDown(true); // Show the icon on About Me
          return;
        }
      }

      setShowScrollDown(true); // Default: Show the icon on Home
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="intro-section">
      <div className="intro-container">
        <div className="intro-content">
          <h1>
            Greetings, I’m<br />
            <span className="highlight">Ryan Bhan</span>
          </h1>
          <p className="description">
          Welcome to my design portfolio. I'm just getting started on my creative journey and learning more every day!
          </p>
          <div className="intro-buttons">
            <button
              className="blue-button"
              onClick={() =>
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              About Me
            </button>
            <button
              className="black-button"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              My Projects
            </button>
          </div>
        </div>
        {showScrollDown && (
          <div className="scroll-down">
            <img src="/downward.webp" alt="Scroll Down" />
          </div>
        )}
      </div>
    </section>
  );
}