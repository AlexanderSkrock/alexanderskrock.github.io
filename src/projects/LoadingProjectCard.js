import { Spinner } from "grommet";

import ProjectCard from "./ProjectCard";

const LoadingProjectCard = ({ size }) => {
  const project = {
    name: <Spinner />,
    description: <Spinner />
  }
  return <ProjectCard size={ size } project={ project }/>;
};

export default LoadingProjectCard;
