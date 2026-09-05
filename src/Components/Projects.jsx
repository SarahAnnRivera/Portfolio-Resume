import "./Projects.css";
import Reveal from "./Reveal";
import Compass from "./Compass";
import netflixImage from "../assets/netflix-clone.png";
import youtubeImage from "../assets/youtube-clone.png";
import summaristImage from "../assets/summarist.png";

function Projects() {
  const projects = [
    {
      title: "Netflix Clone",
      stack: "React • JavaScript • Firebase • REST API",
      description:
        "A responsive streaming-inspired application with authentication, search, dynamic movie details, and trailer integration.",
      image: netflixImage,
      live: "https://netflix-clone-sarahr.vercel.app/",
      github: "https://github.com/SarahAnnRivera/Netflix-Clone.git",
    },
    {
      title: "YouTube Clone",
      stack: "React • JavaScript • REST API",
      description:
        "A media application with functional search, dynamic video rendering, embedded playback, and recommended content.",
      image: youtubeImage,
      live: "https://youtube-clone-sarahr.vercel.app/",
      github: "https://github.com/SarahAnnRivera/Youtube-Clone.git",
    },
    {
      title: "Summarist",
      stack: "Next.js • TypeScript • Payment Integration",
      description:
        "A book app with enrollment subscription and payment integration.",
      image: summaristImage,
      live: "https://summarist-brown.vercel.app/",
      github: "https://github.com/SarahAnnRivera/summarist.git",
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="section__divider">
        <span></span>
        <span className="section__divider-mark"><Compass /></span>
        <span></span>
      </div>

      <div className="projects__header">
        <p className="section__eyebrow">SELECTED WORK</p>
        <h2>Projects built with purpose.</h2>
      </div>

      <div className="projects__grid">
        {projects.map((project, index) => (
          <Reveal key={project.title} delay={index * 180}>
            <article className="project__card">
              <div className="project__image">
                <img src={project.image} alt={project.title} />

              <div className="project__overlay">
                <div className="project__overlay-content">
                  <p>{project.stack}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project__links">
                    <a href={project.live}>Live Site</a>
                    <a href={project.github}>GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </article>
            </Reveal>
        ))}
      </div>
    </section>
  );
}

export default Projects;