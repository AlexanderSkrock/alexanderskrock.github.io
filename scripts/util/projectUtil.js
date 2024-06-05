const githubRepoApiUrl = "https://api.github.com/repos";

async function enrichGithubProject(githubProject) {
    return new Promise(resolve => {
        const repoPath = new URL(githubProject.github).pathname;
        resolve(repoPath);
    })
    .then(repoPath => fetch(githubRepoApiUrl + repoPath))
    .then(response => {
        if (response.ok) {
            return response.json()
        } else {
            throw new Error("GitHub API request returned an error.");
        }
    })
    .then(json => ({
        icon: json.owner.avatar_url,
        name: json.full_name,
        description: json.description,
        links: [{ url: json.html_url }],
    }));
}

async function enrichProject(project) {
    if (project.github) {
        return enrichGithubProject(project).catch(e => {
            throw new Error(`Failed to load details from GitHub for project '${project.github}'`,  { cause: e })
        });
    }

    return Promise.resolve(project);
}

module.exports = {
    enrichProject: enrichProject
};