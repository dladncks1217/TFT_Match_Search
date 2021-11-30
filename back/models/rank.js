module.exports = (sequelize, DataTypes) =>
  sequelize.define("Rank", {
    userName: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    leaguePoint: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gamecount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    winrate: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    win: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
    lose: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: false,
    },
  });
