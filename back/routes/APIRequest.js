const express = require("express");
const router = express.Router();
const axios = require("axios");

require("dotenv").config();

// 소환사 puuid 가져오기
router.get("/summoner/:nickname", async (req, res, next) => {
  try {
    let puuid = null;
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/tft/summoner/v1/summoners/by-name/${encodeURIComponent(
        req.params.nickname
      )}`,
      {
        headers: { "X-Riot-Token": process.env.RIOT_API_KEY },
      }
    );
    console.log(data);
    puuid = data.puuid;
    return res.redirect(
      `/APIRequest/getmatchid/${puuid}/1/${process.env.RIOT_API_KEY}`
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 게임 매치번호 가져오기
router.get("/getmatchid/:puuid/:count/:key", async (req, res, next) => {
  try {
    const { data } = await axios.get(
      `https://asia.api.riotgames.com/tft/match/v1/matches/by-puuid/${req.params.puuid}/ids?count=${req.params.count}&api_key=${req.params.key}`
    );
    return res.redirect(
      `/APIRequest/gamematchdata/${data}/${req.params.puuid}`
    );
  } catch (error) {
    console.error(error);
    next(error);
  }
});

// 게임 데이터 가져오기
router.get("/gamematchdata/:matchid/:puuid", async (req, res, next) => {
  try {
    const puuid = req.params.puuid;
    const { data } = await axios.get(
      `https://asia.api.riotgames.com/tft/match/v1/matches/${req.params.matchid}?api_key=${process.env.RIOT_API_KEY}`
    );
    let myGameData;
    data.info.participants.forEach((v) => {
      if (v.puuid === puuid) {
        myGameData = v;
      }
    });
    return res.send(data);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.get("/updateRank", async (req, res, next) => {
  const { data } = await axios.get(
    `https://kr.api.riotgames.com/tft/league/v1/challenger?api_key=${process.env.RIOT_API_KEY}`
  );
  let rank = data.entries;
  rank.sort((a, b) => b.leaguePoints - a.leaguePoints);
  return res.json(rank);
});

module.exports = router;
