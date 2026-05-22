import "./App.css";

function App() {
  return (
    <main className="portfolio">
      <nav className="navbar">
        <h3 className="logo">Kai Wen Yuan</h3>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
        </div>
      </nav>

      <section className="hero">
        <p className="hero-tag">UI/UX DESIGN • FRONTEND DEVELOPMENT</p>

        <h1>Kai Wen Yuan</h1>

        <p className="hero-text">
          Designing modern interfaces focused on clarity, usability, and visual
          communication.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#about" className="secondary-btn">
            About Me
          </a>
        </div>
      </section>

      <section className="section" id="about">
        <h2>About Me</h2>

        <p>
          I am a student at the University of Ottawa currently learning UI/UX
          design, frontend development, and visual communication principles.
        </p>

        <p>
          My goal is to create interfaces that are visually organized,
          user-friendly, and responsive while continuing to improve my web
          development skills.
        </p>
      </section>

      <section className="section" id="work">
  <h2>How I Work</h2>

  <p>
    I am currently learning UI/UX design, frontend development, and visual
    communication as part of SEG3125 at the University of Ottawa.
  </p>

  <p>
    Through this course I am exploring HTML, CSS, JavaScript, React, and
    Bootstrap while learning how layout, typography, color, and visual
    hierarchy affect user experience.
  </p>

  <p>
    As I continue developing my skills, I aim to create interfaces that are
    visually organized, responsive, and user-friendly while applying
    user-centered design principles into future projects.
  </p>
</section>

      <section className="section" id="projects">
        <h2>Projects</h2>

        <div className="project-grid">
          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-world"></i>
            </div>

            <h3>Service Website</h3>

            <p>Design 1</p>

            <span>Coming Soon</span>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-device-gamepad-2"></i>
            </div>

            <h3>Memory Game</h3>

            <p>Design 2</p>

            <span>Coming Soon</span>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-shopping-cart"></i>
            </div>

            <h3>E-Commerce Site</h3>

            <p>Design 3</p>

            <span>Coming Soon</span>
          </div>

          <div className="card">
            <div className="icon-circle">
              <i className="ti ti-chart-bar"></i>
            </div>

            <h3>Analytics Dashboard</h3>

            <p>Design 4</p>

            <span>Coming Soon</span>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 Kai Wen Yuan Portfolio</p>
      </footer>
    </main>
  );
}

export default App;