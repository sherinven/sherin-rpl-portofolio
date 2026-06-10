import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import aboutPhoto from "../assets/about.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function About() {
  const textRef = useRef(null);

  useEffect(() => {
    const text =
      "Hi! I’m Sherin Ven Florennita, a Frontend Developer and student at SMK Tri Ratna, majoring in Software Engineering (RPL). I enjoy building modern and responsive websites, with a focus on clean, comfortable, and user-friendly UI/UX. I am also interested in UI/UX design and enthusiastic about continuously learning new technologies and improving my skills in web development.";

    ScrollTrigger.create({
      trigger: ".about",
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(textRef.current, {
          duration: 6,
          text: text,
          ease: "none",
        });
      },
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-image">
        <img src={aboutPhoto} alt="About Me" />
      </div>

      <div className="about-content">
        <h2>About Me</h2>

        {/* WAJIB KOSONG */}
        <p ref={textRef}></p>

        <div className="skills">
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>GitHub</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
}