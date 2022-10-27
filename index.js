const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const productCollection = require("./fakeData/Courses.json");

app.get("/", (req, res) => {
  res.send(productCollection);
});
app.get("/allproduct", (req, res) => {
  res.send(productCollection);
});




app.listen(Port, () => {
  console.log("Server is running on port:", Port);
});
