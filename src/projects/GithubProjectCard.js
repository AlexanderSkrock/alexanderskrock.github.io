import { useEffect, useState } from "react";

import { DocumentMissing, Github } from "grommet-icons";

import LoadingProjectCard from "./LoadingProjectCard";
import GenericProjectCard from "./GenericProjectCard";

const githubRepoApiUrl = "https://api.github.com/repos"

const loadGithubProject = (project) => {
  return fetch(githubRepoApiUrl + new URL(project.github).pathname)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error("Unable to load project from Github");
      }
    })
    .then(json => ({
      icon: json.owner.avatar_url,
      name: json.full_name,
      description: json.description,
      links: [{ icon: Github, url: json.html_url }],
    })).catch(() => ({
      ...project,
      icon: <DocumentMissing color="red" />,
      description: "Failed to load details from Github",
      links: [{ icon: Github, url: project.github }],
    }));
}

const GithubProjectCard = ({ project }) => {
  const [githubProject, setGithubProject] = useState();
  useEffect(() => {
    if (project.github) {
      loadGithubProject(project).then(githubProject => setGithubProject({ ...project, ...githubProject }));
    } else {
      setGithubProject(project);
    }
  }, [project]);

  return githubProject
    ? <GenericProjectCard project={ githubProject} />
    : <LoadingProjectCard />;
}

export default GithubProjectCard;
