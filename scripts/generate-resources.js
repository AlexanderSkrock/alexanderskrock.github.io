const fs = require('node:fs');
const path = require('node:path');

const generateProjectResources = require('./oss/generate-oss-resources');

function writeToResourceFile(fileName, data) {
    try {
        const targetFile = path.resolve("src", "config", "generated", fileName);
        fs.writeFileSync(targetFile, data);
      } catch (err) {
        console.error(err);
      }
}

generateProjectResources(writeToResourceFile);