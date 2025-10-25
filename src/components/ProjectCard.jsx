import React from "react";
import Projects from "./Projects";
import "../css/ProjectCard.css";
import Button from "./Button";

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-background">
        <img
          className="project-image"
          src={project.image}
          alt={project.title}
        />
      </div>
      <div className="project-text">
        <div className="project-title">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
        <div className="project-button">
          <Button Text={'</>'}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
