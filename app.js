const express = require("express");
const connect = require("./src/Connection/connect");
const RegistrationRouter = require("./src/Routes/Register");
const ContacsRouter = require("./src/Routes/Contacts");
const { Tokenverify } = require("./src/Routes/Callback/AppsCallbacks");
const cors = require('cors')

const port = process.env.PORT || 5050;
const app = express();
app.use(cors())

app.use(express.json());
app.use("/contacts", Tokenverify);
app.use("/", RegistrationRouter);
app.use("/contacts", ContacsRouter);

app.listen(port, () => {
  console.log(`server is on ${port}`);
});
