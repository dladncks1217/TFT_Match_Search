module.exports = (sequelize, DataTypes) =>
  sequelize.define("match", {
    userName: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
    gameDate: {
      type: DataTypes.STRING(40),
      allowNull: false,
      unique: true,
    },
  });
