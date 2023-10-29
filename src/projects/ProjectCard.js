import React from "react";

import GithubProjectCard from "./GithubProjectCard";
import GenericProjectCard from "./GenericProjectCard";

const ProjectCard = ({ project }) => {
  if (project.github) {
    return <GithubProjectCard project={ project } />;
  }
  return <GenericProjectCard project={ project } />;
};

export default ProjectCard;
