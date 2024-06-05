const { enrichProject } = require('../util/projectUtil');

const experiences = require('./experiences');

async function enrichExperience(experience) {
    if (!experience.projects) {
        return Promise.resolve(experience);
    }
    
    return Promise.all(experience.projects.map(enrichProject)).then(enrichedProjects => {
        return {
            ...experience,
            projects: enrichedProjects,
        };
    });
}

async function generateProjectResources(resourceWriter) {
    return Promise.all(experiences.map(enrichExperience)).then(experienceData => resourceWriter("professional-experiences.json", JSON.stringify(experienceData)));
}

module.exports = generateProjectResources;