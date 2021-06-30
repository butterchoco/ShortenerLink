const express = require("express");
const router = express.Router();
const IndexController = require("./controller/index");
const RequestTokenController = require("./controller/RequestRequestTokenController");
const SaveLinkController = require("./controller/SaveLinkController");

router.get("/", IndexController);
router.post("/send", SaveLinkController);
router.post("/oauth/token", RequestTokenController);

module.exports = router;
