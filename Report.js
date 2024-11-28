const newman = require('newman');
require('dotenv').config();

newman.run({
    collection: `https://api.postman.com/collections/37278328-028bba2e-fd40-47cb-ba5a-d38c743ef9ca?access_key=${process.env.access_key}`,
    //collection:require('./collection/collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    //environment: './env.json',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});