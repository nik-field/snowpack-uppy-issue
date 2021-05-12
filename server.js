const express = require("express");
const fs = require("fs");
const cors = require("cors");
const https = require("https");
const path = require("path");
const app = express();

// app.get("/", (req, res) => {
//   res.sendFile(path.join(`${__dirname}/build/`));
// });
app.use(express.static(path.join(`${__dirname}/build/`)));

app.listen({ port: 8080, cors }, () => {
  console.log(`
	Listening on http://localhost:8080
	`);
});
