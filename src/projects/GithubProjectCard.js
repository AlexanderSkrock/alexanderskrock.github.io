import { useEffect, useState } from "react";
import { Avatar, Box, Paragraph, Text } from "grommet";

import LoadingProjectCard from "./LoadingProjectCard";
import GenericProjectCard from "./GenericProjectCard";
import { DocumentMissing } from "grommet-icons";

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
      name: (
        <Box direction="row" gap="small" align="center">
          <Avatar src={ json.owner.avatar_url } />
          <Text weight="bold"> { json.full_name } </Text>
        </Box>
      ),
      description: <Paragraph>{json.description}</Paragraph>,
      github: json.html_url,
    }));
}

const GithubProjectCard = ({ size, project }) => {
  const [githubProject, setGithubProject] = useState();
  useEffect(() => {
    if (project.github) {
      loadGithubProject(project).then(setGithubProject).catch(() => setGithubProject({
        ...project,
        description: (
          <Box direction="row" gap="small" align="center">
            <DocumentMissing color="red" />
            <Paragraph>Failed to load details from Github</Paragraph>
          </Box>
        ),
      }));
    } else {
      setGithubProject(project);
    }
  }, [project]);

  return githubProject
    ? <GenericProjectCard size={ size } project={ githubProject} />
    : <LoadingProjectCard size={ size} />;
}

export default GithubProjectCard;
