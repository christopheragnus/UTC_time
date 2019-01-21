const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Enable All CORS Requests
app.use(cors());


app.get("/", (req, res) => {
  res.send("<h1>hello world</h1>");
});

app.post("/api", (req, res) => {
  let device_id = req.body.device_id;
  let time_start = req.body.time;
  let date_start = req.body.date;
  let datetime = req.body.datetime;

  let isoDate = new Date(`${date_start} ${time_start}`);

  res.send(
    `
    <p>Device id: ${device_id} </p>
    <p>Start time: ${time_start} </p>
    <p>Start Date: ${date_start} </p>
    <p>Start Date/Time: ${isoDate.toString()}</p>
    <p>Start UTC Time: ${isoDate.toISOString()}</p>
    <p>End Date/Time: ${datetime} </p>
    `
  );
});

app.listen(8080, () => {
  console.log("Listening on port 8080");
});
