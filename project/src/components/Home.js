import React, { useEffect } from "react";
import Typed from "typed.js";
import "../styles/Home.css";
import Projects from "../components/Projects.js";

function Home() {
  useEffect(() => {
    var typed = new Typed(".auto-type", {
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

  return (
    <div id="DW">
      <div className="home-container">
        <div className="img-cont">
          <img alt="selfie of me smiling :)" src="/images/IMG_3035.jpg"></img>
        </div>
        <div className="text-cont">
          <h1>
            Hello world,<br></br>I’m <span className="auto-type"></span>!
          </h1>
          <p>
            a Jamaican-American New Yorker and aspiring web developer with a
            desire to forge equitable systems through the intersection between
            technology and public service.
          </p>
        </div>
        <div className="down-btn">
          <a href="#Projects">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              class="bi bi-chevron-down"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="project-div"></div>
      <Projects id="#Projects" />
    </div>
  );
}

export default Home;
