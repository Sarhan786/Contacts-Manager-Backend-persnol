const express = require("express");
const connect = require("./src/Connection/connect");
const router = require("./src/Routes/Register");

const port = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log(`server is on ${port}`);
});
