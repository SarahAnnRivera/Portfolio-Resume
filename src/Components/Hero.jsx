import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
  <div className="hero__content">
    <div className="hero__intro">
    <h1 className="hero__line hero__line--1">
      <span className="hero__hello">Hi,</span>
       I'm <span className="hero__name">Sarah.</span>
    </h1>
    </div>

    <div className="hero__message">
    <p className="hero__line hero__line--2">
      I'm a <span className="hero__role">Frontend Developer</span>
    </p>

    <p className="hero__line hero__line--3">
      focused on clean user experiences,
    </p>

    <p className="hero__line hero__line--4">
      elevated design, and thoughtful functionality.
    </p>

    <a href="#contact" className="hero__line hero__line--5 hero__connect">
      Let's connect.
    </a>
  </div>
  </div>
</section>
  );
}

export default Hero;