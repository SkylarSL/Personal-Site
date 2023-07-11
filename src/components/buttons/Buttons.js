import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import DescriptionIcon from "@material-ui/icons/Description";
import GetAppIcon from "@material-ui/icons/GetApp";
import WebIcon from "@material-ui/icons/Language";
import { Resume } from "../../assets";
import { Chronododge, Campfire } from "../../assets";

import "./Buttons.css";

export const Button = (props) => {
  let game;
  switch (props.game) {
    case "Chronododge":
      game = Chronododge;
      break;
    case "Campfire":
      game = Campfire;
      break;
    default:
  }

  switch (props.type) {
    case "Github":
      return (
        <div className={props.class}>
          <a href={props.gitLink} target="_blank" rel="noopener noreferrer">
            <button className="circle-button">
              <GitHubIcon />
            </button>
          </a>
        </div>
      );
    case "Linkedin":
      return (
        <div className={props.class}>
          <a
            href="https://www.linkedin.com/in/skylar-samson-liang-891644164/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="circle-button">
              <LinkedInIcon />
            </button>
          </a>
        </div>
      );
    case "Resume":
      return (
        <div className={props.class}>
          <a href={Resume} target="_blank" rel="noopener noreferrer">
            <button className="circle-button">
              <DescriptionIcon />
            </button>
          </a>
        </div>
      );
    case "Download":
      return (
        <div className={props.class}>
          <a href={game} download>
            <button className="circle-button">
              <GetAppIcon />
            </button>
          </a>
        </div>
      );
    case "Web":
      return (
        <div className={props.class}>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="circle-button">
              <WebIcon />
            </button>
          </a>
        </div>
      );
    default:
      return <div>Give me a type!</div>;
  }
};
