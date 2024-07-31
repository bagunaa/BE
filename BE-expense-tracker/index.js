import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 8000;

const fs = require("fs");

fs.readFileSync("DATA>");

app.use(bodyParser.json());

app.get("/write", (req, res) => {
  console.log(req.body, "request");

  res.send("Success");
});

app.post("/read", (req, res) => {
  res.send();
});

app.listen(port, () => {
  console.log(`My backend app listening on port ${port}`);
});
