const fs = require('node:fs');
const path = require('node:path');

const generateExperienceResources = require('./experiences/generate-experiences-resources');
const generateOssProjectResources = require('./oss/generate-oss-resources');

function writeToResourceFile(fileName, data) {
    try {
        const targetFile = path.resolve("src", "config", "generated", fileName);
        fs.writeFileSync(targetFile, data);
      } catch (err) {
        console.error(err);
      }
}

generateExperienceResources(writeToResourceFile);
generateOssProjectResources(writeToResourceFile);