const express = require("express");
const router = express.Router();
const { Rank } = require("../models");

router.get("/", (req, res, next) => {
  res.send("adsf");
});

router.get("/matchUpdate", (req, res, next) => {
  return res.redirect(`/APIRequest/summoner/${req.body.nickname}`);
});

router.get("/getRank", async (req, res, next) => {
  try {
    const existRank = Rank.findAll({});
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/updateRank", (req, res, next) => {
  return res.redirect("APIRequest/updateRank");
});

module.exports = router;
