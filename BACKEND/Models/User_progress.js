const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const UserProgress = sequelize.define("UserProgress", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  streak: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  badges: {
    type: DataTypes.JSON,   // store earned badges in JSON format
    defaultValue: [],
  },
  last_played_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

// Relationship
User.hasOne(UserProgress, { foreignKey: "user_id", onDelete: "CASCADE" });
UserProgress.belongsTo(User, { foreignKey: "user_id" });

module.exports = UserProgress;
