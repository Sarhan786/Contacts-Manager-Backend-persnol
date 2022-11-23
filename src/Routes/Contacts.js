const express = require("express");
const { PATCH, GET, DELETE, DELETEMANY } = require("./Callback/ContactsCallback");
const { Tokenverify } = require("./Callback/ContactsCallback");


const router = express.Router();

router.patch("/", PATCH);

router.get("/",GET);

router.delete("/deleteOne/",DELETE);

router.delete("/deletemany/",DELETEMANY);



module.exports =router;