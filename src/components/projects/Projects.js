import React, { useState } from "react";
import ProjectsDescList from "./ProjectsDescList";
import { SingleProjectDisplay } from "./SingleProjectDisplay";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
//import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
//import WebIcon from "@material-ui/icons/Web";

export const Projects = () => {
  const [projectId, setProjectId] = useState(-1);
  let projectsDescList = ProjectsDescList.slice(0).reverse();

  const renderProject = projectsDescList.map((project, index) => (
    <div
      key={index}
      className="project-item-container"
      onClick={() => setProjectId(project.id)}
    >
      <div
        className={`project-tab ${
          project.id === projectId
            ? "project-perm-colourful-background"
            : "project-colourful-background"
        }`}
      >
        <ArrowForwardIosIcon />
      </div>

      <div className="project-item-title">
        <h1>{project.title}</h1>
      </div>
    </div>
  ));

  return (
    <div className="projects-container">
      <div className="projects-list-container">
        <div className="projects-list">{renderProject}</div>
      </div>
      <div className="bot-vertical-divider"></div>
      <SingleProjectDisplay id={projectId} />
    </div>
  );
};
