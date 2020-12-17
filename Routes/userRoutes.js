const express = require("express");
const { addChild, getChild } = require("../Controller/childController");
const { addState, getState } = require("../Controller/stateController");
const { addDistrict, getDistrict } = require("../Controller/districtController");


const router = express.Router();

router.get("/getChild", getChild);
router.get("/getState", getState);
router.get("/getDistrict", getDistrict);
router.post("/addChild", addChild);
router.post("/addState", addState);
router.post("/addDistrict", addDistrict);


module.exports = router;
