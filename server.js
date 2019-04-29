const express = require("express");
const http = require("http");
const cors = require("cors");

const port = 4001;
const app = express();
const server = http.createServer(app);
app.use(express.static("./public/index.html"));
app.use(cors());

let dateTime = new Date();

app.get("/bmi", (req, res) => {
  console.log(`Got a request to calculate a bmi score at ${dateTime}`);
  const height = req.headers.height;
  const weight = req.headers.weight;
  const bmi = weight / (height * height);
  res.json({
    bmi: bmi
  });
});

server.listen(port, () => console.log(`Server Listening On Port ${port}`));
