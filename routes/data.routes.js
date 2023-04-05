const express = require("express");
const {
  post,
  getData,
  searchbyname,
  searchbyDate,
  postData,
} = require("../controller/data");

const dataRouter = express.Router();

dataRouter.post("/", postData);

dataRouter.get("/", getData);

dataRouter.get("/searchbyname", searchbyname);

module.exports = { dataRouter };
