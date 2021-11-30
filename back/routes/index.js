const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("adsf");
});

router.get("/matchUpdate", (req, res, next) => {
  return res.redirect(`/APIRequest/summoner/${req.body.nickname}`);
});

module.exports = router;
