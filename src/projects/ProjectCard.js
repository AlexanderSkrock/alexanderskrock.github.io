import React from "react";

import GithubProjectCard from "./GithubProjectCard";
import GenericProjectCard from "./GenericProjectCard";

const ProjectCard = ({ size, project }) => {
  if (project.github) {
    return <GithubProjectCard size={ size } project={ project } />;
  }
  return <GenericProjectCard size={ size } project={ project } />;
};

export default ProjectCard;
