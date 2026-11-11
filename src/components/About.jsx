
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

import aboutPhoto from "../assets/about.png";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export default function About() {
  const aboutRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const text =
        "Hi! I’m Sherin Ven Florennita, a Frontend Developer and student at SMK Tri Ratna, majoring in Software Engineering (RPL). I enjoy building modern and responsive websites, with a focus on clean, comfortable, and user-friendly UI/UX. I am also interested in UI/UX design and enthusiastic about continuously learning new technologies and improving my skills in web development.";

      const skills = skillsRef.current.children;

      gsap.set(textRef.current, { text: "" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Photo animation
      tl.fromTo(
        imageRef.current,
        {
          x: -70,
          opacity: 0,
          scale: 0.85,
          rotate: -4,
        },
        {
          x: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Heading animation
      tl.fromTo(
        titleRef.current,
        {
          x: 45,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.65"
      );

      // Typing text animation
      tl.to(textRef.current, {
        duration: 4,
        text: text,
        ease: "none",
      });

      // Skills animation
      tl.fromTo(
        skills,
        {
          opacity: 0,
          y: 25,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          onComplete: () => {
            skillsRef.current?.classList.add("skills-visible");
          },
        },
        "-=0.5"
      );
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className="about-image">
        <img
          ref={imageRef}
          src={aboutPhoto}
          alt="About Sherin"
        />
      </div>

      <div className="about-content">
        <h2 ref={titleRef}>About Me</h2>

        <p ref={textRef}></p>

        <div className="skills" ref={skillsRef}>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
          <span>React</span>
          <span>Flutter</span>
          <span>Dart</span>
          <span>GitHub</span>
          <span>MockAPI</span>
          <span>Figma</span>
        </div>
      </div>
    </section>
  );
}
