var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
var bodyParser = require("body-parser");
var cors = require("cors");

var json = {
  title: "test json response",
  message: "this is a message",
  time: "now",
};

const DIST_DIR = path.join(__dirname, "../dist"); // NEW
const HTML_FILE = path.join(DIST_DIR, "index.html"); // NEW

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
// to use json
app.use(bodyParser.json());
// to use url encoded values
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.static(DIST_DIR));

console.log(JSON.stringify(mockAPIResponse));

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.get("/test", function (req, res) {
  res.json(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(port, function () {
  console.log("Example app listening on port " + port);
});
