const fs = require('node:fs');
const path = require('node:path');

const generateProjectResources = require('./projects/generate-project-resources');

function writeToResourceFile(fileName, data) {
    try {
        const targetFile = path.resolve("src", "generated", fileName);
        fs.writeFileSync(targetFile, data);
      } catch (err) {
        console.error(err);
      }
}

generateProjectResources(writeToResourceFile);