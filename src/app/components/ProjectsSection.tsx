"use client";

import { useState } from "react";

export default function ProjectsSection() {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const projects = [
  
    {
      title: "Angry Birds",
      description: "A fun and interactive 2-D game project using OOPS, Java and LIBGDX.",
      image: "/angry-birds.jpg",
      qrCode: "/Angry Bird.jpg",
    },
    {
      title: "Simulator",
      description: "An advanced RISC-V simulator platform using assembly.",
      image: "/simulator-icon.png",
      qrCode: "/Simulator.jpg",
    },
    {
      title: "Twit",
      description: "A twitter clone project - website using Postgres and React.",
      image: "/twitter.png",
      qrCode: "/Twit.jpg",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">Projects</h2>
        <div className="project-cards">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card ${flippedCard === index ? "show-back" : ""}`}
            >
              <div className="project-card-inner">
                <div className="project-card-front">
                  <img src={project.image} alt={project.title} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => setFlippedCard(index)}>View Project</button>
                </div>
                <div className="project-card-back">
                  <img src={project.qrCode} alt={`QR Code for ${project.title}`} />
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <button onClick={() => setFlippedCard(null)}>Go Back</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}