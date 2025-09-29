const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const UserProgress = require("./User_progress");
const Trivia_Category = require("./trivia_category");

const Milestone = sequelize.define("Milestone", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  redeemed_points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  redeemed_coupons: {
    type: DataTypes.JSON, // {code, discount}
    defaultValue: [],
  },
  redeemed_loyalty_points: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
    allowNull: false,
  },
  last_redeemed_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  timestamps: true,
});

//  Relationships
UserProgress.hasMany(Milestone, { foreignKey: "user_progress_id", onDelete: "CASCADE" });
Milestone.belongsTo(UserProgress, { foreignKey: "user_progress_id" });

//  Connect Milestone to Category
Trivia_Category.hasMany(Milestone, { foreignKey: "category_id", onDelete: "CASCADE" });
Milestone.belongsTo(Trivia_Category, { foreignKey: "category_id" });

module.exports = Milestone;

