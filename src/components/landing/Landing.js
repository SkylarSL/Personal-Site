import React, { useEffect, useState } from "react";
import { Button } from "../buttons/Buttons";

export const Landing = () => {
  const [nameContainer, setNameContainer] = useState("name-container-off");
  const [horizontalDivider, setHorizontalDivider] = useState(
    "horizontal-divider-off"
  );
  const [quoteContainer, setQuoteContainer] = useState(
    "landing-quote-container-off"
  );
  const listenToScroll = () => {
    const windowScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    const landingOffset =
      document.getElementsByClassName("landing-container")[0].offsetTop -
      windowScroll -
      300;

    if (landingOffset <= 0) {
      setNameContainer("name-container-on");

      let len = document.getElementsByClassName("landing-button-off").length;
      (function myLoop(i) {
        setTimeout(function () {
          if (document.getElementsByClassName("landing-button-off")[i]) {
            document.getElementsByClassName("landing-button-off")[i].className =
              "landing-button-on";
          }
          --i;
          if (i > -1) {
            myLoop(i);
          }
        }, 200);
      })(len);

      setTimeout(() => {
        setHorizontalDivider("horizontal-divider-on");
      }, 850);

      setTimeout(() => {
        setQuoteContainer("landing-quote-container-on");
      }, 1500);
    } else {
      /*
      setHorizontalDivider("horizontal-divider-off");
      setNameContainer("name-container-off");
      for (
        let i = 0;
        i < document.getElementsByClassName("landing-button-on").length;
        i++
      ) {
        if (document.getElementsByClassName("landing-button-on")[i]) {
          document.getElementsByClassName("landing-button-on")[i].className =
            "landing-button-off";
        }
      }
      setQuoteContainer("landing-quote-container-off");
      */
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  });

  return (
    <div className="landing-container">
      <div className="landing-top-container">
        <div className={nameContainer}>
          <h2>Get to know me!</h2>
        </div>
        <div className="landing-buttons-container">
          <Button class="landing-button-off" type="Github" />
          <Button class="landing-button-off" type="Linkedin" />
          <Button class="landing-button-off" type="Resume" />
        </div>
      </div>
      <div className={horizontalDivider}></div>
      <div className={quoteContainer}>
        <h3>
          "There is no shame in falling down.
          <br /> True shame is to not stand up again."
        </h3>
      </div>
    </div>
  );
};
