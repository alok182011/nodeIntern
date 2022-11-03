const http = require("http");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const httpServer = http.createServer(app);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const studentRouter = require("./src/api/student/studentRouter");

app.use("/api/student", studentRouter);

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

mongoose.connect(
  "mongodb+srv://nodeintern:nodeintern@nodeintern.jlydipt.mongodb.net/nodeintern?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("MongoDB connected!!!");
  httpServer.listen(port, () => {
    console.log("serving!!!");
  });
});
