module.exports = (sequelize, DataTypes) =>
  sequelize.define("user", {
    userName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    puuid: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    summonerLevel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    profileIconId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });
