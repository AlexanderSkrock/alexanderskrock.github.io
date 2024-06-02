const { enrichProject } = require('../projects');

const projects = require('./business-projects');

async function generateProjectResources(resourceWriter) {
    return Promise.all(projects.map(enrichProject)).then(projectsData => resourceWriter("business-projects.json", JSON.stringify(projectsData)));
}

module.exports = generateProjectResources;