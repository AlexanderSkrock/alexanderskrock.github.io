const { enrichProject } = require('../util/projectUtil');

const projects = require('./oss-projects');

async function generateProjectResources(resourceWriter) {
    return Promise.all(projects.map(enrichProject)).then(projectsData => resourceWriter("oss-projects.json", JSON.stringify(projectsData)));
}

module.exports = generateProjectResources;