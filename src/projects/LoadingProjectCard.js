import { Spinner } from "grommet";

import ProjectCard from "./ProjectCard";

const LoadingProjectCard = () => {
  const project = {
    name: <Spinner />,
    description: <Spinner />
  }
  return <ProjectCard project={ project }/>;
};

export default LoadingProjectCard;
