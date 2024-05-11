import React from "react";
import "../styles/AgenDo.css";

function AgenDo() {
  return (
    <div id="AgenDo">
      <div className="projectpg-container">
        <div className="intro-container">
          <div className="project-img">
            <img src="/images/DW (2).png" alt="Project Image" />
          </div>
          <div className="project-header">
            <div className="header-cont">
              <h2>AgenDo</h2>
              <p className="subtitle">HTML/CSS + REACT + DESIGN</p>
            </div>
            <div className="caption-div">
              <h3>The agenda that gets things done</h3>
            </div>
          </div>
        </div>
        <div className="project-body">
          <p>
            Whether you’re a student or an industry professional with a calendar
            full of commitments, people are always looking for ways to remember
            their tasks. While some prefer the convenience of their Notes app,
            others use applications like Google Keeps. I decided to expand on
            these to-do list offerings by creating a website called “AgenDo.”
          </p>
          <div className="analysis-container">
            <h2>I. Competitive Analysis</h2>
            <p>
              To start off the development process, I conducted a competitive
              analysis with three websites,{" "}
              <a href="https://www.goat.com/?utm_source=google_ads&utm_medium=cpc&utm_campaign=20931280770&utm_content=159171407033&gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQRNNdnASTJ4g7dX90w8q6wCYHjeNdtZwlmQQW-jUNKA4qmMWG02Hd8aAm8fEALw_wcB">
                GOAT
              </a>
              ,{" "}
              <a href="https://edstem.org/us/courses/54347/discussion/">
                Ed Discussion
              </a>
              , and <a href="https://www.asos.com/us/">ASOS</a>, to assess
              common aggregators and their implementations. I ensured to select
              webpages with completely different designs and functions to
              identify the most essential elements.
            </p>
            <div className="img-border">
              <div className="img-container">
                <img src="/images/goat.png" alt="GOAT" />
                <img src="/images/ed.png" alt="Ed Discussion" />
                <img src="/images/asos.png" alt="ASOS" />
              </div>
            </div>
            <p>
              The table below summarizes the features of each company’s item
              favoriting and saving functionalities.
            </p>
            <div className="table-imgcont">
              <img
                src="/images/analysistable.png"
                className="table-img"
                alt="Analysis Table"
              />
            </div>
            <p>
              Based on these findings, I decided that my to-do list program
              should have the following features:
            </p>
            <ul>
              <li>
                <b>Dedicated Webpage</b> so users can efficiently access the
                list
              </li>
              <li>
                <b>Number of items</b> to allow users to know the number of list
                items they have
              </li>
              <li>
                <b>Item Preview</b> so users can easily view their list items
                without a click
              </li>
              <li>
                <b>Sorting</b> so users can organize data based on their needs
              </li>
              <li>
                <b>Filtering</b> to enable users to reduce the options they are
                considering
              </li>
            </ul>
          </div>
          <div className="design-ideation">
            <h2>II. Design Ideation</h2>
            <p>
              After settling on AgenDo’s features, I started sketching webpage
              design ideas. With each sketch, I focused on different layouts for
              the aggregator and the menu options.
            </p>
            <div className="sketch-cont">
              <img
                src="/images/developmentsketch.png"
                className="sketch-img"
                alt="Development Sketch"
              />
            </div>
            <p>
              I particularly gravitated towards the left-to-right layout because
              it reflected the American reading experience, making the program
              more intuitive for that primary demographic. It also allowed space
              to be maximized by displaying the website components without
              forcing the user to scroll.
              <br></br>
              <br></br>
              Afterward, I built on these sketches in Figma. I wanted the
              program to use fun colors to inspire user engagement and arouse
              excitement regarding handling tasks and commitments.
            </p>
            <div className="figma-cont">
              <img
                src="/images/developmentfigma.png"
                className="figma-img"
                alt="Development Figma"
              />
            </div>
          </div>
          <div className="implementation-container">
            <h2>III. Implementation</h2>
            <p>
              Based on findings from my competitive analysis and my designs, I
              used React, HTML and CSS to implement AgenDo with filter and
              sorting functionality.
            </p>
            <div className="agendo-gif">
              <img src="/images/agendo2.gif" alt="agendo gif" />
            </div>
          </div>
          <div className="takeaways-container">
            <h2>IV. Takeaways</h2>
            <ul>
              <li>
                <ol>
                  React creates more versatile programs and optimized
                  programming experiences.
                </ol>
              </li>
              <li>
                <ol>
                  Observe what already exists before making something new;
                  that’s how we get the best products!
                </ol>
              </li>
              <li>
                <ol>
                  Consider a more muted color scheme for those sensitive to
                  high-contrast.
                </ol>
              </li>
            </ul>
          </div>
          <div className="end-div"></div>
        </div>
      </div>
    </div>
  );
}

export default AgenDo;
