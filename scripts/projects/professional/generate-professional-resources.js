const { enrichProject } = require('../projects');

const projects = require('./professional-projects');

async function generateProjectResources(resourceWriter) {
    return Promise.all(projects.map(enrichProject)).then(projectsData => resourceWriter("professional-projects.json", JSON.stringify(projectsData)));
}

module.exports = generateProjectResources;