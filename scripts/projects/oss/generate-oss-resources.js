const { enrichProject } = require('../projects');

const projects = require('./oss-projects');

async function generateProjectResources(resourceWriter) {
    return Promise.all(projects.map(enrichProject)).then(projectsData => resourceWriter("oss-projects.json", JSON.stringify(projectsData)));
}

module.exports = generateProjectResources;