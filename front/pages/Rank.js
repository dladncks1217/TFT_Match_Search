import React from "react";
import RankCard from "../components/RankCard";
import { Table } from "antd";

const columns = [
  {
    title: "Rank",
    dataIndex: "summonerName",
  },
  {
    title: "LP",
    dataIndex: "leaguePoints",
  },
  {
    title: "승률",
    dataIndex: "",
  },
  {
    title: "게임 수",
    dataIndex: "wins" + "losses",
  },
  {
    title: "승",
    dataIndex: "wins",
  },
];

const data = [
  {
    summonerId: "acdNLD8-Z4MsHW8dIpVtLqpnZeY9FUm9VUX4hv9NPK3S1U8",
    summonerName: "SanChess",
    leaguePoints: 1607,
    rank: "I",
    wins: 74,
    losses: 214,
    veteran: true,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    summonerId: "f80wWZHiv8IGMAbZ6IB05VkKk4TS6K3qGcg139nczldQYl0",
    summonerName: "FA strongsexy",
    leaguePoints: 1430,
    rank: "I",
    wins: 62,
    losses: 239,
    veteran: true,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    summonerId: "VLoKxsbpQCUthkkWlMCHuBHImDkJkvclPVPxDI3OEVSYPJg",
    summonerName: "줘 너",
    leaguePoints: 1419,
    rank: "I",
    wins: 60,
    losses: 185,
    veteran: true,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    summonerId: "Mqj3gEJkGr3Yd9ObSFWNsy-rFknOlz_gdNjiL0UYl_HMj5w",
    summonerName: "My Paradise",
    leaguePoints: 1417,
    rank: "I",
    wins: 47,
    losses: 130,
    veteran: false,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    summonerId: "WhuOPfmyhCHfzxCMUHlw2Eyr2ug1MRJ-VNgCDC-bajoXP8w",
    summonerName: "내오버레이돌려줘",
    leaguePoints: 1408,
    rank: "I",
    wins: 78,
    losses: 352,
    veteran: true,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    summonerId: "TdCBOCxXZ3jLotD1X8_jQotCXe5nyxVo-KeVDmtdfbiiH5Y",
    summonerName: "두눈이",
    leaguePoints: 1310,
    rank: "I",
    wins: 67,
    losses: 229,
    veteran: true,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
  {
    summonerId: "tNcFpYQsSvKiYDQicQi1TUH3bxPQA0ZlTKjXKCHs4eiYiQ",
    summonerName: "피부미인드록바",
    leaguePoints: 1252,
    rank: "I",
    wins: 68,
    losses: 206,
    veteran: true,
    inactive: false,
    freshBlood: false,
    hotStreak: false,
  },
];
const Rank = () => {
  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};

export default Rank;
