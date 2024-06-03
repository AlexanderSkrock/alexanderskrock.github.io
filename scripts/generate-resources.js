const fs = require('node:fs');
const path = require('node:path');

const generateProfessionalProjectResources = require('./projects/professional/generate-professional-resources');
const generateOssProjectResources = require('./projects/oss/generate-oss-resources');

function writeToResourceFile(fileName, data) {
    try {
        const targetFile = path.resolve("src", "config", "generated", fileName);
        fs.writeFileSync(targetFile, data);
      } catch (err) {
        console.error(err);
      }
}

generateProfessionalProjectResources(writeToResourceFile);
generateOssProjectResources(writeToResourceFile);