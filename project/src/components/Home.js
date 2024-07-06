import React, { useEffect } from "react";
import Typed from "typed.js";
import Lottie from "react-lottie";
import animationData from "../assets/downArrow.json";
import "../styles/Home.css";
import Projects from "./Projects";

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: [
        "Destiny Wilson",
        "Driven",
        "Versatile",
        "Detail-oriented",
        "Curious",
      ],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("Projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="DW">
      <div className="home-container">
        <div className="img-cont">
          <img alt="selfie of me smiling :)" src="/images/IMG_3035.jpg"></img>
        </div>
        <div className="text-cont">
          <h1>
            Hello world,<br></br>I’m{" "}
            <span className="auto-type" aria-label="auto-typed text"></span>!
          </h1>
          <p>
            a Jamaican-American New Yorker and aspiring web developer with a
            desire to forge equitable systems through the intersection between
            technology and public service.
          </p>
        </div>
        <div
          className="down-btn"
          onClick={scrollToProjects}
          style={{ cursor: "pointer" }}
        >
          <Lottie options={defaultOptions} height={100} width={150} />
        </div>
      </div>
      <div className="project-div"></div>
      <Projects id="Projects" />
    </div>
  );
};

export default Home;
