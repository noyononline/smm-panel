require("dotenv").config();
const express = require("express");
const { dbConnect } = require("./utiles/db");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const port = process.env.PORT || 4000;
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api", require("./routes/authRoutes"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});
dbConnect();
app.listen(port, (req, res) => {
  console.log(` server listening on ${port}`);
});
