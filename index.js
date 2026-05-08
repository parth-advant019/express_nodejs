const express = require("express");
const app = express();

// app.use("/", (req, res, next) => {
//   console.log("this is first middleware");
//   next();
// });

// app.use("/", (req, res, next) => {
//   console.log("this is second middleware");
//   res.send("<h1>This is second middleware</h1>");
// });

app.use("/users", (req, res, next) => {
  console.log("this is user middleware");
  res.send("<h1>this is user middleware</h1>");
});

app.use("/", (req, res, next) => {
  console.log("This is base middleware with response");
  res.send("<h1>This is base middleware with response</h1>");

  next();
});

app.listen(3000);
