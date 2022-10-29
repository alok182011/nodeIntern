const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const arr = ["NASA", "ISRO", "CIA", "RAW"];

app.get("/hi", (req, res, next) => {
  console.log(req.query);
  if (req.query.index) {
    res.send(arr[req.query.index]);
  } else {
    res.send(arr);
  }
});

app.post("/hi", (req, res, next) => {
  console.log(req.body);
  arr.push(req.body.name);
  res.send(arr);
});

app.put("/hi", (req, res, next) => {
  console.log(req.body);
  const { name, index } = req.body;
  arr[index] = name;
  res.send(arr);
});

app.delete("/hi", (req, res, next) => {
  arr.pop();
  res.send(arr);
});

//default route
app.use("/", (req, res, next) => {
  res.send("Ready to Serve!!!");
});

//if something wrong with the server
app.use((req, res, next) => {
  res.status(500).json({
    message: "Something went wrong",
  });
});

const port = process.env.PORT || 8001;

httpServer.listen(port, () => {
  console.log("serving!!!");
});
