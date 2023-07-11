import React, { useState, useEffect } from "react";
import me from "../../assets/images/me.png";

export const About = () => {
  const introParagraph =
    "I am currently a student at University of Waterloo studying Computer Science (Coop). " +
    "Over the years I have developed skills in mostly fullstack development and am gaining a lot interest in game development. " +
    "If you see anything that impresses you or you'd like to work together let me know! ";

  const [leftIntroContainer, setLeftIntroContainer] = useState(
    "left-introduction-container-off"
  );
  const [rightImageContainer, setRightImageContainer] = useState(
    "right-image-container-off"
  );
  const [verticalDivider, setVerticalDivider] = useState(
    "top-vertical-divider-off"
  );

  const listenToScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const aboutOffset =
      document.getElementsByClassName("about-container")[0].offsetTop -
      windowScroll -
      300;
    if (aboutOffset <= 0) {
      setVerticalDivider("top-vertical-divider-on");
      setTimeout(() => {
        setLeftIntroContainer("left-introduction-container-on");
        setRightImageContainer("right-image-container-on");
      }, 500);
    } else {
      /*
      setLeftIntroContainer("left-introduction-container-off");
      setRightImageContainer("right-image-container-off");
      setVerticalDivider("top-vertical-divider-off");
      */
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <div className="about-container">
      <div className="left-container">
        <div className={leftIntroContainer}>
          <div className="intro-text-container">
            <div className="intro-description-container">
              <div className="intro-header-container">
                <h2>Hello, </h2>
              </div>
              <div className="intro-paragraph-container">
                <h3>{introParagraph}</h3>
              </div>
            </div>
            <div className="intro-contact-container">
              <h4>Phone: (905)-512-7876</h4>
              <h4>Email: &nbsp;
                <a 
                  href="mailto:ss2liang@uwaterloo.ca"
                  style={{color:"var(--baby-powder)"}}>
                   ss2liang@uwaterloo.ca
                </a>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className={verticalDivider}></div>
      <div className="right-container">
        <div className={rightImageContainer}>
          <div className="right-image">
            <img src={me} height="100%" alt="me" />
          </div>
          <div className="background-border-1">
            <div className="background-border-fill"></div>
          </div>
          <div className="background-border-2">
            <div className="background-border-fill"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
