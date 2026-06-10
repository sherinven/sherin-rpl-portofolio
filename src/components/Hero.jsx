import { useEffect, useRef } from "react";
import profile from "../assets/profile.png";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import { FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const nameRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(nameRef.current, {
      duration: 1.5,
      text: "Sherin",
      ease: "none",
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h2>Hi, I'm</h2>

        {/* 👇 ini yang jadi typing */}
        <h1 ref={nameRef}></h1>

        <h3>Frontend Developer</h3>

        <p>
          Frontend Developer | UI/UX Enthusiast | Student at SMK Tri Ratna(RPL)
I build modern and responsive websites with a focus on clean UI/UX, and I am continuously learning new web technologies.
        </p>

        <div className="socials">
          <a href="https://www.instagram.com/sher.v.florr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://github.com/sherinven" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="mailto:sherin.florentina@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <div className="buttons">
          <button onClick={() => window.open("mailto:sherin.florentina@gmail.com")}>
            Contact Me
          </button>

          <button
            className="outline"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({
                behavior: "smooth",
              })
            }
          >
            My Projects
          </button>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle"></div>
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>

        <img src={profile} alt="Sherin" />
      </div>
    </section>
  );
}