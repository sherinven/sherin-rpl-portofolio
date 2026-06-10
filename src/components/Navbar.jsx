export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <div className="logo-circle"></div>
        <h2>Rin</h2>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About</a>
        </li>

        <li>
          <a href="#projects">Projects</a>
        </li>
      </ul>

      <a href="#contact">
        <button className="contact-btn">
          Contact
        </button>
      </a>
    </nav>
  );
}