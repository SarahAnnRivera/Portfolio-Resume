import "./About.css";
import Reveal from "./Reveal";
import Compass from "./Compass";

function About() {
  return (
    <section className="about" id="about">
        <div className="section__divider">
  <span></span>
  <span className="section__divider-mark"><Compass /></span>
  <span></span>
</div>
      <div className="about__content">
        <Reveal>
        <div className="about__intro">
          <p className="section__eyebrow">ABOUT</p>

          <h2>Thoughtful development, backed by real-world experience.</h2>

          <p>
            I’m a Frontend Developer building responsive, user-focused
            applications with React and JavaScript. My background in project
            management, client-facing work, and independent business operations
            shaped the way I approach development: with attention to detail,
            clear communication, and an understanding of how design, function,
            timelines, and real-world needs fit together.
          </p>
        </div>
        </Reveal>

        <Reveal delay={250}>
        <div className="about__skills">
          <p className="section__eyebrow">SKILLS</p>

          <div className="skills__grid">
            <span>JavaScript</span>
            <span>React</span>
            <span>HTML5</span>
            <span>CSS3</span>
            <span>Firebase</span>
            <span>REST APIs</span>
            <span>Axios</span>
            <span>Git & GitHub</span>
            <span>Vercel</span>
            <span>Responsive Design</span>
          </div>
        </div>
        </Reveal>
      </div>
    </section>
  );
}

export default About;