const express = require("express");
const connect = require("./Connection/connect")


const port = process.env.PORT || 5050;
const app = express();

app.listen(port , ()=>{console.log(`server is on ${port}`)})