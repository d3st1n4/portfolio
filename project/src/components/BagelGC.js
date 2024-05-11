import React from "react";
import "../styles/BagelGC.css";

function BagelGC() {
  return (
    <div id="BagelGC">
      <div className="projectpg-container">
        <div className="intro-container">
          <div className="project-img">
            <img
              src="/images/DW (3).png"
              alt="Project Image"
              aria-label="Bagel Gourmet Café project image"
            />
          </div>
          <div className="project-header">
            <div className="header-cont">
              <h2>Bagel Gourmet Café</h2>
              <p className="subtitle">HTML/CSS + Figma + Design</p>
            </div>
            <div className="caption-div">
              <h3>Responsive re-design for College Hill's staple bagel spot</h3>
            </div>
          </div>
        </div>
        <div className="project-body">
          <p>
            If you’re a Brown University student or a Providence local who
            frequents College Hill, you are no stranger to Bagel Gourmet Café.
            The staple bagel spot for anyone by Thayer Street on a weekday
            morning, the local business offers freshly baked bagels at a
            reasonable price.<br></br>
            <br></br>Despite the convenience of its storefront, Bagel Gourmet
            also had a website through which users could view their menu,
            contact them, place an order, and deliver, among other things. While
            it was functional, the platform was beginning to show its age and
            lacked responsiveness. Thus, I decided to redesign it into a
            continuous webpage while maintaining its functionality.
          </p>
          <div className="ss-div">
            <img
              className="bgc-desktop"
              src="/images/bgc.png"
              alt="picture of Bagel Gourmet Café desktop website view"
            />
          </div>
          <div className="analysis-container">
            <h2>I. Finding Problems</h2>
            <p>
              I began by documenting my observations of the interface based on
              its efficiency, learnability and memorability.
            </p>
            <div className="img-contain">
              <img
                src="/images/Screenshot 2024-05-07 at 12.09.46 PM.png"
                alt="accessibility analysis table"
              />
            </div>
            <p>
              Additionally, the website had several critical accessibility
              issues as noted by WebAIM Wave:
            </p>
            <ul>
              <li>Significant contrast errors</li>
              <li>Screenreader incompatibility</li>
              <li>Unofficial page title and language and empty headers</li>
            </ul>
            <p>
              After gathering this data, I had more clarity on the features I
              needed to implement and redesign.
            </p>
          </div>
          <div className="design-ideation">
            <h2>II. Sketches</h2>
            <p>
              Once I settled on the primary design issues with the Bagel Gourmet
              Café website, I started sketching my initial webpage design ideas.
              With the navigation bar being a primary concern in addition to the
              product marketing, I focused on rearranging the navigation and
              pictures.
            </p>
            <div className="sketch-imgs">
              <img
                src="/images/9sketch.png"
                alt="9-sketch design ideation sketch"
              />
              <img
                src="/images/fullsketch.png"
                alt="rough sketch of wireframe"
              />
              <img
                src="/images/squaresketch.png"
                alt="full-size wireframe sketch"
              />
            </div>
            <p>
              I then transferred these initial sketches to Figma to develop the
              low-fidelity wireframes for desktop, tablet and mobile screens.
            </p>
            <div className="wf-container">
              <h2>III. Wireframing & Implementation</h2>
              <div className="wf-imgs">
                <img
                  className="desktop-img"
                  src="/images/CS1300 - Responsive Design LoFi Wireframes w_ Notes.png"
                  alt="low-fidelity desktop wireframe"
                />
                <img
                  className="tablet-img"
                  src="/images/mockuptablet.jpg"
                  alt="low-fidelity tablet wireframe"
                />
                <img
                  className="mobile-img"
                  src="/images/mockupmobile.png"
                  alt="low-fidelity mobile wireframe"
                />
              </div>
              <p>
                Then, I moved on to implementing the high-fidelity wireframes.
              </p>
              <div className="hf-imgs">
                <img
                  className="hf-dt"
                  src="/images/bgcdesktop.png"
                  alt="high-fidelity desktop wireframe"
                />
                <img
                  className="hf-tablet"
                  src="/images/bgctablet.png"
                  alt="high-fidelity tablet wireframe"
                />
                <img
                  className="hf-mobile"
                  src="/images/bgcmobile.png"
                  alt="high-fidelity mobile wireframe"
                />
              </div>
              {/* Insert GIF of webpage here */}
            </div>
            <div className="style-guide">
              <p>
                I aimed to maintain the original website colors while creating a
                higher color contrast for greater accessibility. This is
                reflected in the style guide, with red being the boldest color
                and whites and greys being used to complement it. With my
                redesign featuring more images, this style guide ensures minimal
                color clashing.
              </p>
              <img src="/images/styleguide.png" alt="final style guide" />
            </div>
            <div className="takeaways-container">
              <h2>IV. Takeaways</h2>
              <p>
                While these designs reflect a more condensed implementation
                because of the project parameters, the complete website
                implementation would include complete menu offerings that extend
                beyond the Customer Favorites section. <br></br>
                <br></br>
                In completing this redesign, I learned a great deal, which can
                be summarized in the following takeaways:
              </p>
              <ul>
                <li>
                  <ol>
                    Webpage responsiveness is extremely important for web
                    accessibility but also increases opportunities for online
                    platforms to garner success and reach.
                  </ol>
                </li>
                <li>
                  <ol>
                    The project parameters and limited time frame greatly
                    limited the comprehensiveness of the redesign
                  </ol>
                </li>
                <li>
                  <ol>
                    It’s best to plan during the initial design phase to
                    maintain consistency when designing for different screens.
                  </ol>
                </li>
              </ul>
            </div>
            <div className="end-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BagelGC;
