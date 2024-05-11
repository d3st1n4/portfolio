import React from "react";
import "../styles/BISH.css";

function BISH() {
  return (
    <div id="BISH">
      <div className="projectpg-container">
        <div className="intro-container">
          <div className="project-img">
            <img src="/images/DW (4).gif" alt="Project Image" />
          </div>
          <div className="project-header">
            <div className="head-cont">
              <h2>Brown Intern Summer Housing - Boston</h2>
              <p className="subtitle">TypeScript + HTML/CSS + Figma + Design</p>
            </div>
            <div className="caption-div">
              <h3>Responsive re-design for College Hill's staple bagel spot</h3>
            </div>
          </div>
        </div>
        <div className="project-body">
          <p>
            For students in New England, Boston is a hotspot for summer
            internship opportunities, especially for students at Brown
            University. However, amidst the excitement of professional growth,
            the looming concern of housing often casts a shadow over these
            endeavors. Working in a group of three to rectify this issue, Brown
            Intern Summer Housing (BISH) - Boston was born.
            <br></br>
            <br></br>BISH - Boston is a housing locator application made for
            students at Brown University seeking summer intern housing in the
            Boston area. This housing locator application also extends its
            utility to landlords, enabling them to post listings for their
            rental homes. Powered by a TypeScript/React frontend, Java backend,
            and Firestore database, complemented by Google Authentication for
            registration and login, the platform ensures a seamless and secure
            user experience.
            <br></br>
            <br></br>My primary focus within the project was centered on the
            aesthetics and functionality of the application. I took charge of
            designing and implementing the application’s styling and integrating
            the Mapbox API to provide users with dynamic visualization of
            housing listings, enhancing their browsing experience.
          </p>
          <div className="design-container">
            <h2>I. Development</h2>
            <p>
              With limited program development time, my team drafted a project
              plan outlining the project structure. We documented the intended
              interaction between each webpage element and intended data
              structure usage.
            </p>
            <div className="bishsketch-contain">
              <img src="/images/projectp-sketch.jpeg" alt="design-table" />
            </div>
            <p>
              I then went on to draft a low-fidelity wireframe of the website
              reflecting the navigation experience of two users:
            </p>
            <ul>
              <li>The intern</li>
              <li>The landlord</li>
            </ul>
            <div className="bishwf-contain">
              <img src="/images/bishwf.png" />
            </div>
          </div>
          <div className="design-ideation">
            <div className="wf-container">
              <h2>II. Implementation</h2>
              <p>
                Afterward, we moved on to implementing the website based on
                these preliminary designs. While the final product largely
                replicated these wireframes, we utilized additional colors such
                as navy blue for contrast and added an additional login for
                admin for greater platform management functionality. We also
                implemented error catching and security features which are
                reflected in the following pictures.
              </p>
              <div className="hifi-imgs">
                <img className="hf-dt" src="/images/BISHfinal.png" />
              </div>
            </div>
            <div className="takeaways-container">
              <h2>III. Takeaways</h2>
              <p>
                This project was my first time designing a web application using
                TypeScript, HTML/CSS and React from development to
                implementation. Thus, I had several takeaways after finishing
                this project, including the following:
              </p>
              <ul>
                <li>
                  <ol>
                    Online resources are your friend when utilizing custom
                    features like sliders and buttons—and they can save hours of
                    time!
                  </ol>
                </li>
                <li>
                  <ol>
                    Test all dimensions of your website before finishing styling
                    (i.e. make sure it’s responsive!)
                  </ol>
                </li>
                <li>
                  <ol>
                    Check color selection on light and dark modes before
                    implementation to ensure high visibility and accessibility
                  </ol>
                </li>
                <li>
                  <ol>
                    I love front-end programming and am eager to learn more so I
                    can pursue it as a career :D!
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

export default BISH;
