export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>My Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Portfolio Website</h3>

          <p>
            Personal portfolio website built with React to showcase
            my skills, projects, and contact information.
          </p>

          <a
            href="https://sherin-profile.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        <div className="project-card">
          <h3>Peanut Milk</h3>

          <p>
            Product website designed to promote peanut milk with
            a modern and responsive user interface.
          </p>

          <a
            href="https://peanut-milk-sherin.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        <div className="project-card">
          <h3>Mochi Luvvie</h3>

          <p>
            Landing page for a mochi dessert brand featuring
            modern design and responsive layouts.
          </p>

          <a
            href="https://mochi-luvvie.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

      </div>
    </section>
  );
}