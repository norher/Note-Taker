const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

const writeFile = (destination, content) =>
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        if (err) {
            console.error(err);
        } else {
            console.info(`New Notes were created at ${destination}!`)
        }
    });

const readAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            const parsedData = JSON.parse(data);
            parsedData.push(content);
            writeFile(file, parsedData);
        }
    });
};

function uuid() {
    return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
}

module.exports = { readFile, writeFile, readAppend, uuid };