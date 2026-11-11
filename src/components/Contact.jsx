
import { useEffect, useRef } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaDiscord,
} from "react-icons/fa";

export default function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const elements = contactRef.current?.querySelectorAll(
      ".contact h2, .contact-card"
    );

    if (!elements) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact" id="contact" ref={contactRef}>
      <h2>Contact Me</h2>

      <div className="contact-container">
        <a
          href="https://wa.me/6289581572071"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaWhatsapp />
          <span>WhatsApp</span>
        </a>

        <a
          href="https://www.instagram.com/sher.v.florr"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaInstagram />
          <span>@sher.v.florr</span>
        </a>

        <div className="contact-card">
          <FaDiscord />
          <span>luvity__12</span>
        </div>

        <a
          href="https://github.com/sherinven"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href="mailto:sherin.florentina@gmail.com"
          className="contact-card"
        >
          <FaEnvelope />
          <span>Email</span>
        </a>
      </div>
    </section>
  );
}
