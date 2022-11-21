const mongoose = require("mongoose");

mongoose
  .connect(
    "")
  .then(() => {
    console.log("Login successful");
  })
  .catch((err) => {
    console.log(err);
  });
