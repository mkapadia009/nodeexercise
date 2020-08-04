const express = require("express");
const router = express.Router();

const getData = require("../services/routerServices").getData;
const postData = require("../services/routerServices").postData;
const putData = require("../services/routerServices").putData;
const deleteData = require("../services/routerServices").deleteData;

router.get("/", getData);
router.post("/", postData);
router.put("/", putData);
router.delete("/", deleteData);

module.exports = router;
