// Core node modules
const path = require('path');
const fs = require('fs');

//Third-party modules
const express = require('express');
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

//Utility Functions
const getData = require("./js/getData");

// Open livereload high port and start to watch public directory for changes
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// Ping browser on Express boot, once browser has reconnected and handshaken
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

//Read and parse local json file.
let rawData = fs.readFileSync("data.json");
let data = JSON.parse(rawData);

const app = express();

//Monkey patch every served HTML so they know of changes
app.use(connectLivereload());

const port = 3000;
const staticFolderPath = path.join(__dirname, "../client/public");

app.use(express.static(staticFolderPath));
app.set("view engine", "ejs");


//Routes
app.get('/',(req, res) => {
  res.render("pages/homepage");
})

app.get('/destination/:destinationId', (req, res) => {
  const param = "dest";
  const obj = getData(param, data.destinations, req.params.destinationId);
  res.render("pages/destination", obj);
})

app.get('/crew/:crewId', (req, res) => {
  const param = "crew";
  const obj = getData(param, data.crew, req.params.crewId);
  res.render("pages/crew", obj);
})

app.get('/technology/:techId', (req, res) => {
  const param = "tech";
  const obj = getData(param, data.technology, req.params.techId);
  res.render("pages/technology", obj);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})


