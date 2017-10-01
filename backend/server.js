let path = require("path"),
  express = require("express");

let DIST_DIR = path.join(__dirname),
  PORT = 3000,
  app = express();

app.use(express.static(DIST_DIR));

app.get("*", function (req, res) {
  res.sendFile(path.join(DIST_DIR, "index.html"));
});

app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
 });