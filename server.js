const express = require("express");
const app = express();

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});

app.get("*", (req, res) => {
  res.sendFile( __dirname + req.path);
});