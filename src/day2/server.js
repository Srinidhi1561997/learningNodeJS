// load up the express framework and body-parser helper
const express = require('express');
const bodyParser = require('body-parser');

// create an instance of express to serve our end points
const app = express();
const router = express.Router();
// we'll load up node's built in file system helper library here
// (we'll be using this later to serve our JSON files
const fs = require('fs');

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.json());

const dataPath = './data/users.json';

if(!fs.existsSync('data')){
  fs.mkdir('data', (err) => {
    if (err) {
        return console.error(err);
    }
});
};

if(!fs.existsSync(dataPath)){
    fs.writeFileSync(dataPath, JSON.stringify([]));
}
const routes = require('./routes/routes.js')(app, fs);
// finally, launch our server on port 3001.
const server = app.listen(3200, () => {
  console.log('listening on port %s...', server.address().port);
});