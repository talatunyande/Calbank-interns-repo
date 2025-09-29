// models/leaderboard.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const UserProgress = require("./User_progress");
const User = require("./user");

const Leaderboard = sequelize.define("Leaderboard", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  position: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false, // leaderboard can be recomputed
});

// 🔗 Relationships
UserProgress.hasOne(Leaderboard, { foreignKey: "user_progress_id", onDelete: "CASCADE" });
Leaderboard.belongsTo(UserProgress, { foreignKey: "user_progress_id" });

// Also link User directly for convenience
User.hasOne(Leaderboard, { foreignKey: "user_id", onDelete: "CASCADE" });
Leaderboard.belongsTo(User, { foreignKey: "user_id" });

module.exports = Leaderboard;
