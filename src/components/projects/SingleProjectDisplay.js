import React, { useEffect, useState, useRef } from "react";
import ProjectsDescList from "./ProjectsDescList";
import { Button } from "../buttons/Buttons";

export const SingleProjectDisplay = (props) => {
  let project = useRef({
    id: -1,
    type: "",
    title: "",
    example: "",
    exampleType: "",
    git: 0,
    gitLink: "",
    webLink: "",
    downloadLink: "",
    tech: "",
  });

  const [initialAnim, setInitialAnim] = useState("single-project-anim-on");
  const [titleAnim, setTitleAnim] = useState("single-project-anim-off");
  const [descAnim, setDescAnim] = useState("single-project-anim-off");
  const [techAnim, setTechAnim] = useState("single-project-anim-off");
  const [exampleAnim, setExampleAnim] = useState("single-project-anim-off");
  const [buttonAnim, setButtonAnim] = useState("single-project-anim-off");

  const DetermineExample = (type) => {
    switch (type) {
      case "video":
        return (
          <>
            <p>
              *Chrome does not load the right video sometimes, click on a
              non-game project and come back.*
            </p>
            <video controls width="60%" muted>
              <source src={project.current.example} type="video/mp4"></source>
            </video>
          </>
        );
      case "image":
        return (
          <>
            <img width="60%" src={project.current.example} alt="" />
          </>
        );
      default:
        return <h3>No example to display</h3>;
    }
  };

  useEffect(() => {
    setInitialAnim("single-project-anim-off");
    setTitleAnim("single-project-anim-off");
    setDescAnim("single-project-anim-off");
    setTechAnim("single-project-anim-off");
    setExampleAnim("single-project-anim-off");
    setButtonAnim("single-project-anim-off");

    setTimeout(() => {
      if (ProjectsDescList[props.id]) {
        project.current = ProjectsDescList[props.id];
      }
      setInitialAnim("single-project-anim-on");
      setTimeout(() => {
        setTitleAnim("single-project-anim-on");
      }, 100);
      setTimeout(() => {
        setDescAnim("single-project-anim-on");
      }, 200);
      setTimeout(() => {
        setTechAnim("single-project-anim-on");
      }, 300);
      setTimeout(() => {
        setExampleAnim("single-project-anim-on");
      }, 400);
      setTimeout(() => {
        setButtonAnim("single-project-anim-on");
      }, 500);
    }, 500);
  }, [props.id]);

  switch (project.current.id) {
    case -1:
      return (
        <div className="single-project-container-background">
          <div className={`single-project-container-default ${initialAnim}`}>
            <h1>Click on a project.</h1>
            <h1>Scroll on the left for more.</h1>
          </div>
        </div>
      );
    default:
      return (
        <div className="single-project-container-background">
          <div className="single-project-container">
            <div>
              <div className={`single-project-title ${titleAnim}`}>
                <h1>{project.current.title}</h1>
              </div>
            </div>
            <div className={`single-project-desc ${descAnim}`}>
              <h3>{project.current.desc}</h3>
            </div>
            <div className={`single-project-tech ${techAnim}`}>
              <h3>Tech stack: {project.current.tech}</h3>
            </div>
            <div className={`single-project-example ${exampleAnim}`}>
              {DetermineExample(project.current.exampleType)}
            </div>
            <div className={`single-project-button-container ${buttonAnim}`}>
              {project.current.git ? (
                <Button type="Github" gitLink={project.current.gitLink} />
              ) : (
                <></>
              )}
              {project.current.type === "game" ? (
                <Button type="Download" />
              ) : (
                <></>
              )}
              {project.current.type === "web" ? (
                <Button type="Web" link={project.current.webLink} />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      );
  }
};
