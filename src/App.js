import React, { useState, useEffect } from "react";
import "./App.css";
import "./components/landing/Landing.css";
import "./components/about/About.css";
import "./components/hero/Hero.css";
import "./components/projects/Projects.css";

import { About, Hero, Landing, Projects } from "./components/index";

function App() {
  const [projHeaderAnim, setProjHeaderAnim] = useState(
    "large-horizontal-divider-off"
  );
  const [projBodyAnim, setProjBodyAnim] = useState(
    "project-body-container-off"
  );

  const listenToScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const projectOffset =
      document.getElementsByClassName("project-header-container")[0].offsetTop -
      windowScroll -
      500;

    if (projectOffset <= 0) {
      setProjHeaderAnim("large-horizontal-divider-on");
      setTimeout(() => {
        setProjBodyAnim("project-body-container-on");
      }, 500);
    } else {
      /*
      setProjHeaderAnim("large-horizontal-divider-off");
      setProjBodyAnim("project-body-container-off");
      */
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <div className="App">
      <div>
        <meta name="viewport" content="width=1000, initial-scale=1"></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        ></link>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        ></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400&display=swap"
          rel="stylesheet"
        ></link>

        <div className="App-header">
          <Hero />
        </div>
        <About />
        <Landing />
        <div className="project-header-container">
          <div className={`${projHeaderAnim}`}>
            <h1>Projects/Learning</h1>
          </div>
        </div>
        <div className={`${projBodyAnim}`}>
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;
