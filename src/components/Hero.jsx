
import { useEffect, useRef } from "react";
import profile from "../assets/profile.png";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {
  FaInstagram,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";

gsap.registerPlugin(TextPlugin);

export default function Hero() {
  const heroRef = useRef(null);
  const greetingRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(greetingRef.current, {
        y: 35,
        opacity: 0,
        duration: 0.8,
      })
        .to(nameRef.current, {
          duration: 1.4,
          text: "Sherin",
          ease: "none",
        })
        .from(roleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
        }, "-=0.3")
        .from(textRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.8,
        }, "-=0.3")
        .from(".hero .socials a", {
          y: 20,
          opacity: 0,
          stagger: 0.18,
          duration: 0.6,
        }, "-=0.2")
        .from(".hero .buttons button", {
          y: 20,
          opacity: 0,
          stagger: 0.18,
          duration: 0.6,
        }, "-=0.2")
        .from(imageRef.current, {
          x: 70,
          opacity: 0,
          scale: 0.9,
          duration: 1.1,
        }, 0);

      // Circle animation
      gsap.to(".hero .circle", {
        scale: 1.06,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Bubble animations
      gsap.to(".hero .bubble1", {
        y: -20,
        x: 10,
        duration: 3.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero .bubble2", {
        y: 20,
        x: -10,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".hero .bubble3", {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="hero-left">
        <h2 ref={greetingRef}>Hi, I'm</h2>

        <h1 ref={nameRef}></h1>

        <h3 ref={roleRef}>Frontend Developer</h3>

        <p ref={textRef}>
          Frontend Developer | UI/UX Enthusiast | Student at SMK
          Tri Ratna (RPL). I build modern and responsive websites
          with a focus on clean UI/UX, and I am continuously
          learning new web technologies.
        </p>

        <div className="socials">
          <a
            href="https://www.instagram.com/sher.v.florr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/sherinven"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="mailto:sherin.florentina@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <div className="buttons">
          <button
            onClick={() =>
              window.open("mailto:sherin.florentina@gmail.com")
            }
          >
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

        <img
          ref={imageRef}
          src={profile}
          alt="Sherin"
        />
      </div>
    </section>
  );
}
