import { useEffect, useRef } from "react";

import portfolio from "../assets/portofolio.png";
import peanutMilk from "../assets/peanut-milk.png";
import mochiLuvvie from "../assets/mochi-luvvie.png";
import movieCollection from "../assets/movie-collection.png";
import norin from "../assets/norin.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio website built with React.",
    link: "https://sherin-profile.netlify.app",
    image: portfolio,
  },
  {
    title: "Peanut Milk",
    description: "A website project for promoting peanut milk products.",
    link: "https://peanut-milk-sherin.netlify.app",
    image: peanutMilk,
  },
  {
    title: "Mochi Luvvie",
    description: "A promotional website for Mochi Luvvie products.",
    link: "https://mochi-luvvie.netlify.app",
    image: mochiLuvvie,
  },
  {
    title: "My Movie Collection",
    description: "A website to manage and explore movie collections.",
    link: "https://mymoviecollec.netlify.app",
    image: movieCollection,
  },
  {
    title: "Norin Website",
    description: "A skincare website with a minimalist design.",
    link: "https://norinweb.netlify.app",
    image: norin,
  },
];

export default function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const cards = projectsRef.current?.querySelectorAll(".project-card");

    if (!cards) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("project-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container" ref={projectsRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={project.title}>
            <div className="project-preview">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
              />

              <span className="project-number">
                0{index + 1}
              </span>
            </div>

            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
