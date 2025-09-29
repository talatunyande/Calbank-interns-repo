const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define("User", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: {
      name: "unique_username", //  fixed name for index
      msg: "Username already exists",
    },
  },
}, {
  timestamps: false, // no createdAt or updatedAt
});

module.exports = User;
