const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = 5000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get("/test", (req, res) => res.status(200).send({ msg: "this is a test" }));

app.listen(port, err => {
  if (err) console.log("error");
  console.log("listening on 5000");
});
